import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import client from "./apollo";
import { ApolloProvider } from "@apollo/client";
import App from "./App";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
);
