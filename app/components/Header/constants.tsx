import { emailLink } from "@/app/common";
import { ReactNode } from "react";

interface NavItem {
  id: string;
  label: string;
  href?: string;
  arrowRight?: boolean;
  newTab?: boolean;
  innerItems?: {
    icon: ReactNode;
    title: string;
    href: string;
    anchorLink?: boolean;
  }[];
}

export const navItems: NavItem[] = [
  {
    id: "rest-api-docs",
    label: "BetDEX API Docs",
    href: "https://docs.api.monacoprotocol.xyz/",
  },
  {
    id: "stream-api-docs",
    label: "Stream API Docs",
    href: "https://docs.api.monacoprotocol.xyz/stream/docs/websockets/",
  },
  {
    id: "discord",
    label: "Discord",
    href: "https://discord.gg/8mR7bbBMP6",
  },
];

export const contactItem: NavItem = {
  id: "contact-team",
  label: "Contact team",
  href: emailLink,
};
