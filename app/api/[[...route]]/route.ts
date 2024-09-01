import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";

import authors from "./authors";
import books from "./books";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app.route("/authors", authors).route("/books", books);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
