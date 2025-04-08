module.exports.getArgsToVarsStr = (dict) => Object.entries(dict)
    .map(([varName, arg]) => `${arg.name}: $${varName}`)
    .join(', ');