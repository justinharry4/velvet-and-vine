import weddingsImage from "@/assets/raster/weddings.jpeg";
import editorialImage from "@/assets/raster/editorial.jpeg";
import eventsImage from "@/assets/raster/events.jpeg";

import EyebrowText from "./EyebrowText";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      name: "weddings",
      imageUrl: weddingsImage,
      description:
        "Bespoke floral design for your most memorable day, from bouquets to grand venue installations.",
    },
    {
      name: "events",
      imageUrl: eventsImage,
      description:
        "Elevated floral styling for brand launches, galas, and professional spaces that impress.",
    },
    {
      name: "editorial",
      imageUrl: editorialImage,
      description:
        "Creative floral concepts for photography, commercial styling, and luxury residential art.",
    },
  ];

  return (
    <div className="mx-[10%] mt-26">
      <EyebrowText className="text-primary">WHAT WE DO</EyebrowText>
      <h2 className="text-center font-heading text-5xl font-bold mt-3">
        Bespoke Botanical Design
      </h2>
      <div className="flex gap-12 mt-16">
        {services.map((s) => (
          <ServiceCard service={s} />
        ))}
      </div>
    </div>
  );
};

export default Services;
