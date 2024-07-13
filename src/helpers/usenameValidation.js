function validateUsername(username) {
    const usernameRegex = /^[a-z0-9\.]+$/;
    return (
        usernameRegex.test(username) &&
        username.length >= 3 &&
        username.length <= 16 &&
        !username.includes('..') &&
        username.trim() === username &&
        !username.startsWith('.') &&
        !username.endsWith('.')
    );
}

module.exports = validateUsername;