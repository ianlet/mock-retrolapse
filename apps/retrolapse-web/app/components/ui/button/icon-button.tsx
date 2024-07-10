import {ReactNode} from "react";

interface IconButtonProps {
  children: ReactNode;
}

export function IconButton({children}: IconButtonProps) {
  return (
    <button className="bg-transparent rounded-full p-1 flex items-center justify-center">
      {children}
    </button>
  );
}