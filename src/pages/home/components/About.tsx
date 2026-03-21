import EyebrowText from "./EyebrowText";
import aboutImage from "@/assets/raster/about.jpeg";

const About = () => {
  return (
    <div className="mx-28 flex gap-14">
      <div className="basis-[50%]">
        <EyebrowText
          leftLineLength={6}
          className="text-brand-500 justify-start"
        >
          THE ART OF BLOOM
        </EyebrowText>
        <p>
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
      <div className="basis-[50%]">
        <img src={aboutImage} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default About;
