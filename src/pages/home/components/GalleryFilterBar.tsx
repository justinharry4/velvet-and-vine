import Line from "@/components/shared/Line";
import { cn } from "@/lib/utils";
import { useState } from "react";

const GalleryFilterBar = () => {
  const filters = ["all", "weddings", "events", "corporate"];
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <ul className="flex gap-10 mt-8 tracking-wide">
      {filters.map((f) => (
        <li
          className={cn(
            "flex flex-col gap-1 group cursor-pointer hover:text-accent-700",
            activeFilter == f && "text-accent-700",
          )}
          onClick={() => setActiveFilter(f)}
        >
          <span className="capitalize">{f}</span>
          <Line
            className={cn(
              "w-0 group-hover:w-full",
              activeFilter == f && "w-full",
            )}
          />
        </li>
      ))}
    </ul>
  );
};

export default GalleryFilterBar;
