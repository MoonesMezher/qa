const Profile = require("../database/models/Profile");

const getProfile = async (req, res) => {
    const { id } = req.params;

    try {
        const profile = await Profile.findOne({ user_id: id });

        return res.status(200).json({state: "success", message: "Get profile successfully",profile: profile});
    } catch (error) {
        return res.status(400).json({state: "failed", message: "Cannot find the profile"});        
    }
}

const updateProfile = async (req, res) => {
    const { id } = req.params;

    const { description, country } = req.body;

    const data = { description, country };

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
        const profile = await Profile.findByIdAndUpdate(lastProfile._id, data);

        return res.status(200).json({state: "success", message: "Get profile successfully",profile: profile});
    } catch (error) {
        return res.status(400).json({state: "failed", message: "Cannot find the profile"});        
    }
}



module.exports = {
    getProfile,
    updateProfile,
}