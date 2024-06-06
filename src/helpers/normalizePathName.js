const normalizePath = (file) => {
    console.log(22, file);
    return file?.path?.replace(/\\/g, '/').replace(/^src\//, '');
}

module.exports = normalizePath