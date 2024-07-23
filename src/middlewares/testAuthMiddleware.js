const testAuth = async (req, res, next) => {
    const { auth } = req.body;

    if(!auth || auth !== process.env.JWT_SECRET_KEY) {
        return res.status(400).json({ state: 'failed', message: 'Sorry!' });
    }

    try {
        next();
    } catch (err) {
        return res.status(401).json({state: 'failed', message: err.message });
    }
}

module.exports = testAuth;