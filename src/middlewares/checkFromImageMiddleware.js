// const array_of_allowed_files = ['png', 'jpeg', 'jpg', 'webp'];
// const array_of_allowed_file_types = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

const multer = require('multer');
const randomInts = require('../helpers/generateRandomNumbersToUsernames');

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

const upload = multer({ storage });

const uploadImage = async (req, res, next) => {
    const file = req.file;

    console.log(file)

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
    // if (!array_of_allowed_files.includes(fileExtension) || !array_of_allowed_file_types.includes(file.mimetype)) {
    //     return res.status(400).json({ state: "failed", message: "Invalid file type" })        
    // }
    // // Additional check to ensure the file is an image file
    // if (!file.mimetype.startsWith('image/')) {
    //     return res.status(400).json({ state: "failed", message: "Invalid image file" })        
    // }

    next();
}

const uploadImageWhenUpdate = async (req, res, next) => {
    const file = req.file;

    if(!file) {
        next();
    } else {    
        const { folder } = req.params;
        
        if(!folder) {
            return res.status(400).json({ state: "failed", message: "You must select a folder" })        
        }

        if(!['questions', 'offers', 'category','section', 'profile'].includes(folder)) {
            return res.status(400).json({ state: "failed", message: "Invalid folder name" })        
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

        next();
    }
}

module.exports = { upload, uploadImage, uploadImageWhenUpdate };