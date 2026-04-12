import { Quote } from "lucide-react";
import Line from "@/components/shared/Line";
import EyebrowText from "./EyebrowText";

interface Testimonial {
  testimony: string;
  customer: string;
  event: string;
}

interface Props {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div>
      <span className="text-neutral-400">
        <Quote
          className="rotate-180 scale-150"
          fill="currentColor"
          stroke="currentColor"
        />
      </span>
      <p className="font-heading italic text-xl mt-3">
        ''{testimonial.testimony}''
      </p>
      <div className="mt-6 flex flex-col gap-3 text-primary items-start">
        <Line className="w-8 bg-primary/60" />
        <EyebrowText className="gap-0">
          {testimonial.customer} &mdash; {testimonial.event}
        </EyebrowText>
      </div>
    </div>
  );
};

export default TestimonialCard;
