const toDate = (dateStr) => {
    const [yyyy, mm, dd] = dateStr.split('/').map(Number);

    return new Date(`${yyyy}`, mm - 1, dd);
};

module.exports = toDate;