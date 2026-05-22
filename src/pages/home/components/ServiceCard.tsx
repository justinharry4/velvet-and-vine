import Line from "@/components/shared/Line";
import Scrim from "./Scrim";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import ButtonLink from "@/components/shared/ButtonLink";

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
        <ButtonLink>EXPLORE</ButtonLink>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
