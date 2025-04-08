import { RelationOptions } from "typeorm"

export const DefaultOneToOneOptions: RelationOptions = {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
}

export const genXToOneOptions = (opts: RelationOptions = {}, replace = false): RelationOptions => {
    if (replace) {
      return opts
    }
    return {
      ...DefaultOneToOneOptions,
      ...opts
    }
  }