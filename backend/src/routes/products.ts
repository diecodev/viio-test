import { Hono } from "hono";
import { env } from "hono/adapter";
import { EnvVariables, ExternalApiResponse } from "../types";
import { normalizeProducts } from "../utils/products";

export const router = new Hono();

router.get("/", async (c) => {
  const { PRODUCTS_API_URL: endpoint } = env<EnvVariables>(c);

  const url = new URL(endpoint);

  const query = new URLSearchParams(c.req.query()).toString();

  url.search = query;

  const apiRes = (await fetch(url).then((r) =>
    r.json()
  )) as ExternalApiResponse;

  const data = normalizeProducts(apiRes);

  return c.json(data);
});
