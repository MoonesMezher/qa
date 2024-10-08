const Question = require("../database/models/Question")

const inCategory = async (id) => {
    const count = await Question.countDocuments({ category_ids: { $in: id }});
    const countTrueFalse = await Question.countDocuments({ type: 'true-false' ,category_ids: { $in: id }});
    const countMultipale = await Question.countDocuments({ type: 'multipale' ,category_ids: { $in: id }});
    const countNormal = await Question.countDocuments({ type: 'normal' ,category_ids: { $in: id }});
    const countCheck = await Question.countDocuments({ check: true, category_ids: { $in: id }});
    const countNotCheck = await Question.countDocuments({ check: false, category_ids: { $in: id }});

    return { count, countMultipale, countNormal, countTrueFalse, countCheck, countNotCheck };
}

const inSection = async (id) => {
    const count = await Question.countDocuments({ section_id: id });

    return count;
}

module.exports = {
    inCategory,
    inSection,
}