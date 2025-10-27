import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";

const root = document.getElementById("root");

if (!root) {
	throw new Error("Failed to fin the root element to render the application.");
}

const query = new QueryClient();

createRoot(root).render(
	<StrictMode>
		<QueryClientProvider client={query}>
			<App />
		</QueryClientProvider>
	</StrictMode>,
);
