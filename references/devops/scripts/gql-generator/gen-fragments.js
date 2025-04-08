const { buildSchemaFromFile } = require('./helpers/buildSchemaFromFile')
const { generateFragments } = require('./helpers/generateFragments')
const { createDirRecursive } = require('./helpers/createDirRecursive')
const path = require('path')

const getProgramArgs = () => {
    const args = process.argv.slice(2);
    /**
     * --schema-path: schema path
     * --output-dir
     * --depth-limit
     */
    const options = {}

    for(const arg of args) {
        const parts = arg.split('=')
        if (parts.length === 2) {
            const key = parts[0]
            const value = parts[1]
            if (key === '--schema-path') {
                options.schemaFilePath = path.join(process.cwd(), value)
            } else if (key === '--out-dir') {
                options.destDirPath = path.join(process.cwd(), value)
            } else if (key === '--depth') {
                options.depthLimit = parseInt(value)
            }
        }
    }

    return options
}

const generate = (options) => {
    const {
        schemaFilePath,
        destDirPath
    } = options

    // 1. Build schema from file
    const gqlSchema = buildSchemaFromFile(schemaFilePath)

    // 2. Make dest dir path
    createDirRecursive(destDirPath)

    // 3. Generate Fragments Files
    generateFragments(gqlSchema, options)

}

generate(getProgramArgs())