import { emailLink } from "@/app/common";
import {
  BookSharp,
  ChartUp,
  Discord,
  Github,
  SquareCode,
  Twitter,
} from "@/icons";
import { ReactNode } from "react";

interface NavItem {
  id: string;
  label: string;
  href?: string;
  arrowRight?: boolean;
  innerItems?: { icon: ReactNode; title: string }[];
}

export const navItems: NavItem[] = [
  {
    id: "use-case",
    label: "Use Cases",
    innerItems: [
      { icon: <ChartUp />, title: "Trading Integrations" },
      { icon: <SquareCode />, title: "Applications and Services" },
    ],
  },
  {
    id: "developer-resources",
    label: "Developer Resources",
    innerItems: [
      { icon: <BookSharp />, title: "Protocol Docs" },
      { icon: <Github />, title: "GitHub" },
      { icon: <Discord />, title: "Discord" },
      { icon: <Twitter />, title: "Twitter" },
    ],
  },
  { id: "blog", label: "Blog", href: "https://medium.com/@monacoprotocol" },
  {
    id: "points",
    label: "Points",
    href: "https://www.monacoprotocol.xyz/points",
  },
  { id: "roadmap", label: "Roadmap", href: "/" },
  {
    id: "contact-team",
    label: "Contact team",
    href: emailLink,
    arrowRight: true,
  },
];
