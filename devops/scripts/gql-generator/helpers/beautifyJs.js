
const beautify = require('js-beautify').js

module.exports.beautifyJs = (content) => {
    return beautify(content, { indent_size: 2, space_in_empty_paren: true })
}