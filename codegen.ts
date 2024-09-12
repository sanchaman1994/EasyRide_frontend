import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "http://localhost:4000/graphql",
	documents: ["src/**/*.tsx", "src/**/*.ts"],
	generates: {
		"./src/__generated__/": {
			preset: "client",
			presetConfig: {
				gqlTagName: "gql",
			},
		},
	},
	config: {
		scalars: {
			Boolean: "boolean",
			String: "string",
			// Add custom scalar mappings here
		},
	},
	ignoreNoDocuments: true,
};

export default config;
