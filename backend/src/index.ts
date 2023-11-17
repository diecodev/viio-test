// env vars
import "dotenv/config";
import { Hono } from "hono";
import { serve } from "@hono/node-server";
// middlewares
import { jwt } from "hono/jwt";
import { prettyJSON } from "hono/pretty-json";
import { timing } from "hono/timing";
import { logger } from "hono/logger";
import { swaggerUI } from "@hono/swagger-ui";
// routers
import { router as userRouter } from "./routes/user";
import { env } from "hono/adapter";
import { EnvVariables } from "./types";

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
app.get("/ui", swaggerUI({ url: "/doc" }));

app.route("/user", userRouter);

serve(
  {
    fetch: app.fetch,
    port: 8080,
  },
  (info) => console.log(`server is running on http://localhost:${info.port}`)
);
