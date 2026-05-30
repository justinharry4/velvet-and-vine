import { Button } from "@/components/ui/button";
import heroImage from "@/assets/raster/hero.jpeg";
import EyebrowText from "./EyebrowText";
import Scrim from "./Scrim";

const Hero = () => {
  return (
    <section className="dark relative h-svh flex flex-col items-center justify-center">
      <img
        src={heroImage}
        alt="Hero Image"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <Scrim className="to-neutral-950/50" />
      <div className="relative z-10 flex flex-col justify-center text-center bg gap-6 w-2/3 md:1/2 text-neutral-50">
        <EyebrowText line="w-5">EST. 2024 PARIS</EyebrowText>
        <h1 className="font-heading text-7xl font-bold">
          Artisan Floristry for Grandest Moments
        </h1>
        <p className="font-light">
          Curating timeless elegance with rare botanicals for weddings and
          exclusive events across the globe.
        </p>
        <div className="flex gap-4 max-w-100 mx-auto justify-center mt-4">
          <Button size="lg" className="flex-1">
            View the Portfolio
          </Button>
          <Button variant="secondary" size="lg" className="flex-1">
            Inquire for 2026
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
