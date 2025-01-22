import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator"
import crypto from "crypto";

import expenses from "../mocks/expenses";

const router = new Hono();

const ExpenseSchema = z.object({
    id: z.string(),
    title: z.string().min(2),
    amount: z.number().positive()
});

type Expense = z.infer<typeof ExpenseSchema>

const ExpensePostSchema = ExpenseSchema.omit({ id: true });

router.get("/", (context) => {
    return context.json({ expenses });
});

router.get("/total", (context) => {
    console.log("Requesting total");
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    return context.json({ total });
});

router.get("/:id", (context) => {
    const id = context.req.param("id");
    const expense: Expense = expenses.find((expense) => expense.id === id);
    if (!expense) {
        return context.notFound();
    }
    return context.json(expense);
});


router.post("/", zValidator("json", ExpensePostSchema),  async (context) => {
    const data = context.req.valid("json");
    const expense: Expense = { ...data, id: crypto.randomUUID() };
    expenses.push(expense);
    return context.json(expense);
});

router.put("/:id", zValidator("json", ExpenseSchema), (context) => {
    const id = context.req.param("id");
    const data = context.req.valid("json");
    const index = expenses.findIndex((expense) => expense.id === id);
    if (index === -1) {
        return context.notFound();
    }
    expenses[index] = { ...data, id };
    return context.json(expenses[index]);
});

router.delete("/:id", (context) => {
    const id = context.req.param("id");
    const index = expenses.findIndex((expense) => expense.id === id);
    if (index === -1) {
        return context.notFound();
    }
    expenses.splice(index, 1);
    return context.json({ message: "Expense deleted." });
});

export default router;