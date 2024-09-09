import type { CodegenConfig } from '@graphql-codegen/cli';
import config from './src/utils/config';

const configGql: CodegenConfig = {
  overwrite: true,
  schema: config.apiURL,
  documents: 'src/services/modules/**/*.ts',
  generates: {
    'src/services/types.ts': {
      plugins: ['typescript'],
      config: {
        maybeValue: 'T | null',
      },
    },
    'src/services/modules/modules.ts': {
      preset: 'import-types',
      presetConfig: {
        typesPath: '@/services/types',
        baseTypesPath: '~@/services/types',
      },
      plugins: ['typescript-operations'],
      // config: { withHooks: true },
    },
  },
  hooks: {
    afterAllFileWrite: ['eslint --fix'],
  },
};

export default configGql;
