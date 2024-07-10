import {ReactNode} from "react";

interface CardBannerProps {
  onClick: () => void;
  children: ReactNode;
}

export const CardBanner = ({ onClick, children }: CardBannerProps) => {
  return <div onClick={onClick} className="-mx-6 p-4 py-7 rounded-lg bg-primary-container text-on-primary-container shadow font-medium text-lg text-center cursor-pointer">
    {children}
  </div>;
}