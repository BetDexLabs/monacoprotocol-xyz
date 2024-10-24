interface NavItem {
  label: string;
  href: string;
  arrowRight?: boolean;
}

export const navItems: NavItem[] = [
  { label: "Use Cases", href: "/" },
  { label: "Developer Resources", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Points", href: "/" },
  { label: "Roadmap", href: "/" },
  { label: "Contact team", href: "/", arrowRight: true },
];
