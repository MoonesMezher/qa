const array_of_allowed_files = ['png', 'jpeg', 'jpg', 'webp'];

const normalizePath = require("../helpers/normalizePathName");

const uploadImage = async (req, res) => {
    const file = req.file;

    const { folder } = req.params;

    if(!folder) {
        return res.status(400).json({ state: "failed", message: "You must select a folder" })        
    }

    if(!['questions', 'offers', 'category','section', 'profile'].includes(folder)) {
        return res.status(400).json({ state: "failed", message: "Invalid folder name" })        
    }

    if(!file) {
        return res.status(400).json({ state: "failed", message: "You must select a file as picture" })        
    }

    const fileExtension = file.originalname.slice(
        ((file.originalname.lastIndexOf('.') - 1) >>> 0) + 2
    );
    if (!array_of_allowed_files.includes(fileExtension)) {
        return res.status(400).json({ state: "failed", message: "Invalid file type" })        
    }
    // // Additional check to ensure the file is an image file
    // if (!file.mimetype.startsWith('image/')) {
    //     return res.status(400).json({ state: "failed", message: "Invalid image file" })        
    // }

    const path = normalizePath(file);

    return res.status(200).json({ state: "success", message: "Uploaded image successfully", path }) 
}

module.exports = {
    uploadImage
}