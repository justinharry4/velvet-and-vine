import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

import Line from "./Line";

interface Props {
  className?: string;
  children: ReactNode;
}

const ButtonLink = ({ className, children }: Props) => {
  return (
    <span className={cn("inline-flex flex-col gap-0.5 ", className)}>
      <a className="peer relative cursor-pointer inline-flex items-center gap-1.5 tracking-wide hover:text-accent-700">
        {children} <ArrowRight size={14} />
      </a>
      <Line className="w-0 bg-accent-700/50 peer-hover:w-full" />
    </span>
  );
};

export default ButtonLink;
