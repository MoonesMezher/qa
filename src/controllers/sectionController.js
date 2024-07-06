const Category = require("../database/models/Category");
const Question = require("../database/models/Question");
const Section = require("../database/models/Section");
const { inSection } = require("../helpers/countOfQuestions");
const normalizePath = require("../helpers/normalizePathName");
const { deleteImages } = require("../middlewares/checkFromImageMiddleware");

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
        const section = await Section.findByIdAndDelete(id);

        const categories = await Category.find({ section_id: id }).lean()
                
        await Promise.all(categories.map(async (category) => {
            await deleteImages('category', category.picture);
        }));

        await Category.deleteMany({ section_id: id });

        await Question.updateMany({ section_id: id }, { active: false });

        deleteImages('section', section.picture);

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
        const sectionss = await Section.find({});

        const sections = await Promise.all(sectionss.map(async e => {
            const count = await inSection(e._id);
    
            return {section: e, questions_count: count}
        }))
        
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

    const sectionss = await Section.find({ name: { $regex: nameRegex} });

    const sections = await Promise.all(sectionss.map(async e => {
        const count = await inSection(e._id);

        return {section: e, questions_count: count}
    }))

    return res.status(200).send({ state: 'success', message: 'Get sections successfully', sections: sections });
}

const showAllActiveSections = async (req, res) => {
    const sectionss = await Section.find({ active: true });

    if(!sectionss) {
        return res.status(400).send({ state: 'failed', message: 'You dont have any active section' });
    }

    const sections = await Promise.all(sectionss.map(async e => {
        const count = await inSection(e._id);

        return {section: e, questions_count: count}
    }))

    return res.status(200).send({ state: 'success', message: 'Get active sections successfully', sections: sections });
}

const showAllNotActiveSections = async (req, res) => {
    const sectionss = await Section.find({ active: false });

    if(!sectionss) {
        return res.status(400).send({ state: 'failed', message: 'You dont have any none active sections' });
    }

    const sections = await Promise.all(sectionss.map(async e => {
        const count = await inSection(e._id);

        return {section: e, questions_count: count}
    }))

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

const getAllSectionsAndCategoris = async (req, res) => {
    try {
        const sections = await Section.find({ active: true }).sort({ name: 1 });

        const categories = await Category.find({ active: true }).sort({ name: 1 });

        let combinedData = [...sections, ...categories].sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
        });

        combinedData = await Promise.all(combinedData.map(async (e) => {
            if(e.section_id) {
                let sectionName = "";

                if(e._doc.name === 'Other') {
                    const section = await Section.findById(e.section_id);

                    sectionName = section?.name;
                }

                return {id: e._doc._id, name: e._doc.name === 'Other'? "Other "+sectionName: e._doc.name, picture: e._doc.picture, type: 'category' }
            } else {
                return {id: e._doc._id, name: e._doc.name, picture: e._doc.picture, type: 'section' };
            }
        }));

        const totalSectionsCount = await Section.countDocuments({ active: true });

        const totalCategoriesCount = await Category.countDocuments({ active: true });

        const totalCount = totalSectionsCount + totalCategoriesCount;

        return res.status(200).json({state: 'success', message: 'Get all sections & categories successfully', combinedData, total: totalCount})
    } catch (err) {
        return res.status(400).json({state: 'failed', message: err.message })
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
    disactivateSection,
    getAllSectionsAndCategoris
}