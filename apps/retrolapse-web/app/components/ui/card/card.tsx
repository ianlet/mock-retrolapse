import {ReactNode} from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className="p-4 rounded-lg bg-background shadow-xl relative">{children}</div>;
}