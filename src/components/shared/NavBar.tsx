import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import VnvLogo from "../../assets/vectors/velvet-and-vine.svg?react";
import { Button } from "../ui/button";

const NavBar = () => {
  const navItems = [
    { title: "weddings" },
    { title: "gallery" },
    { title: "inquire" },
    { title: "about" },
  ];

  return (
    <header className="absolute z-50 flex items-center w-full justify-between px-6 py-4 bg-transparent text-neutral-50">
      <div className="flex gap-2 items-center">
        <VnvLogo className="w-8 h-auto" />
        <div className="inline-block font-brand font-semibold text-xl">
          VELVET &amp; VINE
        </div>
      </div>
      <NavigationMenu className="font-semibold gap-7 tracking-wider">
        <NavigationMenuList>
          {navItems.map((n) => (
            <NavigationMenuItem key={n.title}>
              <NavigationMenuLink className="hover:bg-transparent hover:text-accent">
                {n.title.toUpperCase()}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button className="font-semibold rounded-none">Book Consultation</Button>
    </header>
  );
};

export default NavBar;
