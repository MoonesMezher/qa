const { Schema, model, mongoose } = require('mongoose');
const passwordHash = require('password-hash')

const User = model("User", new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: true
    },
    active: {
        type: Boolean,
        default: true
    },
    isFree: {
        type: Boolean,
        default: true
    },
    role: { 
        type: String, 
        enum: ['user', 'admin', 'data-entry', 'guest'], 
        default: 'guest'
    },
    totalQuestions: {
        type: Number,
        default: 0
    },
    countTrueFalseQuestions: {
        type: Number,
        default: 0
    },
    countNormalQuestions: {
        type: Number,
        default: 0
    },
    countMultipleQuestions: {
        type: Number,
        default: 0
    },
}, { timestamps : true }))

// if(false) {
//     // Create new admin user
//     const adminUser = new User({
//         username: 'admin1',
//         password: passwordHash.generate('admin123456789'),
//         email: 'admin@admin.com',
//         role: 'admin',
//         verified: true,
//         isFree: false
//     });

//     // db.users.insertOne()
    
//     // Save admin user to MongoDB
//     adminUser.save()
//         .then(() => {
//             console.log('Admin user created successfully');
//         })
//         .catch(err => {
//             console.error(err);
//         });
// }

module.exports = mongoose.model("User") || User;