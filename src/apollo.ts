// apollo.ts
import {
	ApolloClient,
	InMemoryCache,
	HttpLink,
	ApolloLink,
	Operation,
} from "@apollo/client";
import { IS_LOGGED_IN } from "./sharedQuieres"; // Adjust the import path as needed

// Function to get the authentication token
const getToken = () => {
	return localStorage.getItem("jwt") || "";
};

// Middleware to add the token to the headers
const authMiddleware = new ApolloLink((operation: Operation, forward) => {
	operation.setContext({
		headers: {
			"X-JWT": getToken(),
		},
	});

	return forward(operation);
});

// HttpLink to specify the GraphQL endpoint
const httpLink = new HttpLink({
	uri: "https://your-graphql-endpoint.com/graphql",
});

const client = new ApolloClient({
	link: ApolloLink.from([authMiddleware, httpLink]),
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					isLoggedIn: {
						read(_, { variables, cache }) {
							const token = variables?.token;
							if (token) {
								localStorage.setItem("jwt", token);
								cache.writeQuery({
									query: IS_LOGGED_IN,
									data: {
										isLoggedIn: true,
									},
								});
							}
							return !!localStorage.getItem("jwt");
						},
					},
					isLoggedOut: {
						read(_, { cache }) {
							localStorage.removeItem("jwt");
							cache.writeQuery({
								query: IS_LOGGED_IN,
								data: {
									isLoggedIn: false,
								},
							});
							return true;
						},
					},
				},
			},
		},
	}),
});

export default client;
