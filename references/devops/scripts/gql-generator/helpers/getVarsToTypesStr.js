module.exports.getVarsToTypesStr = (dict) => Object.entries(dict)
.map(([varName, arg]) => `$${varName}: ${arg.type}`)
.join(', ');