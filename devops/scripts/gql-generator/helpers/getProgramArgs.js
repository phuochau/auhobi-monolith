const path = require('path')

module.exports.getProgramArgs = () => {
    const args = process.argv.slice(2);
    /**
     * --schema-path: schema path
     * --out-dir
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
            } else if (key === '--output-dir') {
                options.destDirPath = path.join(process.cwd(), value)
            } else if (key === '--depth-limit') {
                options.depthLimit = parseInt(value)
            }
        }
    }

    return options
}