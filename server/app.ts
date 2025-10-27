import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";

import routers from "./routes";

const app = new Hono();

app.use("*", logger());

const api = app.basePath("/api").route("/expenses", routers.expenses);

app.get("*", serveStatic({ root: "./client/dist" }));
app.get("*", serveStatic({ path: "./client/dist/index.html" }));

export default app;
export type API = typeof api;
