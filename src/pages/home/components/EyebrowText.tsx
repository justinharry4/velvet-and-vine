import Line from "@/components/shared/Line";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  leftLineLength?: number;
  rightLineLength?: number;
  lineLength?: number;
  className?: string;
  children: ReactNode;
}

const EyebrowText = ({
  lineLength,
  leftLineLength,
  rightLineLength,
  className,
  children,
}: Props) => {
  const left = leftLineLength || lineLength || 0;
  const right = rightLineLength || lineLength || 0;

  return (
    <span
      className={cn(
        "flex justify-center items-center gap-2 text-xs tracking-widest",
        className,
      )}
    >
      <Line length={left} />
      {children}
      <Line length={right} />
    </span>
  );
};

export default EyebrowText;
