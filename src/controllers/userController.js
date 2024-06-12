const User = require('../database/models/User');
const Profile = require('../database/models/Profile');

const passwordHash = require('password-hash')
const validator = require('validator');
const jwt = require('jsonwebtoken');
// const fs = require('fs');

const randomInts = require('../helpers/generateRandomNumbersToUsernames');

const env = process.env;

const createToken = (id, role, email, username) => {
    return jwt.sign({id, role, email, username},env.JWT_SECRET_KEY);
}

// sign up user
const signupUser = async (req, res) => {
    const {username, email, password} = req.body;

    const emptyFilds = [];

    if(typeof username !== 'string') {
        return res.status(400).json({state: "failed", message: "Username must be a string"})
    }

    if(!username) {
        emptyFilds.push('username');
    }
    if(!email) {
        emptyFilds.push('email');
    }
    if(!password) {
        emptyFilds.push('password');
    }
    if(emptyFilds.length > 0) {
        return res.status(400).json({state: "failed", message: "All filds must be filed", emptyFilds: emptyFilds})
    }

    if(!validator.isEmail(email)) {
        return res.status(400).json({state: "failed", message: "Your email is not valid"})
    }

    if(!validator.isStrongPassword(password)) {
        return res.status(400).json({state: "failed", message: "Your password is weak"})
    }

    const exist = await User.findOne({email});

    if(exist) {
        return res.status(400).json({state: "failed", message: "This email already exist"})
    }

    const hash = passwordHash.generate(password);

    const user = await User.create({username, email, password: hash, role: 'user'});

    const profile = await Profile.create({user_id: user._id});

    try {
        const token = createToken(user._id, user.role, user.email, user.username);

        return res.status(200).json({state: "success", message: "Signed up successfully", token, role: user.role});
    } catch (error) {
        return res.status(400).json({state: "failed", message: error.message})
    }
}

// signnup user as guest
const signupUserAsGuest = async (req, res) => {
    const password = process.env.GUEST_PASS;

    const hash = passwordHash.generate(password);

    let username;

    while(true) {
        username = 'user';

        const randomNum = randomInts(1, 10000)[0]; 

        username += randomNum;

        const isDumyUsernameExist = await User.findOne({ username: username });

        if(!isDumyUsernameExist) {
            break;
        }
    }

    const email = username +  randomInts(1, 100)[0] + process.env.GUEST_EMAIL;

    const user = await User.create({username: username, email: email , password: hash});

    const profile = await Profile.create({user_id: user._id});

    try {
        const token = createToken(user._id, user.role, user.email, user.username);

        return res.status(200).json({state: "success", message: 'Signed up successfully', token, role: user.role});
    } catch (error) {
        return res.status(400).json({state: "failed", message: error.message})
    }
}

// log in user
const loginUser = async (req, res) => {    
    const { username, password } = req.body;

    const emptyFilds = [];

    if(typeof username !== 'string') {
        return res.status(400).json({state: "failed", message: "Username must be a string"});
    }

    if(!username) {
        emptyFilds.push('username');
    }
    if(!password) {
        emptyFilds.push('password');
    }
    if(emptyFilds.length > 0) {
        return res.status(400).json({state: "failed", message:"All filds must be filed",emptyFilds: emptyFilds})
    }

    const user = await User.findOne({username: username});  

    if(!user) {
        emptyFilds.push("username");
        return res.status(400).json({state: "failed", message: "Incorecct username",emptyFilds: emptyFilds})
    }

    const match = passwordHash.verify(password, user.password);

    if(!match) {
        emptyFilds.push("password");
        return res.status(400).json({state: "failed", message: "Incorecct password", emptyFilds: emptyFilds})
    }

    try {
        const token = createToken(user._id, user.role, user.email, user.username);

        res.status(200).json({state: "success", message: "Logged in successfully", token, role: user.role});
    } catch (error) {
        res.status(400).json({state: "failed", message: error.message})
    }
}

// logout user
const logoutUser = async (req, res) => {
    try {
        // Clear the JWT token from the client
        res.clearCookie('jwt');
    
        // Return a success response
        res.status(200).json({ state: "success", message: 'Logged out successfully' });
    } catch (err) {
        res.status(500).json({ state: "failed", message: 'Internal Server Error' });
    }
};

// users info
const infoUsers = async (req, res) => {
    try {
        const users = await User.find({ role: { $nin: ['admin', 'data-entry'] } });

        res.status(200).json({state: "success", message: 'Get all users successfully',users: users});
    } catch (err) {
        res.status(400).json({state: "failed", message: err})        
    }
};

// users info by role
const infoUserByRole = async (req, res) => {
    const { role } = req.params;

    if(typeof role != "string") {
        return res.status(400).json({state: "failed", message: 'The role must be a string'})        
    }

    if(role == 'admin') {
        return res.status(400).json({state: "failed", message: 'This data is secure'})        
    }

    if(!(role == 'guest' || role == 'user' || role == 'data-entry')) {
        return res.status(400).json({state: "failed", message: "This role doesnot exist"})
    }

    try {
        const users = await User.find({ role: role });

        res.status(200).json({state: "success", message: `Get all ${role} successfully`,users: users});
    } catch (err) {
        res.status(400).json({state: "failed", message: err})        
    }
}

// sign up as data entry
const signupUserAsDataEntry = async (req, res) => {
    const {username, password} = req.body;

    const emptyFilds = [];

    if(typeof username != "string") {
        return res.status(400).json({state: "failed", message: 'Username must be a string'})        
    }

    if(!username) {
        emptyFilds.push('username');
    }

    if(!password) {
        emptyFilds.push('password');
    }
    if(emptyFilds.length > 0) {
        return res.status(400).json({state: "failed", message: "All filds must be filed",emptyFilds: emptyFilds})
    }

    if(!validator.isStrongPassword(password)) {
        return res.status(400).json({state: "failed", message: "Your password is weak"})
    }

    const exist = await User.findOne({username});

    if(exist) {
        return res.status(400).json({state: "failed", message: "This email already exist"})
    }

    const hash = passwordHash.generate(password);

    const email = username + randomInts(1, 1000)[0] + "@" + randomInts(1, 1000)[0] + "." + "dataentry"

    try {
        const user = await User.create({username, email, password: hash, role: 'data-entry', verified: true});

        const token = createToken(user._id, user.role, user.email, user.username);

        return res.status(200).json({state: "success", message: "Signed up successfully", token});
    } catch (error) {
        return res.status(400).json({state: "failed", message: error.message})
    }
}

// user info
const infoUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        if(!user) {
            return res.status(400).json({state: "failed", message: "This user doesnot exist"})
        }

        return res.status(200).json({state: "success", message: "Get user info successfully", user: user})
    } catch (err) {
        return res.status(400).json({state: "failed", message: err.message})        
    }
}

// upload photo
// const uploadPhoto = async (req, res) => {
//     const files = req.files;

//     const uploadedFiles = []

//     for (let i = 0; i < files.length; i++) {
//         const { path, originalname } = files[i];
//         const extinsion = originalname.split(".")[1];
//         const newPath = (`${path}.${extinsion}`)

//         fs.renameSync(path, newPath);

//         uploadedFiles.push(newPath.replace('uploads\\', ""))
//     }

//     try {
//         res.status(200).json(...uploadedFiles)
//     } catch (err) {
//         res.status(400).json({error: err})        
//     }
// };

// update user info
const updateDataEntry = async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id);

    if(!user) {
        return res.status(400).json({state: "failed", message: "This user is already doesnot exist"});
    }

    if(user.role == 'data-entry') {
        return res.status(400).json({state: "failed", message: 'You are not allowed to update this user'});
    }

    const { username, password } = req.body;

    const emptyFilds = [];

    if(!username) {
        emptyFilds.push('username');
    }

    if(!password) {
        emptyFilds.push('password');
    }

    if(emptyFilds.length > 0) {
        return res.status(400).json({state: "failed", message: "All filds must be filed",emptyFilds: emptyFilds})
    }

    const isUsernameIsValid = await User.findOne({ username: username });

    if(isUsernameIsValid) {
        emptyFilds.push('username');

        return res.status(400).json({state: "failed", message: "This username doesnot valid",emptyFilds: emptyFilds})
    }

    if(!validator.isStrongPassword(password)) {
        return res.status(400).json({state: "failed", message: "Your password is weak"})
    }

    const hash = passwordHash.generate(password);

    const data = { username, password:hash };
    
    try {
        const user = await User.findByIdAndUpdate(id, data)

        const token = createToken(user._id, user.role, user.email, user.username);

        return res.status(200).json({state: "success", message: "Updated user info successfully", token})
    } catch (err) {
        return res.status(400).json({state: "failed", message: err.message})
    }
}

const updateUser = async (req, res) => {
    const id = req.user;

    const { username, password } = req.body;

    const emptyFilds = [];

    if(typeof username != "string") {
        return res.status(400).json({state: "failed", message: 'Username must be a string'})        
    }

    if(!username) {
        emptyFilds.push('username');
    }

    if(!password) {
        emptyFilds.push('password');
    }

    if(emptyFilds.length > 0) {
        return res.status(400).json({state: "failed", message: "All filds must be filed",emptyFilds: emptyFilds})
    }

    const isUsernameIsValid = await User.findOne({ username: username });

    if(isUsernameIsValid) {
        emptyFilds.push('username');

        return res.status(400).json({state: "failed", message: "This username doesnot valid",emptyFilds: emptyFilds})
    }

    if(!validator.isStrongPassword(password)) {
        return res.status(400).json({state: "failed", message: "Your password is weak"})
    }

    const hash = passwordHash.generate(password);

    const data = { username, password:hash };
    
    try {
        const user = await User.findByIdAndUpdate(id, data)

        const token = createToken(user._id, user.role, user.email, user.username);

        return res.status(200).json({state: "success", message: 'Updated user info successfully', token})
    } catch (err) {
        return res.status(400).json({state: "failed", message: err.message})
    }
}

const activateUser = async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id);

    if(!user) {
        return res.status(400).json({state: "failed", message: "This user is already doesnot exist"});
    }
    
    try {
        const user = await User.findByIdAndUpdate(id, { active: true });

        try {
            const token = createToken(user._id, user.role, user.email, user.username);
    
            return res.status(200).json({state: 'success', message: 'Activated & Logged in successfully', token});
        } catch (error) {
            return res.status(400).json({state: 'failed', message: error.message})
        }
    } catch (err) {
        return res.status(400).json({state: "failed", message: err.message})
    }
}

const disActivateUser = async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id);

    if(!user) {
        return res.status(400).json({state: "failed", message: "This user is already doesnot exist"});
    }
    
    try {
        const user = await User.findByIdAndUpdate(id, { active: false });

        if(req.session) {
            req.session = null;

            return res.status(200).json({state: 'success', message: 'Disacivated & Logged out successfully'});
        }

        return res.status(400).json({state: 'failed', message: 'User already logged out'});

    } catch (err) {
        return res.status(400).json({state: "failed", message: err.message})
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id);

    if(!user) {
        return res.status(200).json({state: "success", message: "This user is already doesnot exist"});
    }
    
    try {
        const user = await User.findByIdAndDelete(id);

        return res.status(200).json({state: "success", message: "Deleted user successfully"});
    } catch (err) {
        return res.status(400).json({state: "failed", message: err.message})
    }
}

const veryfiedUser = async (req, res) => {
    const { email } = req.params;

    if(typeof email !== "string") {
        return res.status(400).json({state: "failed", message: "The email must be a string"});
    }

    const user = await User.findOne({ email: email });

    if(!user) {
        return res.status(400).json({state: "failed", message: "This email doesnot exist"});
    }

    if(user.verified) {
        return res.status(200).json({state: "success", message: "This email is already verified"});
    }
    
    try {
        const user = await User.findOneAndUpdate({ email: email }, { verified: true });

        return res.status(200).json({state: "success", message: "Veryfied user successfully"});
    } catch (err) {
        return res.status(400).json({state: "failed", message: err.message})
    }
}

// users info by username
const infoUsersByUsername = async (req, res) => {
    const { username } = req.params;

    if(typeof username != "string") {
        return res.status(400).json({state: "failed", message: 'The username must be a string'})        
    }

    const nameRegex = new RegExp(`.*${username}.*`, 'i');

    try {
        const users = await User.find({ username: { $regex: nameRegex } });

        res.status(200).json({state: "success", message: `Get all users have ${username} successfully`,users: users});
    } catch (err) {
        res.status(400).json({state: "failed", message: err.message})        
    }
}

// change to paid account
const paidAccount = async (req, res) => {
    const id = req.user;

    const user = await User.findById(id);

    if(!user) {
        return res.status(400).json({state: "failed", message: "User not found"});
    }

    try {
        const user = await User.findByIdAndUpdate(id, { isFree: false });

        const token = createToken(user._id, user.role, user.email, user.username);
    
        return res.status(200).json({state: 'success', message: 'Cahnged to paid account successfully', token});
    } catch (err) {
        return res.status(400).json({state: 'failed', message: 'Cannot change to paid account'});        
    }
}

const addTokensToUser = async (req, res) => {
    const { id } = req.params;
    let { tokens } = req.body;

    if(!tokens) {
        return res.status(400).json({state: 'failed', message: 'Tokens must have a value'}); 
    }

    tokens = parseInt(tokens, 10);

    if(typeof tokens !== 'number') {
        return res.status(400).json({state: 'failed', message: 'Tokens must be a number'}); 
    }

    try {
        const userProfile = await Profile.findOne({user_id: id});

        if(!userProfile) {
            return res.status(400).json({state: 'failed', message: 'User not found'}); 
        }

        userProfile.tokens+=tokens;

        await userProfile.save();

        return res.status(200).json({state: 'success', message: 'Add tokens to user successfully', tokens: userProfile.tokens});         
    } catch (error) {
        return res.status(400).json({state: 'failed', message: error.message});         
    }

}

module.exports = {
    signupUser,
    loginUser,
    logoutUser,
    infoUsers,
    updateUser,
    infoUser,
    infoUserByRole,
    signupUserAsGuest,
    signupUserAsDataEntry,
    updateDataEntry,
    activateUser,
    disActivateUser,
    deleteUser,
    veryfiedUser,
    infoUsersByUsername,
    paidAccount,
    addTokensToUser,
}