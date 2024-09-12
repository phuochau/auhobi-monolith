const { startCaseGqlName } = require('./startCaseGqlName')

module.exports.convertGqlToTsCode = (type, gqlName, gqlContent) => {
    let importContent = `import gql from 'graphql-tag'\n\n`
    return `${importContent}export const ${startCaseGqlName(gqlName)}${startCaseGqlName(type)} = gql\`\n    ${gqlContent.split('\n').join('\n    ')}\n\``.trim()
}