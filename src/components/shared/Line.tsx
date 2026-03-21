import { cn } from "@/lib/utils";

interface Props {
  length?: number;
  className?: string;
}
const Line = ({ length = 1 }: Props) => {
  const numLength = length * 5;
  return (
    <div
      style={{ width: `${numLength}px` }}
      className={cn("h-px bg-[currentColor]")}
    ></div>
  );
};

export default Line;
