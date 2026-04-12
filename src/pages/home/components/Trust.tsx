import Aman from "@/assets/vectors/aman.svg?react";
import Ad from "@/assets/vectors/architectural-digest.svg?react";
import Cartier from "@/assets/vectors/cartier.svg?react";
import Harpers from "@/assets/vectors/harpers-bazaar.svg?react";
import Cleef from "@/assets/vectors/van-cleef.svg?react";
import Vogue from "@/assets/vectors/vogue.svg?react";

import EyebrowText from "./EyebrowText";
import TestimonialCard from "./TestimonialCard";

const Trust = () => {
  const brandLogos = [Aman, Ad, Cartier, Harpers, Cleef, Vogue];
  const testimonials = [
    {
      customer: "Mrs. Julianne Rhodes",
      event: "Villa d'Este",
      testimony:
        "Walking into the ballroom was like entering a dream. The vines felt as if they had grown through the walls overnight. Pure, unadulterated magic.",
    },
    {
      customer: "Eloise Montgomery",
      event: "The Grand Pierre",
      testimony:
        "A masterclass in botanical architecture. They didn't just decorate the space; they transformed it into an ethereal garden that felt both ancient and brand new.",
    },
  ];

  return (
    <div className="mx-[10%] mt-30">
      <EyebrowText className="text-primary">As featured in</EyebrowText>
      <div className="mt-12 flex gap-x-16 gap-y-10 flex-wrap justify-center">
        {brandLogos.map((Logo, index) => (
          <Logo key={index} className="h-7.5 text-primary/50" />
        ))}
      </div>
      <div className="mt-15 flex gap-10 mx-10">
        {testimonials.map((t) => (
          <TestimonialCard testimonial={t} key={t.customer} />
        ))}
      </div>
    </div>
  );
};

export default Trust;
