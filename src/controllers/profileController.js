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
    const { id } = req.params;

    const { description, country, picture } = req.body;

    let data = { description, country };

    if(picture) {
        data = { description, country, picture };
    }

    const lastProfile = await Profile.findOne({user_id: id});

    if(lastProfile.country != "None" && lastProfile.country !== country) {
        return res.status(400).json({state: "failed", message: "You cannot change your country"});        
    }

    if(typeof country !== "string") {
        return res.status(400).json({state: "failed", message: "Country must be a string"});        
    }

    if(typeof description !== "string") {
        return res.status(400).json({state: "failed", message: "Description must be a string"});        
    }

    try {
        const profile = await Profile.findByIdAndUpdate(id, data, { new: true });

        return res.status(200).json({state: "success", message: "Updated profile successfully", profile});
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

module.exports = {
    getProfile,
    updateProfile,
    showTopUsersByExp,
    showTopUsersByExpDepandLastDay,
    showTopUsersByExpDepandLastWeek,
    showTopUsersByExpDepandLastMonth
}