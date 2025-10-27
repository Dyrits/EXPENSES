import crypto from "node:crypto";

import type { Expense } from "../types";

export default [
	{
		amount: 980,
		id: crypto.randomUUID(),
		title: "Rent",
	},
	{
		amount: 140,
		id: crypto.randomUUID(),
		title: "Groceries",
	},
] as Expense[];
