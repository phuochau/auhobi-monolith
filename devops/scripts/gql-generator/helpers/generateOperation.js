const fs = require('fs')
const path = require('path')
const { convertGqlToTsCode } = require('./convertGqlToTsCode')
const { startCaseGqlName } = require('./startCaseGqlName')
const { getFieldArgs } = require('./getFieldArgs')
const { getArgsToVarsStr } = require('./getArgsToVarsStr')
const { getVarsToTypesStr } = require('./getVarsToTypesStr')
const { beautifyJs } = require('./beautifyJs')
const { beautifyGql } = require('./beautifyGql')

const buildQueryCode = (
    gqlSchema,
    options,
    name,
    parentType,
    depth = 1,
    argumentsDict = {},
    duplicateArgCounts = {},
    fromUnion = false,
) => {
    const field = gqlSchema.getType(parentType).getFields()[name];
    if (!field) {
        throw new Error('Type not found: ' + name)
    }
    const curTypeName = field.type.toJSON().replace(/[[\]!]/g, '');
    const curType = gqlSchema.getType(curTypeName);
    let queryStr = '';
    let childQuery = '';

    if (curType.getFields) {
        if ((fromUnion ? depth - 2 : depth) > options.depthLimit) {
            return '';
        }
        const fields = curType.getFields();
        const childKeys = Object.keys(fields);

        childQuery = childKeys
            .filter((fieldName) => {
                /* Exclude deprecated fields */
                const fieldSchema = gqlSchema.getType(curType).getFields()[fieldName];
                return !fieldSchema.deprecationReason;
            })
            .map((childName) => buildQueryCode(
                gqlSchema,
                options,
                childName,
                curTypeName,
                depth + 1,
                argumentsDict,
                duplicateArgCounts,
                false
            ).queryStr)
            .filter((cur) => Boolean(cur))
            .join('\n');
    }

    if (!(curType.getFields && !childQuery)) {
        queryStr = `${'    '.repeat(depth)}${field.name}`;

        if (field.args.length > 0) {
            const dict = getFieldArgs(field, depth, duplicateArgCounts, argumentsDict);
            Object.assign(argumentsDict, dict);
            queryStr += `(${getArgsToVarsStr(dict)})`;
        }
        if (childQuery) {
            queryStr += `{\n${childQuery}\n${'    '.repeat(depth)}}`;
        }
    }

    /* Union types */
    if (curType.astNode && curType.astNode.kind === 'UnionTypeDefinition') {
        const types = curType.getTypes();
        if (types && types.length) {
            const indent = `${'    '.repeat(depth)}`;
            const fragIndent = `${'    '.repeat(depth + 1)}`;
            queryStr += '{\n';
            queryStr += `${fragIndent}__typename\n`;

            for (let i = 0, len = types.length; i < len; i++) {
                const valueTypeName = types[i];
                const valueType = gqlSchema.getType(valueTypeName);
                const unionChildQuery = Object.keys(valueType.getFields())
                    .map((cur) => buildQueryCode(
                        gqlSchema,
                        options,
                        cur,
                        valueTypeName,
                        depth + 2,
                        argumentsDict,
                        duplicateArgCounts,
                        true
                    ).queryStr)
                    .filter((cur) => Boolean(cur))
                    .join('\n');

                /* Exclude empty unions */
                if (unionChildQuery) {
                    queryStr += `${fragIndent}... on ${valueTypeName} {\n${unionChildQuery}\n${fragIndent}}\n`;
                }
            }
            queryStr += `${indent}}`;
        }
    }
    return { queryStr, argumentsDict };
}

module.exports.generateOperation = (gqlSchema, options) => {
    let rootName;

    if (options.type === 'query') {
        rootName = gqlSchema.getQueryType().name
    } else if (options.type === 'mutation') {
        rootName = gqlSchema.getMutationType().name
    } else if (options.type === 'subscription') {
        rootName = gqlSchema.getSubscriptionType().name
    }

    const queryResult = buildQueryCode(gqlSchema, options, options.inputName, rootName)
    const varsToTypesStr = getVarsToTypesStr(queryResult.argumentsDict);
    let query = queryResult.queryStr;
    query = beautifyGql(`${options.type} ${startCaseGqlName(options.inputName)}${varsToTypesStr ? `(${varsToTypesStr})` : ''}{\n${query}\n}`);

    const tsCode = beautifyJs(convertGqlToTsCode(options.type, options.outputName, query))

    const outputFilename = `${options.outputName}.ts`
    fs.writeFileSync(
        path.join(options.outputDir, outputFilename),
        tsCode
    )
    console.log('Done')
}