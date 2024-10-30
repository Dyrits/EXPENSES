import crypto from "crypto";

import type {Expense} from "../types";

export default [
    {
        id: crypto.randomUUID(),
        title: "Rent",
        amount: 980
    },
    {
        id: crypto.randomUUID(),
        title: "Groceries",
        amount: 140
    }
] as Expense[];