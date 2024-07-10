import {ReactNode} from "react";

interface CardContentProps {
  children: ReactNode;
}

export function CardContent({children}: CardContentProps) {
  return (
    <div className="-mx-4">
      {children}
    </div>
  );
}