import { CookieOptions } from "hono/utils/cookie";

export const cookieOpts: CookieOptions = {
  maxAge: Date.now() + 60 * 60 * 24,
  path: "/",
  sameSite: "Lax",
  secure: true,
};
