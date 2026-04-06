import { ArrowRight } from "lucide-react";

import Line from "@/components/shared/Line";
import Scrim from "./Scrim";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

interface Service {
  name: string;
  description: string;
  imageUrl: string;
}

interface Props {
  service: Service;
}

const ServiceCard = ({ service }: Props) => {
  return (
    <Card className="relative basis-1/3 bg-transparent ring-0 p-0 gap-5">
      <div className="relative aspect-4/5 rounded-lg overflow-hidden">
        <img
          src={service.imageUrl}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <Scrim className="from-0% to-50%" />
      </div>
      <CardHeader className="px-2">
        <CardTitle className="absolute z-10 top-4 left-4 flex flex-col gap-1.5 justify-start text-neutral-50 text-xs tracking-widest">
          <span>{service.name.toUpperCase()}</span>
          <Line className="w-12.5" />
        </CardTitle>
        <CardDescription className="">{service.description}</CardDescription>
      </CardHeader>
      <CardFooter className="py-0 px-2 border-0 bg-transparent">
        <div className="flex flex-col gap-0.5 ">
          <a className="peer relative cursor-pointer flex items-center gap-1.5 tracking-wide hover:text-accent-700">
            EXPLORE <ArrowRight size={14} />
          </a>
          <Line className="w-0 bg-accent-700/50 peer-hover:w-full" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
