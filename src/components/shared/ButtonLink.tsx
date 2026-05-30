import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface Props {
  className?: string;
  children: ReactNode;
}

const ButtonLink = ({ className, children }: Props) => {
  return (
    <a
      className={cn(
        "relative pb-1.25 cursor-pointer inline-flex items-center gap-1.5 text-xs tracking-widest hover:text-accent-700 after:absolute after:bottom-px after:left-0 after:h-px after:w-full after:bg-accent-700/25 hover:after:bg-accent-700/50",
        className,
      )}
    >
      {children} <ArrowRight size={14} />
    </a>
  );
};

export default ButtonLink;
