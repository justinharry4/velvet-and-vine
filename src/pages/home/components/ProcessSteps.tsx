import Dot from "@/components/shared/Dot";
import EyebrowText from "./EyebrowText";
import ProcessStep from "./ProcessStep";

import step1Image from "@/assets/raster/step1.jpeg";
import step2Image from "@/assets/raster/step2.jpeg";
import step3Image from "@/assets/raster/step3.jpeg";
import { Button } from "@/components/ui/button";
import ButtonLink from "@/components/shared/ButtonLink";

const ProcessSteps = () => {
  const steps = [
    {
      number: 1,
      title: "The Consultation",
      description:
        "We begin with a private conversation — in person, by phone, or over video. " +
        "You share your vision, your occasion, your instincts. We listen without rushing. " +
        "This first meeting has no agenda other than understanding you completely.",
      imageUrl: step1Image,
    },
    {
      number: 2,
      title: "The Vision",
      description:
        "Within the week, you receive a bespoke mood board and a written proposal — " +
        "palette, textures, blooms, and scale. Nothing is templated. Every element is " +
        "chosen in response to what you told us. You refine it, we refine it, " +
        "until it is precisely right.",
      imageUrl: step2Image,
    },
    {
      number: 3,
      title: "The Creation",
      description:
        "In the days before your event, our studio comes alive. " +
        "Each arrangement is hand-built by our team using flowers sourced " +
        "at their seasonal peak. Quality at every scale — from a single buttonhole " +
        "to a ceremony arch thirty metres long.",
      imageUrl: step3Image,
    },
    {
      number: 4,
      title: "The Day",
      description:
        "We arrive before your guests do. Every arrangement is placed, every detail checked. " +
        "On the day itself, you will not think about flowers — you will simply find yourself " +
        "surrounded by beauty, exactly as you imagined it.",
      imageUrl: step3Image,
    },
  ];

  return (
    <div className="mt-26 mx-[15%] mb-26">
      <EyebrowText className="flex gap-4 text-primary">
        The Experience <Dot /> How it Works
      </EyebrowText>
      <div className="text-center flex flex-col items-center">
        <h2 className="font-heading font-bold text-5xl mt-5">
          From First Conversation to Final Petal
        </h2>
        <p className="mt-3 max-w-md leading-relaxed text-neutral-700">
          Every collaboration begins with listening. Here is what to expect when
          you choose to work with us.
        </p>
      </div>
      <div className="relative mt-25 flex flex-col gap-8">
        <ProcessStep step={steps[0]}>
          <ButtonLink className="mt-6">BEGIN WITH A CONSULTATION</ButtonLink>
        </ProcessStep>
        <ProcessStep step={steps[1]} className="flex-row-reverse" />
        <ProcessStep step={steps[2]} />
        <ProcessStep step={steps[3]} className="flex-row-reverse" />
        <span className="absolute w-px left-[50%] top-0 bottom-0 bg-primary/40"></span>
      </div>
      <div className="mt-24 flex flex-col gap-6 items-center">
        <EyebrowText className="text-primary">Ready to begin?</EyebrowText>
        <Button className="py-5 px-10">
          <EyebrowText>Begin Your Journey</EyebrowText>
        </Button>
        <p className="text-neutral-700 text-md">
          All consultations are complimentary and without obligation
        </p>
      </div>
    </div>
  );
};

export default ProcessSteps;
