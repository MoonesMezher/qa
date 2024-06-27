const array_of_allowed_files = ['png', 'jpeg', 'jpg', 'webp'];
// const array_of_allowed_file_types = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

const multer = require('multer');
const randomInts = require('../helpers/generateRandomNumbersToUsernames');
const fs = require('fs');
const webp = require('webp-converter');
const sharp = require('sharp');
const { execFile } = require('child_process');

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
    // filename: (req, file, cb) => {
    //     cb(null, randomInts(1, 100000)[0] + Date.now() + '-' + file.originalname);
    // }
    filename: (req, file, cb) => {
        const webpFile = `${randomInts(1, 100000)[0] + Date.now() + randomInts(1, 100000)[0]}.webp`;

        cb(null, webpFile);
    },
    fileFilter: (req, file, cb) => {
        const fileExtension = file.originalname.split(".")[file.originalname.split(".").length - 1];
        if (!array_of_allowed_files.includes(fileExtension)) {
            return cb(new Error('Invalid image type'));
        }
        cb(null, true);
    },
});

const upload = multer({ storage });


const isImage = (req, res, next) => {
    const { picture } = req.body

    if(picture) {
        const fileExtension = picture.split(".")[picture.split(".").length - 1];
    
        if (!array_of_allowed_files.includes(fileExtension)) {
            return res.status(400).json({ state: "failed", message: "Invalid image type" })        
        }
    }
    next();    
}

const deleteImages = (folder, img) => {
    const imagesFolder = `uploads/${folder}`;
    const images = fs.readdirSync('src/'+imagesFolder);

    images.forEach((image) => {
      const imagePath = path.join(imagesFolder, image);
      const imageName = path.basename(image);
  
      // Check if the image is associated with the item
      if (imageName.includes(img)) {
        fs.unlinkSync(imagePath);
      }
    });
};

module.exports = { upload, isImage, deleteImages };