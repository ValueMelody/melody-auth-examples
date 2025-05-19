import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: '../../../melody-auth/server/src/scripts/embedded-swagger.json',
  apiFile: '../src/services/embedded-auth',
  apiImport: 'embeddedAuthApi',
  tag: true,
  outputFile: '../src/services/embedded-auth/api.ts',
  exportName: 'embeddedAuthApi',
  hooks: {
    queries: true, lazyQueries: true, mutations: true,
  },
}

export default config
