import galleryImage1 from "@/assets/raster/gallery1.jpeg";
import galleryImage2 from "@/assets/raster/gallery2.jpeg";
import galleryImage3 from "@/assets/raster/gallery3.jpeg";
import galleryImage4 from "@/assets/raster/gallery4.jpeg";
import galleryImage5 from "@/assets/raster/gallery5.jpeg";

import GalleryImage from "./GalleryImage";

const GalleryGrid = () => {
  const galleryItems = [
    {
      eventName: "The Harlow Estate",
      eventType: "Wedding",
      year: "2024",
      imageUrl: galleryImage1,
    },
    {
      eventName: "The Crimson Feast, Claridge's",
      eventType: "Private Dining Event",
      year: "2024",
      imageUrl: galleryImage2,
    },
    {
      eventName: "Atelier Editorial, London",
      eventType: "Editorial",
      year: "2023",
      imageUrl: galleryImage3,
    },
    {
      eventName: "The Ashworth Ceremony",
      eventType: "Wedding",
      year: "2024",
      imageUrl: galleryImage4,
    },
    {
      eventName: "Midsummer Night, Tobacco Dock",
      eventType: "Gala Event",
      year: "2025",
      imageUrl: galleryImage5,
    },
  ];

  return (
    <div className="grid grid-cols-5 grid-rows-[1fr_1fr_1.7fr] mt-10 gap-4">
      <GalleryImage
        galleryItem={galleryItems[0]}
        className="col-span-3 row-span-2"
      />
      <GalleryImage
        galleryItem={galleryItems[1]}
        className="col-span-2 row-span-1"
      />
      <GalleryImage
        galleryItem={galleryItems[2]}
        className="col-span-2 row-span-1"
      />
      <GalleryImage galleryItem={galleryItems[3]} className="col-span-2" />
      <GalleryImage galleryItem={galleryItems[4]} className="col-span-3" />
    </div>
  );
};

export default GalleryGrid;
