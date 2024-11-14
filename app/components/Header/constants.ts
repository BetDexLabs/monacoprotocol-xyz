import { emailLink } from "@/app/common";

interface NavItem {
  label: string;
  href: string;
  arrowRight?: boolean;
}

export const navItems: NavItem[] = [
  { label: "Use Cases", href: "/" },
  { label: "Developer Resources", href: "/" },
  { label: "Blog", href: "https://medium.com/@monacoprotocol" },
  { label: "Points", href: "https://www.monacoprotocol.xyz/points" },
  { label: "Roadmap", href: "/" },
  { label: "Contact team", href: emailLink, arrowRight: true },
];
