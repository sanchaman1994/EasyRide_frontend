import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: ["http://localhost:4000/graphql", "./src/schema.graphql"],
  documents: ["src/**/*.Query.ts"],
  generates: {
    "./src/types/api.d.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo"
      ],
    },
  },
  ignoreNoDocuments: true,
};

export default config;