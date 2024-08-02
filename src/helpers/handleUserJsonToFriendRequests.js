const Profile = require("../database/models/Profile");
const User = require("../database/models/User");

const friendJson = async (id) => {
    const profile = await Profile.findOne({ user_id: id });

    const user = await User.findById(id);

    const data = {
        _id: id,
        username: user.username,
        email: user.email,
        password: user.password,
        verified: user.verified,
        active: user.active,
        isFree: user.isFree,
        picture: profile.picture,
    }

    return data;
}

module.exports = friendJson