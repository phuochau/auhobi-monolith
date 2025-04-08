import { RelationOptions } from "typeorm";

const DefaultManyToManyOptions: RelationOptions = {
  cascade: true,
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
}

export const genXToManyOptions = (opts: RelationOptions = {}, replace = false): RelationOptions => {
  if (replace) {
    return opts
  }
  return {
    ...DefaultManyToManyOptions,
    ...opts,
  }
}