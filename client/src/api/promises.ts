import type { API } from "@server/app";
import { hc } from "hono/client";

const client = hc<API>("/");

const api = {
	expenses: {
		get: {
			async total() {
				const response = await client.api.expenses.total.$get();
				if (!response.ok) {
					throw new Error("Failed to fetch total of expenses.");
				}
				return response.json();
			},
		},
	},
};

export const expenses = {
	get: {
		total: api.expenses.get.total(),
	},
};
