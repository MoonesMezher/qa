const Category = require("../database/models/Category");
const Question = require("../database/models/Question");
const Section = require("../database/models/Section");
const normalizePath = require("../helpers/normalizePathName");

const createSection = async (req, res) => {
    const { name, picture } = req.body;

    const inputsWrong = [];

    if(!name) {
        inputsWrong.push('name');
    }
    
    if(!picture) {
        inputsWrong.push('picture');
    }
    
    if(inputsWrong.length > 0) {
        return res.status(400).send({ state: 'failed', message: 'Picture & Name must have a value', inputsWrong: inputsWrong });
    }

    if(typeof picture !== 'string') {
        inputsWrong.push('picture');
    }

    if(typeof name !== 'string') {
        inputsWrong.push('name');
    }

    if(inputsWrong.length > 0) {
        return res.status(400).send({ state: 'failed', message: 'Picture & Name must be a string', inputsWrong: inputsWrong });
    }

    const section = await Section.findOne({ name: name });

    if(section) {
        inputsWrong.push('name');
        return res.status(400).send({ state: 'failed', message: 'You already have section with the same name', inputsWrong: inputsWrong });
    }

    try {
        await Section.create({ name: name, picture: picture});

        return res.status(200).send({ state: 'success', message: 'Created section successfully' });
    } catch(err) {
        return res.status(400).send({ state: 'failed', message: err.message });
    }
}

const updateSection = async (req, res) => {
    let { name, picture } = req.body;

    const { id } = req.params;

    const isExist = await Section.findById(id);

    if(!isExist) {
        return res.status(400).send({ state: 'failed', message: 'This section doesnot exist' });
    }

    const inputsWrong = [];

    if(!name) {
        inputsWrong.push('name');
    }

    if(inputsWrong.length > 0) {
        return res.status(400).send({ state: 'failed', message: 'Name must have a value', inputsWrong: inputsWrong });
    }

    if(picture && typeof picture !== 'string') {
        inputsWrong.push('picture');
    }

    if(typeof name !== 'string') {
        inputsWrong.push('name');
    }
    
    if(inputsWrong.length > 0) {
        return res.status(400).send({ state: 'failed', message: 'Picture & Name must be a string', inputsWrong: inputsWrong });
    }

    const section = await Section.findOne({ name: name, _id :{ $ne: id } });

    if(section) {
        inputsWrong.push('name');
        return res.status(400).send({ state: 'failed', message: 'You already have section with the same name', inputsWrong: inputsWrong });
    }

    try {
        let section;
        if(!picture) {
            section = await Section.findByIdAndUpdate(id ,{ name: name }, { new: true });
        } else {
            section = await Section.findByIdAndUpdate(id ,{ name: name, picture: picture }, { new: true });
        }

        return res.status(200).send({ state: 'success', message: 'Updated section successfully', section });
    } catch(err) {
        return res.status(400).send({ state: 'failed', message: err.message });
    }
}

const deleteSection = async (req, res) => {
    const { id } = req.params;

    const section = await Section.findById(id);

    if(!section) {
        return res.status(400).send({ state: 'failed', message: 'This section doesnot exist' });
    }

    try {
        await Section.findByIdAndDelete(id);

        await Category.deleteMany({ section_id: id });

        await Question.updateMany({ section_id: id }, { active: false });

        return res.status(200).send({ state: 'success', message: 'Deleted section successfully' });
    } catch(err) {
        return res.status(400).send({ state: 'failed', message: err.message });
    }
}

const showSection = async (req, res) => {
    const { id } = req.params;

    const section = await Section.findById(id);

    const questions = await Question.countDocuments({ section_id: id });

    if(!section) {
        return res.status(400).send({ state: 'failed', message: 'This section doesnot exist' });
    }

    return res.status(200).send({ state: 'success', message: 'Get section successfully', section: section, count_questions: questions });
}

const showSections = async (req, res) => {
    try {
        const sections = await Section.find({});
        
        return res.status(200).send({ state: 'success', message: 'Get sections successfully', sections: sections });
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });
    }
}

const showSectionsByName = async (req, res) => {
    const { name } = req.params;

    if(typeof name !== 'string') {
        return res.status(400).send({ state: 'failed', message: 'Name must be a string' });
    }

    const nameRegex = new RegExp(`.*${name}.*`, 'i');

    const sections = await Section.find({ name: { $regex: nameRegex} });

    return res.status(200).send({ state: 'success', message: 'Get sections successfully', sections: sections });
}

const showAllActiveSections = async (req, res) => {
    const sections = await Section.find({ active: true });

    if(!sections) {
        return res.status(400).send({ state: 'failed', message: 'You dont have any active section' });
    }

    return res.status(200).send({ state: 'success', message: 'Get active sections successfully', sections: sections });
}

const showAllNotActiveSections = async (req, res) => {
    const sections = await Section.find({ active: false });

    if(!sections) {
        return res.status(400).send({ state: 'failed', message: 'You dont have any none active sections' });
    }

    return res.status(200).send({ state: 'success', message: 'Get not active sections successfully', sections: sections });
}

const activateSection = async (req, res) => {
    const { id } = req.params;

    const section = await Section.findById(id);

    if(!section) {
        return res.status(400).send({ state: 'failed', message: 'This section doesnot exist' });
    }

    if(section.active) {
        return res.status(400).send({ state: 'failed', message: 'This section already is active' });
    }

    try {
        await Section.findByIdAndUpdate(id, { active: true });
        await Category.updateMany({section_id: id}, { active: true });

        return res.status(200).send({ state: 'success', message: 'Activated section successfully' });
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });        
    }
}

const disactivateSection = async (req, res) => {
    const { id } = req.params;

    const section = await Section.findById(id);

    if(!section) {
        return res.status(400).send({ state: 'failed', message: 'This section doesnot exist' });
    }

    if(!section.active) {
        return res.status(400).send({ state: 'failed', message: 'This section already is not active' });
    }

    try {
        await Section.findByIdAndUpdate(id, { active: false });
        await Category.updateMany({section_id: id}, { active: false });

        return res.status(200).send({ state: 'success', message: 'Disactivated section successfully' });
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });        
    }
}

module.exports = {
    createSection,
    updateSection,
    deleteSection,
    showSection,
    showSections,
    showSectionsByName,
    showAllActiveSections,
    showAllNotActiveSections,
    activateSection,
    disactivateSection
}