import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  id: string;
  labelTitle: string;
}

export function Input({ id, name, type, labelTitle, ...props }: Props) {
  return (
    <fieldset className="flex flex-col-reverse">
      <input
        type={type}
        name={name}
        id={id}
        {...props}
        className="focus-within:boder-indigo-500 peer rounded-md border-2 px-3 py-1 outline-none transition-all"
      />
      <label
        htmlFor={id}
        className="font-semibold peer-focus-within:text-indigo-500"
      >
        {labelTitle}
      </label>
    </fieldset>
  );
}
