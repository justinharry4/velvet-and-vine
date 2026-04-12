import EyebrowText from "./EyebrowText";
import GalleryFilterBar from "./GalleryFilterBar";
import GalleryGrid from "./GalleryGrid";

const Gallery = () => {
  return (
    <div className="mx-[10%] mt-40 mb-26 flex flex-col items-center">
      <EyebrowText className="flex gap-4 items-center text-primary">
        <span>OUR WORK</span>
        <span className="size-1 bg-[currentColor] rounded-full"></span>
        <span>RECENT CELEBRATIONS</span>
      </EyebrowText>
      <h2 className="font-heading text-5xl text-center mt-5 font-bold">
        Moments Made Beautiful
      </h2>
      <GalleryFilterBar />
      <GalleryGrid />
    </div>
  );
};

export default Gallery;
