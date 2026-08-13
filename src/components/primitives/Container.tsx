import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Page-width container with responsive gutters. */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[88rem] px-6 sm:px-8 lg:px-16 ${className}`}
    >
      {children}
    </div>
  );
}
