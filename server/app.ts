import { Hono } from "hono";
import { logger } from "hono/logger";

import routers from "./routes";

const app = new Hono();

app.use("*", logger());

app.get("/api/ping", (context) => {
    return context.json({ message: "The API is up and running." });
});

app.route("/api/expenses", routers.expenses);

export default app;