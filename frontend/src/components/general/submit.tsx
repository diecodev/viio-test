import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isLoading: boolean;
}

export function SubmitButton({ title, isLoading, ...props }: Props) {
  return (
    <button
      className="flex items-center justify-center rounded-md bg-indigo-500 px-3 py-1 font-semibold text-white transition-all"
      type="submit"
      {...props}
    >
      {isLoading ? (
        <div className="my-1 h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-white" />
      ) : (
        title
      )}
    </button>
  );
}
