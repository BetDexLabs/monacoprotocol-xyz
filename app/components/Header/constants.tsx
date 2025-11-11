import { emailLink } from "@/app/common";
import { BookSharp, ChartUp, Discord, SquareCode } from "@/icons";
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
    id: "use-case",
    label: "Use Cases",
    innerItems: [
      {
        icon: <ChartUp />,
        title: "Trading Integrations",
        href: "/#trading-integrations",
        anchorLink: true,
      },
      {
        icon: <SquareCode />,
        title: "Applications and Services",
        href: "/#applications-and-services",
        anchorLink: true,
      },
    ],
  },
  {
    id: "developer-resources",
    label: "Developer Resources",
    innerItems: [
      {
        icon: <BookSharp />,
        title: "Rest API Documentation",
        href: "https://docs.api.monacoprotocol.xyz",
        anchorLink: true,
      },
      {
        icon: <BookSharp />,
        title: "Stream API Documentation",
        href: "https://docs.api.monacoprotocol.xyz/stream/docs/websockets/",
        anchorLink: true,
      },
      {
        icon: <Discord />,
        title: "Discord",
        href: "https://discord.gg/8mR7bbBMP6",
        anchorLink: true,
      },
    ],
  },
];

export const contactItem: NavItem = {
  id: "contact-team",
  label: "Contact team",
  href: emailLink,
  arrowRight: true,
};
