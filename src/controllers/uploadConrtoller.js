const multer = require('multer');
const randomInts = require('../helpers/generateRandomNumbersToUsernames');
const cloudinary = require('cloudinary').v2;
const mime = require('mime-types');

function isImage(file) {
    const imageTypes = ['image/jpeg', 'image/png'];
    const fileType = mime.contentType(file.originalname);
    return imageTypes.includes(fileType);
}
// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Create Multer storage engine
const storage = multer.memoryStorage();

// Create Multer upload function
const upload = multer({ 
    storage,
    limits: { fileSize: 100000 },
    fileFilter: (req, file, cb) => {
        if (isImage(file)) {
            return cb(null, true);
        } else {
            cb('Error: Images only!');
        }
    }
});

// Create Cloudinary upload function
const uploadToCloudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file.buffer, {
            folder: 'uploads',
        });

        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to upload image to Cloudinary');
    }
};

// Create image upload function
const uploadImage = async (req, res) => {
    try {
        const file = req.file;
        
        if (!file) {
            return res.status(400).json({ error: 'No image provided' });
        }

        const { path, originalname } = file;
        const extinsion = originalname.split(".")[1];
        const newPath = (`${new Date() + path + randomInts(1, 10000)[0]}.${extinsion}`)

        fs.renameSync(path, newPath);

        uploadedFiles.push(newPath.replace('uploads\\', ""))

        const result = await uploadToCloudinary(file);

        res.status(200).json({ state: "success", message: "Uploaded image successfully", url: result.secure_url });
    } catch (error) {
        console.error(error);
        res.status(500).json({  state: "failed", message: 'Failed to upload image' });
    }
};

module.exports = { upload, uploadImage };