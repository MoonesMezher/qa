const { Schema, model, mongoose } = require('mongoose');
const passwordHash = require('password-hash')

const User = model("User", new Schema({
    username: {
        type: String,
        min: 3,
        max: 255,
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
        default: false
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
}, { timestamps : true }))

if(process.env.ADD_ADMIN_MODE != 0) {
    // Create new admin user
    const adminUser = new User({
        username: 'admin1',
        password: passwordHash.generate('admin12345'),
        email: 'admin@admin.com',
        role: 'admin',
        verified: true,
        isFree: false
    });
    
    // Save admin user to MongoDB
    adminUser.save()
        .then(() => {
            console.log('Admin user created successfully');
        })
        .catch(err => {
            console.error(err);
        });
}


module.exports = mongoose.model("User") || User;