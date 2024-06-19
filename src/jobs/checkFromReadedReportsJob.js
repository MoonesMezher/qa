const Report = require("../database/models/Report");

const threeHoursAgo = new Date(Date.now() - 3 * 60 * 60 * 1000);

const checkFromReadedReports = async () => {
    try {
        console.log('Job Done');
        await Report.deleteMany({ read: true, updatedAt: { $lte: threeHoursAgo.getTime() } });
    } catch (err) {
        console.log('Job: ',err);
    }
}

module.exports = checkFromReadedReports;