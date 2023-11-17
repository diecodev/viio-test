import { Hono } from "hono";
import { serve } from "@hono/node-server";
// env vars
import "dotenv/config";
import { env } from "hono/adapter";
import type { EnvVariables } from "./types";
// middlewares
import { jwt } from "hono/jwt";
import { prettyJSON } from "hono/pretty-json";
import { timing } from "hono/timing";
import { logger } from "hono/logger";
// routers
import { router as userRouter } from "./routes/user";
import { router as productsRouter } from "./routes/products";

const app = new Hono();

app.use("*", prettyJSON());
app.use("*", timing());
app.use("*", logger());
// This RegExp match all routes except /user/sign-in
// The user need the cookie to have total acces
app.use("^(?!/user/sign-in$).*", async (c, next) => {
  const { JWT_COOKIE: cookie, JWT_SECRET: secret } = env<EnvVariables>(c);

  const auth = jwt({
    secret,
    cookie,
  });

  return await auth(c, next);
});

app.route("/user", userRouter);
app.route("/products", productsRouter);

serve(
  {
    fetch: app.fetch,
    port: 8080,
  },
  (info) => console.log(`server is running on http://localhost:${info.port}`)
);
