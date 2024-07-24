const Profile = require("../database/models/Profile");
const User = require("../database/models/User");

const friendJson = async (id) => {
    const profile = await Profile.findOne({ user_id: id });

    const user = await User.findById(id);

    const data = {
        id,
        username: user.username,
        email: user.email,
        picture: profile.picture,
        exp: profile.exp,
        tokens: profile.tokens,
        score: profile.score
    }

    return data;
}

module.exports = friendJson