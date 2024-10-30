import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator"
import crypto from "crypto";

import expenses from "../mocks/expenses";

import type {Expense} from "../types.ts";

const router = new Hono();

router.get("/", (context) => {
    return context.json({ expenses });
});

const PostSchema = z.object({
    title: z.string().min(2),
    amount: z.number().positive()
});

router.post("/", zValidator("json", PostSchema),  async (context) => {
    const data = await context.req.valid("json");
    const expense: Expense = { ...data, id: crypto.randomUUID() };
    expenses.push(expense);
    return context.json(expense);
});

export default router;