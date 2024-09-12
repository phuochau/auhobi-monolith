module.exports.startCaseGqlName = (queryName) => {
    return `${`${queryName.substring(0, 1).toUpperCase()}${queryName.substring(1)}`}`
}