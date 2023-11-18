import { Hono } from "hono";
import { env } from "hono/adapter";
import { EnvVariables, ExternalApiResponse } from "../types";

export const router = new Hono();

router.get("/", async (c) => {
  const { PRODUCTS_API_URL: endpoint } = env<EnvVariables>(c);

  const url = new URL(endpoint);

  const query = new URLSearchParams(c.req.query()).toString();

  url.search = query;

  const apiRes = (await fetch(url).then((r) =>
    r.json()
  )) as ExternalApiResponse;

  const products = apiRes.carts.map((cart) => cart.products);

  const flattedProducts = products.flat();

  const data = Array.from(new Set(flattedProducts));

  return c.json({ data: data });
});
