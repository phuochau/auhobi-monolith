const { Source, buildSchema } = require('graphql');
const fs = require('fs')

module.exports.buildSchemaFromFile = (filepath) => {
    const typeDef = fs.readFileSync(filepath, 'utf-8');
    const source = new Source(typeDef);
    return buildSchema(source);
}