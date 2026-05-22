import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const Dot = ({ className }: Props) => {
  return (
    <span
      className={cn("size-1 bg-[currentColor] rounded-full", className)}
    ></span>
  );
};

export default Dot;
