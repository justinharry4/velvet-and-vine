import { cn } from "@/lib/utils";
import type { ReactElement } from "react";

import { Sparkle } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface Props {
  step: Step;
  className?: string;
  children?: ReactElement;
}

const ProcessStep = ({ step, className, children }: Props) => {
  return (
    <div
      className={cn("relative flex gap-[10%] items-center group", className)}
    >
      <div className="basis-1/2">
        <div className="flex h-20 items-end text-9xl text-primary/30 font-heading">
          0{step.number}
        </div>
        <h3 className="text-3xl -mt-10 group-nth-3:-mt-5 font-semibold font-heading">
          {step.title}
        </h3>
        <p className="mt-5 leading-relaxed">{step.description}</p>
        {children}
      </div>
      <div className="basis-1/2 aspect-4/5 rounded-lg overflow-hidden shadow-2xl">
        <img src={step.imageUrl} className="object-cover w-full h-full" />
      </div>
      <Sparkle
        fill="currentColor"
        stroke="currentColor"
        className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  p-2 text-brand-100 rounded-full bg-neutral-100"
      />
    </div>
  );
};

export default ProcessStep;
