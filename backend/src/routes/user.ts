import { Hono } from "hono";
import { sign } from "hono/jwt";
import { setCookie, getCookie, deleteCookie } from "hono/cookie";
import { env } from "hono/adapter";
import { users } from "../utils/database";
import { EnvVariables, Users } from "../types";
import { validateUserCredentials } from "../middlewares/user";
import { compare } from "bcrypt";
import {
  generateUserObject,
  getUserByEmail,
  validateUserDoNotExists,
} from "../utils/user";

export const router = new Hono();

// login and create user cookies to acces data in products
router.post("/sign-in", validateUserCredentials, async (c) => {
  const { JWT_COOKIE: cookie, JWT_SECRET: secret } = env<EnvVariables>(c);

  const body: Users = await c.req.json();

  const user = await getUserByEmail(body.email);

  if (!user) {
    return c.text("Unauthorized", 401);
  }

  const validPassword = await compare(body.password, user.password);

  if (!validPassword) {
    return c.text("Unauthorized", 401);
  }

  const token = await sign({ publicId: user._id }, secret);

  setCookie(c, cookie, token);
  return c.json({ success: true }, 200);
});

// sign out the user deleting the JWT cookie with token
router.post("/sign-out", async (c) => {
  const { JWT_COOKIE: cookie } = env<EnvVariables>(c);
  deleteCookie(c, cookie);

  return c.json({ success: true }, 200);
});

// register new user
router.post("/sign-up", validateUserCredentials, async (c) => {
  const { JWT_COOKIE: cookie, JWT_SECRET: secret } = env<EnvVariables>(c);

  const isAlreadySignedIn = getCookie(c, cookie);

  if (isAlreadySignedIn) {
    return c.text("Unauthorized", 401); // If user is already logged in, iit won't allow a registration request to be made until the user's cookie has expired or deleted.
  }

  const body: Users = await c.req.json();

  const { exists } = await validateUserDoNotExists(body.email);

  if (exists) {
    return c.text("Unauthorized", 401);
  }

  const userObj = await generateUserObject(body);

  const { insertedId } = await users!.insertOne(userObj);

  const token = await sign({ publicId: insertedId }, secret);

  setCookie(c, cookie, token);
  return c.json({ success: true }, 200);
});
