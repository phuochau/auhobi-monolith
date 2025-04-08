const path = require('path')
const fs = require('fs')

module.exports.createDirRecursive = (dir) => {
  path.resolve(dir).split(path.sep).reduce((before, cur) => {
    const pathTmp = path.join(before, cur + path.sep);
    if (!fs.existsSync(pathTmp)) {
      fs.mkdirSync(pathTmp);
    }
    return path.join(before, cur + path.sep);
  }, '');
}