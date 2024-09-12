import * as bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

export namespace Encryption {
  export const encrypt = (password: string, saltOrRound = 13): Promise<string> => {
    return bcrypt.hash(password, saltOrRound);
  }

  export const compare = (password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash)
  }

  export const genToken = (length = 32) => {
    return faker.string.alphanumeric({ length })
  }
}
