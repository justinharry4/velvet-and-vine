import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}
const Line = ({ className }: Props) => {
  return <span className={cn("h-px w-0 bg-[currentColor]", className)}></span>;
};

export default Line;
