
const format = require('graphql-formatter').format

module.exports.beautifyGql = (content) => {
    return format(content)
}