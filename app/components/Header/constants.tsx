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
  innerItems?: { icon: ReactNode; title: string; href: string }[];
}

export const navItems: NavItem[] = [
  {
    id: "use-case",
    label: "Use Cases",
    innerItems: [
      {
        icon: <ChartUp />,
        title: "Trading Integrations",
        href: "#trading-integrations",
      },
      {
        icon: <SquareCode />,
        title: "Applications and Services",
        href: "#applications-and-services",
      },
    ],
  },
  {
    id: "developer-resources",
    label: "Developer Resources",
    innerItems: [
      {
        icon: <BookSharp />,
        title: "Protocol Docs",
        href: "https://docs.monacoprotocol.xyz",
      },
      {
        icon: <Github />,
        title: "GitHub",
        href: "https://github.com/MonacoProtocol",
      },
      {
        icon: <Discord />,
        title: "Discord",
        href: "https://discord.gg/8mR7bbBMP6",
      },
      {
        icon: <Twitter />,
        title: "Twitter",
        href: "https://twitter.com/MonacoProtocol",
      },
    ],
  },
  { id: "blog", label: "Blog", href: "https://medium.com/@monacoprotocol" },
  {
    id: "points",
    label: "Points",
    href: "https://www.monacoprotocol.xyz/points",
  },
  {
    id: "roadmap",
    label: "Roadmap",
    href: "https://app.gitbook.com/o/QXqMMSlR6dqssLlaKHzO/s/Vfpc0TGdiWkYLfDmsn6Y/readme/the-roadmap",
  },
  {
    id: "contact-team",
    label: "Contact team",
    href: emailLink,
    arrowRight: true,
  },
];
