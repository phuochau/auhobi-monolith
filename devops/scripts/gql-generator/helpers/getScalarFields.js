module.exports.getScalaFields = (gqlSchema, curType) => {
    if (curType.getFields) {
        const fields = curType.getFields();
        const childKeys = Object.keys(fields);
        const scalaFields = []
        for (let i = 0; i < childKeys.length; i++) {
            const fieldName = childKeys[i]
            const childField = fields[fieldName];
            const childTypeName = childField.type.toJSON().replace(/[[\]!]/g, '');
            const childType = gqlSchema.getType(childTypeName);
    
            if (!(childType && childType.getFields)) {
                scalaFields.push(fieldName)
            }
        }

        return scalaFields
    }

    return []
}