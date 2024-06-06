const multer = require('multer');
const randomInts = require('../helpers/generateRandomNumbersToUsernames');
const normalizePath = require('../helpers/normalizePathName');

const array_of_allowed_files = ['png', 'jpeg', 'jpg', 'webp'];
const array_of_allowed_file_types = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(req.params.folder === 'questions') {
            cb(null, 'src/uploads/questions');
        } else if(req.params.folder === 'offers') {
            cb(null, 'src/uploads/offers');
        } else if(req.params.folder === 'profile') {
            cb(null, 'src/uploads/profile');
        } else if(req.params.folder === 'section') {
            cb(null, 'src/uploads/section');
        } else if(req.params.folder === 'category') {
            cb(null, 'src/uploads/category');
        } else {
            return cb(new Error('Invalid folder'));
        }
    },
    filename: (req, file, cb) => {
        cb(null, randomInts(1, 100000)[0] + Date.now() + '-' + file.originalname);
    }
});

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
        return res.status(400).json({ state: "failed", message: "You must select a file" })        
    }

    const fileExtension = file.originalname.slice(
        ((file.originalname.lastIndexOf('.') - 1) >>> 0) + 2
    );
    if (!array_of_allowed_files.includes(fileExtension) || !array_of_allowed_file_types.includes(file.mimetype)) {
        return res.status(400).json({ state: "failed", message: "Invalid file type" })        
    }
    // Additional check to ensure the file is an image file
    if (!file.mimetype.startsWith('image/')) {
        return res.status(400).json({ state: "failed", message: "Invalid image file" })        
    }

    path = normalizePath(file);

    return res.status(200).json({ state: "success", message: "Uploaded image successfully", path })
}

const upload = multer({ storage });

module.exports = { upload, uploadImage };