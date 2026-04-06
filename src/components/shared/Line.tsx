import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}
const Line = ({ className }: Props) => {
  return <div className={cn("h-px w-0 bg-[currentColor]", className)}></div>;
};

export default Line;
