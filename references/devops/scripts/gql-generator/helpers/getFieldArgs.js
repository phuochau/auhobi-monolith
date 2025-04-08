const { startCaseGqlName } = require('./startCaseGqlName')

module.exports.getFieldArgs = (
    field,
    depth,
    duplicateArgCounts,
    allArgsDict = {},
) => field.args.reduce((o, arg) => {
    if (arg.name in duplicateArgCounts) {
        const index = duplicateArgCounts[arg.name] + 1;
        duplicateArgCounts[arg.name] = index;
        o[`${arg.name}${index}`] = arg;
    } else if (allArgsDict[arg.name]) {
        duplicateArgCounts[arg.name] = 1;
        o[`${field.name}${startCaseGqlName(arg.name)}`] = arg;
    } else {
        if (depth > 1) {
            o[`${field.name}${startCaseGqlName(arg.name)}`] = arg;
        } else {
            o[arg.name] = arg;
        }
    }
    return o;
}, {});