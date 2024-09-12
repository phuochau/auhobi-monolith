import type { CodegenConfig } from '@graphql-codegen/cli';
import path from 'path'

const config: CodegenConfig = {
  overwrite: true,
  schema: path.join(process.cwd(), "../backend/src/schema.gql"),
  generates: {
    "src/graphql/gql/generated-models.ts": {
      plugins: [
        "typescript",
        "typescript-resolvers"
      ],
      config: {
        useIndexSignature: true
      }
    }
  }
};

export default config;