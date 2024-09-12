const { buildSchemaFromFile } = require('./helpers/buildSchemaFromFile')
const { generateOperation } = require('./helpers/generateOperation')
const { createDirRecursive } = require('./helpers/createDirRecursive')
const path = require('path')

const getProgramArgs = () => {
    const args = process.argv.slice(2);
    /**
     * --schema-path: schema path
     * --type: query/mutation/subscription
     * --depth-limit
     * --input-name: name of query/mutation/subscription
     * --output-dir
     * --output-name
     */
    const options = {}

    for(const arg of args) {
        const parts = arg.split('=')
        if (parts.length === 2) {
            const key = parts[0]
            const value = parts[1]
            if (key === '--schema-path') {
                options.schemaFilePath = path.join(process.cwd(), value)
            } else if (key === '--type') {
                options.type = value
            } else if (key === '--depth') {
                options.depthLimit = parseInt(value)
            } else if (key === '--in') {
                options.inputName = value
            } else if (key === '--out-dir') {
                options.outputDir = path.join(process.cwd(), value)
            } else if (key === '--out') {
                options.outputName = value
            }
        }
    }

    return options
}

const generate = (options) => {
    const {
        schemaFilePath,
        outputDir
    } = options
    // 1. Build schema from file
    const gqlSchema = buildSchemaFromFile(schemaFilePath)

    createDirRecursive(outputDir)

    // 3. Generate Fragments Files
    generateOperation(gqlSchema, options)

}

generate(getProgramArgs())