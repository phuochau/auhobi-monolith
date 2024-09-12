import { RelationOptions } from "typeorm";

const DefaultManyToManyOptions: RelationOptions = {
  cascade: ['insert', 'update', 'remove', 'soft-remove'],
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
}

export const genXToManyOptions = (opts: RelationOptions = {}, replace = false): RelationOptions => {
  if (replace) {
    return opts
  }
  return {
    ...DefaultManyToManyOptions,
    ...opts
  }
}