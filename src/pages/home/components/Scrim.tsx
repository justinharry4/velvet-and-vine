import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const Scrim = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-linear-to-b from-neutral-950 from-11% to-neutral-950/5",
        className,
      )}
    ></div>
  );
};

export default Scrim;
