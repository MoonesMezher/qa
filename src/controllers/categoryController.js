const Category = require("../database/models/Category");
const Section = require("../database/models/Section");
const Question = require("../database/models/Question");
const { default: mongoose } = require("mongoose");
const { inCategory } = require("../helpers/countOfQuestions");
const { deleteImages } = require("../middlewares/checkFromImageMiddleware");

const createCategory = async (req, res) => {
    let { name, section_id, picture } = req.body;
    
    const inputsWrong = [];

    if(!section_id) {
        return res.status(400).send({ state: 'failed', message: 'Section Id cannot be empty' });        
    }

    if (!mongoose.Types.ObjectId.isValid(section_id)) {
        return res.status(400).send({ state: 'failed', message: 'Invalid section id' });
    }

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

    const category = await Category.findOne({ section_id: section_id,name: name });

    if(category) {
        inputsWrong.push('name');
        return res.status(400).send({ state: 'failed', message: 'You already have category with the same name in the same section', inputsWrong: inputsWrong });
    }

    try {
        await Category.create({ name: name, picture: picture, section_id: section_id});

        return res.status(200).send({ state: 'success', message: 'Created category successfully' });
    } catch(err) {
        return res.status(400).send({ state: 'failed', message: err.message });
    }
}

const updateCategory = async (req, res) => {
    const { name, section_id, picture } = req.body;

    if(!section_id) {
        return res.status(400).send({ state: 'failed', message: 'Section Id cannot be empty' });        
    }

    if (!mongoose.Types.ObjectId.isValid(section_id)) {
        return res.status(400).send({ state: 'failed', message: 'Invalid section id' });
    }

    const { id } = req.params;

    const isExist = await Category.findById(id);

    if(!isExist) {
        return res.status(400).send({ state: 'failed', message: 'This category doesnot exist' });
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

    const category = await Category.findOne({ name: name, section_id: section_id, _id: { $ne: id } });

    if(category) {
        inputsWrong.push('name');
        return res.status(400).send({ state: 'failed', message: 'You already have category with the same name with the same section', inputsWrong: inputsWrong, category });
    }

    try {
        if(category.section_id.toString() !== section_id.toString()) {
            const questions = await Question.find({ section_id, category_ids: { $in: category._id }});

            Promise.all(questions.map(async q => {
                await Question.findByIdAndUpdate(q._id, { section_id });
            }))
        }

        let category;
        if(picture) {
            category = await Category.findByIdAndUpdate(id ,{ name, picture, section_id }, { new: true });
        } else {
            category = await Category.findByIdAndUpdate(id ,{ name, section_id }, { new: true });
        }

        return res.status(200).send({ state: 'success', message: 'Updated category successfully', category});
    } catch(err) {
        return res.status(400).send({ state: 'failed', message: err.message });
    }
}

const deleteCategory = async (req, res) => {
    const { id } = req.params;

    const category = await Category.findById(id);

    if(!category) {
        return res.status(400).send({ state: 'failed', message: 'This category doesnot exist' });
    }

    try {
        deleteImages('category', category.picture)

        await Category.findByIdAndDelete(id);

        const countOfQuestions = await Question.countDocuments({ category_ids: { $size: 1, $in: id }});

        if(countOfQuestions > 0) {
            let otherCategory = await Category.findOne({ name: 'Other', section_id: category.section_id });

            if(!otherCategory) {
                otherCategory = await Category.create({ name: 'Other', section_id: category.section_id, picture: 'uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg'});
            }

            await Question.updateMany({ category_ids: { $size: 1, $in: id }}, { category_ids: [otherCategory._id]}, { new: true });
        }

        const questionsHaveTheSameId = await Question.find({ category_ids: { $in: id } });

        await Promise.all(questionsHaveTheSameId.map(async q => {
            const categories = q.category_ids.filter(e => e !== id);
            
            await Question.findByIdAndUpdate(q._id, { category_ids: categories });
        }));

        return res.status(200).send({ state: 'success', message: 'Deleted category successfully'});
    } catch(err) {
        return res.status(400).send({ state: 'failed', message: err.message });
    }
}

const showCategory = async (req, res) => {
    const { id } = req.params;

    const category = await Category.findById(id);

    if(!category) {
        return res.status(400).send({ state: 'failed', message: 'This category doesnot exist' });
    }

    return res.status(200).send({ state: 'success', message: 'Get category successfully', category: category });
}

const showCategoryBySection = async (req, res) => {
    const { section } = req.params;

    const sectionObj = await Section.findOne({ name: section });

    if(!sectionObj) {
        return res.status(400).send({ state: 'failed', message: 'This section doesnot exist' });
    }

    const categoryss = await Category.find({ section_id: sectionObj._id });

    const categorys = await Promise.all(categoryss.map(async e => {
        const count = await inCategory(e._id);

        return {category: e, total: count.count, trueAndFalseCount: count.countTrueFalse, multipaleCount: count.countMultipale, normalCount: count.countNormal }
    }))

    return res.status(200).send({ state: 'success', message: 'Get categorys successfully', categorys: categorys });
}

const showCategoryByWord = async (req, res) => {
    const { word } = req.params;

    try {
        const regex = new RegExp(`.*${word}.*`, "i");

        const categoryss = await Category.find({ name: { $regex: regex } });

        const categorys = await Promise.all(categoryss.map(async e => {
            const count = await inCategory(e._id);
    
            return {category: e, total: count.count, trueAndFalseCount: count.countTrueFalse, multipaleCount: count.countMultipale, normalCount: count.countNormal }
        }))
        
        return res.status(200).send({ state: 'success', message: `Get categorys has word: ${word} successfully`, categorys: categorys });
    } catch (error) {        
        return res.status(400).send({ state: 'failed', message: error.message});
    }
}

const showAllActiveCategorys = async (req, res) => {
    const categoryss = await Category.find({ active: true });

    if(!categoryss) {
        return res.status(400).send({ state: 'failed', message: 'You dont have any active category' });
    }

    const categorys = await Promise.all(categoryss.map(async e => {
        const count = await inCategory(e._id);

        return {category: e, total: count.count, trueAndFalseCount: count.countTrueFalse, multipaleCount: count.countMultipale, normalCount: count.countNormal }
    }))

    return res.status(200).send({ state: 'success', message: 'Get active categorys successfully', categorys: categorys });
}

const showAllNotActiveCategorys = async (req, res) => {
    const categoryss = await Category.find({ active: false });

    if(!categoryss) {
        return res.status(400).send({ state: 'failed', message: 'You dont have any none active categorys' });
    }

    const categorys = await Promise.all(categoryss.map(async e => {
        const count = await inCategory(e._id);

        return {category: e, total: count.count, trueAndFalseCount: count.countTrueFalse, multipaleCount: count.countMultipale, normalCount: count.countNormal }
    }))

    return res.status(200).send({ state: 'success', message: 'Get not active categorys successfully', categorys: categorys });
}

const activateCategory = async (req, res) => {
    const { id } = req.params;

    const category = await Category.findById(id);

    if(!category) {
        return res.status(400).send({ state: 'failed', message: 'This category doesnot exist' });
    }

    if(category.active) {
        return res.status(400).send({ state: 'failed', message: 'This category already is active' });
    }

    try {
        await Category.findByIdAndUpdate(id, { active: true });

        return res.status(200).send({ state: 'success', message: 'Activated category successfully' });
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });        
    }
}

const disactivateCategory = async (req, res) => {
    const { id } = req.params;

    const category = await Category.findById(id);

    if(!category) {
        return res.status(400).send({ state: 'failed', message: 'This category doesnot exist' });
    }

    if(!category.active) {
        return res.status(400).send({ state: 'failed', message: 'This category already is not active' });
    }

    try {
        await Category.findByIdAndUpdate(id, { active: false });

        return res.status(200).send({ state: 'success', message: 'Disactivated category successfully' });
    } catch (error) {
        return res.status(400).send({ state: 'failed', message: error.message });        
    }
}

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    showCategory,
    showCategoryBySection,
    showAllActiveCategorys,
    showAllNotActiveCategorys,
    activateCategory,
    disactivateCategory,
    showCategoryByWord
}