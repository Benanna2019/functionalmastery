import clsx from "clsx";
import { Button, buttonVariants } from "../ui/button";

export function LinkButton({
  className,
  href,
  children,
}: {
  className: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Button asChild>
      <a className={clsx(className)} href={href}>
        {children}
      </a>
    </Button>
  );
}
