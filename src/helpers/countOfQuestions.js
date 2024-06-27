const Question = require("../database/models/Question")

const inCategory = async (id) => {
    const count = await Question.find({ category_ids: { $in: id }});

    return count?.length;
}

const inSection = async (id) => {
    const count = await Question.find({ section_id: id });

    return count?.length;
}

module.exports = {
    inCategory,
    inSection,
}