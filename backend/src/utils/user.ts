import { genSalt, hash } from "bcrypt";
import { Users } from "../types";
import { users } from "./database";

export async function getUserByEmail(email: string) {
  const user = await users!.findOne(
    { email },
    {
      projection: {
        _id: 1,
        password: 1,
      },
    }
  );

  return user;
}

export async function generateUserObject(user: Users): Promise<Users> {
  const salt = await genSalt();

  const hashedPassword = await hash(user.password, salt);

  return {
    email: user.email,
    password: hashedPassword,
  };
}

export async function validateUserDoNotExists(
  email: string
): Promise<{ exists: boolean }> {
  const user = await users!.findOne({ email });

  return { exists: !!user };
}
