import Line from "@/components/shared/Line";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  leftLine?: string;
  rightLine?: string;
  line?: string;
  className?: string;
  children: ReactNode;
}

const EyebrowText = ({
  line,
  leftLine,
  rightLine,
  className,
  children,
}: Props) => {
  const left = leftLine || line || "w-0";
  const right = rightLine || line || "w-0";

  return (
    <span
      className={cn(
        "flex justify-center items-center gap-2 text-xs tracking-widest",
        className,
      )}
    >
      <Line className={left} />
      {children}
      <Line className={right} />
    </span>
  );
};

export default EyebrowText;
