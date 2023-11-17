import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const validateUserCredentials = zValidator(
  "json",
  z.object({
    email: z.string().email(),
    password: z.string().min(4).max(20),
  })
);
