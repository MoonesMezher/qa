const User = require("../database/models/User");

function authorize(roles) {
    return async (req, res, next) => {
        try {
            const user = await User.findById(req.user);

            for (const role of roles) {

                if(user.role == role) {
                    next();
                    return;
                }
            }

            return res.status(401).json({state: 'failed',message: 'You cannot access to this action'});
        } catch (err) {
            return res.status(401).json({state: 'failed',message: 'You cannot access to this action'});
        }
    }
}

module.exports = authorize;