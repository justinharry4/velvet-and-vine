import { Sparkle } from "lucide-react";

import { Button } from "@/components/ui/button";
import EyebrowText from "./EyebrowText";

import Flower from "@/assets/vectors/peony-flower.svg?react";

const FinalCTA = () => {
  return (
    <div className="group/dark relative mt-26 min-h-[90vh]">
      <div className="absolute inset-0 bg-linear-[160deg] from-brand-900 via-brand-950 to-brand-800"></div>
      <div className="absolute inset-0 bg-radial-[at_50%_10%] from-brand-400/25 to-transparent to-30%"></div>
      <div className="relative inset-0 py-30">
        <div className="flex justify-center">
          <Flower className="w-30 rotate-10 opacity-30" />
        </div>
        <EyebrowText className="text-accent-300">
          One Conversation Changes Everything
        </EyebrowText>
        <h2 className="mt-10 font-heading text-8xl text-neutral-50 text-center">
          Let's Create Something
          <br /> Extraordinary
        </h2>
        <p className="mt-10 text-lg text-center text-neutral-50/70 leading-loose">
          Every extraordinary event begins with a single conversation.
          <br /> Yours is waiting
        </p>
        <div className="dark mt-15 flex max-w-130 mx-auto justify-center gap-6">
          <Button size="lg" className="flex-1">
            BEGIN YOUR CONSULTATION
          </Button>
          <Button variant="secondary" size="lg" className="flex-1">
            VIEW OUR WORK
          </Button>
        </div>
        <p className="mt-14 flex justify-center items-center gap-1 text-accent-300/60">
          <Sparkle
            className="size-2"
            fill="currentColor"
            stroke="currentColor"
          />
          <EyebrowText>
            Trusted by over 320 couples and clients across Africa
          </EyebrowText>
          <Sparkle
            className="size-2"
            fill="currentColor"
            stroke="currentColor"
          />
        </p>
      </div>
    </div>
  );
};

export default FinalCTA;
