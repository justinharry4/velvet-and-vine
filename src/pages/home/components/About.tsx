import EyebrowText from "./EyebrowText";
import aboutImage from "@/assets/raster/about.jpeg";

const About = () => {
  return (
    <div className="mx-28 mt-26 flex gap-14 items-center">
      <div className="basis-[50%]">
        <EyebrowText leftLine="w-7.5" className="text-primary justify-start">
          THE ART OF BLOOM
        </EyebrowText>
        <p className="mt-5">
          <span className="float-left font-heading font-bold text-6xl mr-2">
            F
          </span>
          ocused on seasonal rarity and the language of flowers, we curate stems
          that speak of timeless elegance for your most cherished moments. Every
          arrangement we design balances the wild, untamed beauty of nature with
          architectural precision, creating an atmosphere of sophisticated
          whimsy that lingers in the memory long after the final petal has
          fallen.
        </p>
      </div>
      <div className="basis-[50%] relative shadow-[6px_6px_20px_2px_rgba(0,0,0,0.2)]">
        <img src={aboutImage} className="w-full h-full object-cover" />
        <div className="absolute inset-5 border border-neutral-400/60"></div>
      </div>
    </div>
  );
};

export default About;
