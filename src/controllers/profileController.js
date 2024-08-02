const Friend = require("../database/models/Friend");
const Profile = require("../database/models/Profile");
const User = require("../database/models/User");
const normalizePath = require("../helpers/normalizePathName");

const getProfile = async (req, res) => {
    const { id } = req.params;

    try {
        const profile = await Profile.findOne({ user_id: id });

        return res.status(200).json({state: "success", message: "Get profile successfully",profile: profile});
    } catch (error) {
        return res.status(400).json({state: "failed", message: error.message});        
    }
}

const updateProfile = async (req, res) => {
    const { picture } = req.body;

    const userId = req.user._id;

    // const { description, country, picture } = req.body;

    // let data = { description, country };

    if(!picture) {
        return res.status(400).json({state: "failed", message: "عليك إدخال الصورة"});        
    }

    // const lastProfile = await Profile.findOne({user_id: id});

    // if(lastProfile.country != "None" && lastProfile.country !== country) {
    //     return res.status(400).json({state: "failed", message: "You cannot change your country"});        
    // }

    // if(typeof country !== "string") {
    //     return res.status(400).json({state: "failed", message: "Country must be a string"});        
    // }

    // if(typeof description !== "string") {
    //     return res.status(400).json({state: "failed", message: "Description must be a string"});        
    // }

    try {
        const profile = await Profile.findOne({ user_id: userId });

        profile.picture = picture? picture:profile.picture;

        await profile.save();

        const user = await User.findById(userId);

        const userData = {
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password,
            verified: user.verified,
            active: user.active,
            isFree: user.isFree,
            description: profile.description, 
            country: profile.country, 
            picture: profile.picture,
            tokens: profile.tokens,
            exp: profile.exp,
            score: profile.score,            
        }

        return res.status(200).json({state: "success", message: "Updated profile successfully", userData });
    } catch (error) {
        return res.status(400).json({state: "failed", message: error.message});        
    }
}

const showTopUsersByExp = async (req, res) => {
    try {
        const topUsers = await User.aggregate([
            {
                $lookup: {
                    from: 'profiles',
                    localField: '_id',
                    foreignField: 'user_id',
                    as: 'profile'
                }
            },
            {
                $unwind: '$profile'
            },
            {
                $sort: { 'profile.exp': -1 }
            },
            {
                $limit: 100
            },
            {
                $project: {
                    _id: 1,
                    username: 1,
                    email: 1,
                    profile: {
                        picture: 1,
                        country: 1,
                        exp: 1,
                    }
                }
            }
        ]);    

        return res.status(200).json({state: "success", message: "Get profile successfully",users: topUsers});
    } catch (error) {
        return res.status(400).json({state: "failed", message: error.message});           
    }
};

const showTopUsersByExpDepandLastMonth = async (req, res) => {
    const today = new Date();

    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());

    try {
        const topUsersLastMonth = await Profile.find({ updatedAt: { $gte: lastMonth } })
            .sort({ experiencePoints: -1 })
            .limit(100);

        return res.status(200).json({ state: "success", message: "Get top 100 user experience in last month", users: topUsersLastMonth});    
    } catch (error) {
        return res.status(400).json({ state: "failed", message: error.message});            
    }
}

const showTopUsersByExpDepandLastWeek = async (req, res) => {
    const today = new Date();

    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

    try {
        const topUsersLastWeek = await Profile.find({ updatedAt: { $gte: lastWeek } })
            .sort({ experiencePoints: -1 })
            .limit(100);

        return res.status(200).json({ state: "success", message: "Get top 100 user experience in last week", users: topUsersLastWeek});    
    } catch (error) {
        return res.status(400).json({ state: "failed", message: error.message});            
    }
}

const showTopUsersByExpDepandLastDay = async (req, res) => {
    const today = new Date();

    try {       
        const topUsersLastDay = await Profile.find({ updatedAt: { $gte: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1) } })
            .sort({ experiencePoints: -1 })
            .limit(100);

        return res.status(200).json({ state: "success", message: "Get top 100 user experience in last day", users: topUsersLastDay});    
    } catch (error) {
        return res.status(400).json({ state: "failed", message: error.message});            
    }
}

const updateScoreOfUser = async (req, res) => {
    let { type, score } = req.body;

    const user_id = req.user._id;

    if(!score) {
        score = 0
    }

    if(typeof score !== 'number') {
        return res.status(400).json({ state: "failed", message: 'Score must be number' });            
    }

    if(!type) {
        return res.status(400).json({ state: "failed", message: 'Type cannot be empty' });            
    }

    if(typeof type !== "string") {
        return res.status(400).json({ state: "failed", message: 'Type must be string' });            
    }

    const user = await User.findById(user_id);

    if(!user) {
        return res.status(400).json({ state: "failed", message: 'This user doesnot exist' });            
    }

    if(!["speed", "chain", "online", "group"].includes(type)) {
        return res.status(400).json({ state: "failed", message: 'As type there are just { speed, chain, online, group }, you should insert one of them' });                    
    }

    try {
        const profile = await Profile.findOne({ user_id });

        if(!profile) {
            return res.status(400).json({ state: "failed", message: 'This user doesnot have a profile right now' });                    
        }

        let scoreMessage;

        if(profile.score[type] === score && score !== 0) {
            scoreMessage = "أنت لا تزال على القمة! درجاتك في اللعبة مازالت كما هي"
        } else if(profile.score[type] < score) {
            profile.score[type] = score
            await profile.save();
            scoreMessage = "تهانينا! لقد كسرت أعلى درجاتك في اللعبة. استمر في التقدم!"
        }

        const userData = {
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password,
            verified: user.verified,
            active: user.active,
            isFree: user.isFree,
            description: profile.description, 
            country: profile.country, 
            picture: profile.picture,
            tokens: profile.tokens,
            exp: profile.exp,
            score: profile.score,            
        }

        return res.status(200).json({ state: "success", message: `تم تحديث درجات المستخدم بنجاح`, userData});            
    } catch (error) {
        return res.status(400).json({ state: "failed", message: error.message });                    
    }
}

const updateExpAndTokensToUser = async (req, res) => {
    let { tokens, exp } = req.body;

    const user_id = req.user._id;

    if(!tokens) {
        tokens = 0;
    }

    if(!exp) {
        exp = 0;
    }

    if(typeof tokens !== 'number') {
        return res.status(400).json({ state: "failed", message: 'Tokens must be number' });            
    }

    if(typeof exp !== 'number') {
        return res.status(400).json({ state: "failed", message: 'Exp must be number' });            
    }

    const user = await User.findById(user_id);

    if(!user) {
        return res.status(400).json({ state: "failed", message: 'This user doesnot exist' });            
    }

    try {
        const profile = await Profile.findOne({ user_id });

        if(!profile) {
            return res.status(400).json({ state: "failed", message: 'This user doesnot have a profile right now' });                    
        }

        profile.tokens += tokens;
        profile.exp += exp;

        await profile.save();

        const userData = {
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password,
            verified: user.verified,
            active: user.active,
            isFree: user.isFree,
            description: profile.description, 
            country: profile.country, 
            picture: profile.picture,
            tokens: profile.tokens,
            exp: profile.exp,
            score: profile.score,            
        }

        return res.status(200).json({ state: "success", message: 'تم تحديث درجات الخبرة ورصيد المستخدمم بنجاح', userData });                    
    } catch (error) {
        return res.status(400).json({ state: "failed", message: error.message });                    
    }
}

const paysCoastOfGame = async (req, res) => {
    let { coast } = req.body;

    if(!coast) {
        coast = 0;
    }

    if(typeof coast !== 'number') {
        return res.status(400).json({ state: "failed", message: 'Coast must be number' });            
    }

    const user_id = req.user._id;

    const user = await User.findById(user_id);

    if(!user) {
        return res.status(400).json({ state: "failed", message: 'This user doesnot exist' });            
    }

    try {
        const profile = await Profile.findOne({ user_id });

        if(!profile) {
            return res.status(400).json({ state: "failed", message: 'This user doesnot have a profile right now' });                    
        }

        if(profile.tokens < coast) {
            return res.status(400).json({ state: "failed", message: 'عذرا! ليس رصيدك كافي للعب هذه اللعبة' });                    
        }

        profile.tokens -= coast;

        await profile.save();

        const userData = {
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password,
            verified: user.verified,
            active: user.active,
            isFree: user.isFree,
            description: profile.description, 
            country: profile.country, 
            picture: profile.picture,
            tokens: profile.tokens,
            exp: profile.exp,
            score: profile.score,            
        }

        return res.status(200).json({ state: "success", message: 'تمت عملية الدفع بنجاح', userData });                    
    } catch(error) {
        return res.status(400).json({ state: "failed", message: error.message });                    
    }
}

const levelOfPlayerOnTheWorld = async (req, res) => {
    const { id } = req.params;

    try {
        const profiles = await Profile.find({}).sort( { exp: -1 } );

        let indexOfUser = 1;

        Promise.all(profiles.map(async (e, index) => {
            if(e.user_id.toString() === id.toString()) {
                indexOfUser = index + 1;
            }
        }));

        return res.status(200).json({ state: "success", message: 'Get index of user on the world successfully', indexOfUser });                    
    } catch (error) {
        return res.status(400).json({ state: "failed", message: error.message });                    
    }
}

const getAllUsersByNameWithFreindShipDetails = async (req, res) => {
    const { name } = req.params;

    const userId = req.user._id;

    if(!name || name === "" || name === " ") {
        return res.status(400).json({ state: "failed", message: 'عليك إدخال اسم للبحث' });                    
    }

    try {
        const newRegex = new RegExp(`.*${name}.*`, "i");

        const users = await User.find({ username: { $regex: newRegex } });

        const allUsers = await Promise.all(users.map(async (e) => {
            const id = e._id;

            const state1 = await Friend.findOne({ user_id: userId, friends: { $elemMatch: { id } } });

            const state2 = await Friend.findOne({ user_id: id, friends: { $elemMatch: { id: userId } } });

            let state = "noraml";
            
            if(state1) {
                if(state1?.friends?.find(e => e.type === 'friend')) {
                    state = 'friend';
                } else {
                    state = 'request'
                }
            } else if(state2) {
                if(state2?.friends?.find(e => e.type === 'friend')) {
                    state = 'friend';
                } else {
                    state = 'request'
                }
            }

            const otherUser = await User.findById(id);

            // const otherProfile = await Profile.findOne({ user_id: id })

            const data = {
                _id: otherUser._id,
                username: otherUser.username,
                email: otherUser.email,
                password: otherUser.password,
                verified: otherUser.verified,
                active: otherUser.active,
                isFree: otherUser.isFree,
                // description: otherProfile.description, 
                // country: otherProfile.country, 
                // picture: otherProfile.picture,
                // tokens: otherProfile.tokens,
                // exp: otherProfile.exp,
                // score: otherProfile.score,                
                state,
            }

            return data;
        }))

        return res.status(200).json({ state: "success", message: 'تم عرض كافة المستخدمين المتاحين حسب الاسم المدخل بنجاح', allUsers });                    
    } catch (error) {
        return res.status(400).json({ state: "failed", message: error.message });                            
    }
}

module.exports = {
    getProfile,
    updateProfile,
    showTopUsersByExp,
    showTopUsersByExpDepandLastDay,
    showTopUsersByExpDepandLastWeek,
    showTopUsersByExpDepandLastMonth,
    updateScoreOfUser,
    updateExpAndTokensToUser,
    paysCoastOfGame,
    levelOfPlayerOnTheWorld,
    getAllUsersByNameWithFreindShipDetails
}