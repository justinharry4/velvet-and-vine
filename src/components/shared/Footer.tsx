import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import EyebrowText from "@/pages/home/components/EyebrowText";
import Dot from "./Dot";

interface NavListProps {
  title: string;
  links: string[];
  className?: string;
}

interface NavLinkProps {
  children: ReactNode;
  className?: string;
}

const NavLink = ({ children, className }: NavLinkProps) => {
  return (
    <span className={cn("hover:text-accent-400/70", className)}>
      {children}
    </span>
  );
};

const NavList = ({ title, links, className }: NavListProps) => {
  return (
    <div>
      <h3 className="text-accent-400 tracking-wide">{title.toUpperCase()}</h3>
      <ul className={cn("mt-3 flex flex-col gap-2", className)}>
        {links.map((link) => (
          <li key={link} className="text-sm">
            <NavLink>{link}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const navItems = [
    {
      title: "services",
      links: ["Bridal", "Ceremony", "Reception", "Full Event", "Bespoke"],
    },
    {
      title: "company",
      links: ["About Us", "Our Studio", "Sustainability", "Press", "Careers"],
    },
    {
      title: "contact",
      links: ["Begin an Enquiry", "Consultations", "contact@velvetandvine.com"],
    },
  ];

  return (
    <div className="relative pt-15 pb-7 px-[10%] text-neutral-50 bg-linear-to-r from-brand-900 to-brand-800">
      <div className="absolute left-0 top-0 h-px bg-neutral-50/20 w-full"></div>
      <div className="flex gap-[15%] grow">
        <div className="">
          <div className="font-brand text-3xl">VELVET &amp; VINE</div>
          <div className="mt-2 font-heading italic text-lg tracking-wider">
            Every petal placed with intention
          </div>
        </div>
        <div className="flex justify-between grow">
          {navItems.map((navItem) => (
            <NavList
              key={navItem.title}
              title={navItem.title}
              links={navItem.links}
            />
          ))}
        </div>
      </div>
      <p className="flex mt-15 gap-10">
        <NavLink>
          <EyebrowText>INSTAGRAM</EyebrowText>
        </NavLink>
        <NavLink>
          <EyebrowText>PINTEREST</EyebrowText>
        </NavLink>
        <NavLink>
          <EyebrowText>LINKEDIN</EyebrowText>
        </NavLink>
      </p>
      <div className="mt-15 h-px bg-neutral-50/40 w-full mx-auto"></div>
      <div className="mt-9 flex justify-between">
        <span>&copy; Velvet &amp; Vine. All Rights Reserved.</span>
        <div className="flex justify-center items-center gap-4">
          <NavLink>Privacy Policy</NavLink>
          <Dot className="size-0.5" />
          <NavLink>Terms of Service</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
