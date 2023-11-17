export const PASSWORD_PLACEHOLDER =
  "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";

export const emailRegex = new RegExp(
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
);

type ValidateLoginReturn =
  | {
      message: string;
      isValid: false;
    }
  | {
      isValid: true;
      fields: {
        email: string;
        password: string;
      };
    };
export function validateLogin(form: FormData): ValidateLoginReturn {
  const hasEmail = form.has("email");

  if (!hasEmail)
    return {
      isValid: false,
      message: "Email is required.",
    };

  const email = form.get("email")!.toString().trim();
  const validEmail = emailRegex.test(email);

  if (!validEmail) {
    return {
      isValid: false,
      message: "Please enter a valid email.",
    };
  }

  const hasPassword = form.has("password");

  if (!hasPassword) {
    return {
      isValid: false,
      message: "Password is required.",
    };
  }

  const password = form.get("password")!.toString();

  if (password.length < 4 || password.length > 20) {
    return {
      isValid: false,
      message: "Please enter a valid email.",
    };
  }

  return {
    isValid: true,
    fields: {
      email,
      password,
    },
  };
}

export async function swrGetFetcher(url: string) {
  const options: RequestInit = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  return fetch(url, options).then((r) => r.json());
}

type MutationFetcherArgs = {
  arg: {
    email: string;
    password: string;
  };
};
export async function swrMutationFetcher(
  url: string,
  { arg }: MutationFetcherArgs,
) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}
