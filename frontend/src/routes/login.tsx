import { FormEvent } from "react";
import { Input } from "../components/general/input";
import { SubmitButton } from "../components/general/submit";
import {
  PASSWORD_PLACEHOLDER,
  swrMutationFetcher,
  validateLogin,
} from "../utils";
import { toast } from "sonner";
import useSWRMutation from "swr/mutation";
import { Link, useLocation } from "wouter";

export function LoginRoute() {
  const { trigger, isMutating } = useSWRMutation(
    "/api/user/sign-in",
    swrMutationFetcher,
  );

  const [_, setLocation] = useLocation();

  async function submitLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const valid = validateLogin(form);

    if (!valid.isValid) {
      return toast.error(valid.message);
    }

    await trigger(valid.fields);

    setLocation("/products");
  }

  return (
    <main className="items mx-auto flex h-[calc(100vh_-_2rem)] max-w-md items-center">
      <div className="w-full">
        <h1 className="text-center text-2xl font-bold">Sign in Page</h1>
        <p className="mb-12 text-center">Please fill out all the fields.</p>
        <form onSubmit={submitLogin}>
          <div className="grid gap-4">
            <Input
              type="email"
              name="email"
              id="email"
              labelTitle="Your Email"
              placeholder="email@email.com"
              required
            />
            <Input
              type="password"
              name="password"
              id="password"
              labelTitle="Your Password"
              placeholder={PASSWORD_PLACEHOLDER}
              required
              minLength={4}
              maxLength={20}
            />
            <SubmitButton
              title="Sign in"
              disabled={isMutating}
              isLoading={isMutating}
            />
          </div>
        </form>
        <footer>
          <h4 className="mt-4 text-center text-sm">
            Don't have an account yet?{" "}
            <Link
              className="text-indigo-500 transition-all hover:underline"
              href="/sign-up"
            >
              Register Now
            </Link>
          </h4>
        </footer>
      </div>
    </main>
  );
}
