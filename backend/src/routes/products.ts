import { Hono } from "hono";
import { env } from "hono/adapter";
import { EnvVariables } from "../types";

export const router = new Hono();

router.get("/", async (c) => {
  const { PRODUCTS_API_URL: endpoint } = env<EnvVariables>(c);

  const url = new URL(endpoint);

  const query = new URLSearchParams(c.req.query()).toString();

  url.search = query;

  const data = await fetch(url).then((r) => r.json());

  return c.json({ data });
});
