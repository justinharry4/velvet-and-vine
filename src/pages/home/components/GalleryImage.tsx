import { cn } from "@/lib/utils";
import EyebrowText from "./EyebrowText";

interface GalleryItem {
  eventName: string;
  eventType: string;
  year: string;
  imageUrl: string;
}

interface Props {
  className?: string;
  galleryItem: GalleryItem;
}

const GalleryImage = ({ className, galleryItem }: Props) => {
  return (
    <div className={cn("relative group overflow-hidden rounded-md", className)}>
      <img src={galleryItem.imageUrl} className="w-full h-full object-cover" />
      <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-neutral-950/70">
        <div className="absolute bottom-0 w-full pb-6 items-center flex flex-col gap-1">
          <span className="font-heading text-neutral-50 text-xl">
            {galleryItem.eventName}
          </span>
          <EyebrowText className="flex gap-2 items-center text-brand-50">
            {galleryItem.eventType}
            <span className="size-1 rounded-full bg-[currentColor]"></span>
            {galleryItem.year}
          </EyebrowText>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
