const fs = require('fs')
const path = require('path')
const { convertGqlToTsCode } = require('./convertGqlToTsCode')
const { getScalaFields } = require('./getScalarFields')
const { beautifyJs } = require('./beautifyJs')
const { beautifyGql } = require('./beautifyGql')

const getFragmentName = (curType) => {
    return `${curType.name}Fragment`
}

const writeFragmentFile = (gqlSchema, options, fragments, curType) => {
    const writeFolder = options.destDirPath;

    if (!fs.existsSync(writeFolder)) {
        fs.mkdirSync(writeFolder);
    }

    if (curType.getFields) {
        const scalaFields = getScalaFields(gqlSchema, curType)
        if (scalaFields.length > 0) {
            const fragmentName = getFragmentName(curType)
            let fragment = `fragment ${getFragmentName(curType)} on ${curType.name} {\n    `
            fragment += scalaFields.join('\n    ')
            fragment += '\n}'
            fragment = beautifyGql(fragment)
            fs.writeFileSync(path.join(writeFolder, `./${curType.name}Fragment.ts`), beautifyJs(convertGqlToTsCode('fragment', curType.name, fragment)))
            fragments[curType.name] = {
                name: fragmentName,
                code: fragment
            }
        }
    }
}

const buildFragmentsCode = (
    gqlSchema,
    options,
    fragments,
    name,
    parentType,
    depth = 1
) => {
    const field = gqlSchema.getType(parentType).getFields()[name];
    const curTypeName = field.type.toJSON().replace(/[[\]!]/g, '');
    const curType = gqlSchema.getType(curTypeName);

    writeFragmentFile(gqlSchema, options, fragments, curType)

    if (curType.getFields) {
        if (depth > options.depthLimit) {
            return;
        }
        const childKeys = Object.keys(curType.getFields());
        return childKeys
            .filter((fieldName) => {
                /* Exclude deprecated fields */
                const fieldSchema = gqlSchema.getType(curType).getFields()[fieldName];
                return !fieldSchema.deprecationReason;
            })
            .forEach((childName) => buildFragmentsCode(
                gqlSchema,
                options,
                fragments,
                childName,
                curType,
                depth + 1
            ))
    }
}

module.exports.generateFragments = (gqlSchema, options) => {
    const queries = gqlSchema.getQueryType().getFields()
    const rootName = gqlSchema.getQueryType().name

    const fragments = {}
    Object.keys(queries).forEach((queryKey) => {
        buildFragmentsCode(gqlSchema, options, fragments, queryKey, rootName);
    })

    return fragments
}