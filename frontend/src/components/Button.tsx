import type { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 cursor-pointer hover:bg-gray-200 transition duration-700 ease-in-out md:transition-normal rounded-xs"
    >
      {children}
    </button>
  );
};
