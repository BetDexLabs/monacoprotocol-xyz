import { RightArrow } from "@/icons";
import Link from "next/link";
import { useState } from "react";
import { MonacoLogo } from "./MonacoLogo";
import { navItems } from "./constants";

export const DesktopMenu = () => {
  const [innerDropdown, toggleInnerDropdown] = useState<string | null>(null);

  const handleInnerItemClick = (id: string) => {
    if (id === innerDropdown) {
      toggleInnerDropdown(null);
    } else {
      toggleInnerDropdown(id);
    }
  };

  const contactTeamItem = navItems[navItems.length - 1];

  return (
    <div
      className={
        "hidden lg:flex justify-between items-center gap-24 horizontal-padding py-9 xxl:py-12"
      }
    >
      <div className="flex gap-20 xxl:gap-24">
        <MonacoLogo />
        <ul className="flex gap-12 items-center">
          {navItems.map(
            ({ id, label, href, innerItems }, i) =>
              i !== navItems.length - 1 && (
                <li key={`${label}-${i}`}>
                  {href && (
                    <Link href={href}>
                      <div className="flex text-nav">
                        <span className="w-full inline-flex justify-center items-center gap-2.5">
                          {label}
                        </span>
                      </div>
                    </Link>
                  )}
                  {innerItems && (
                    <div
                      className="flex text-nav"
                      onClick={() => handleInnerItemClick(id)}
                    >
                      <span className="w-full inline-flex justify-center items-center gap-2.5">
                        {label}
                      </span>
                    </div>
                  )}
                </li>
              ),
          )}
        </ul>
      </div>
      {contactTeamItem.href && (
        <div className="text-nav cursor-pointer">
          <Link href={contactTeamItem.href}>
            <span className="inline-flex items-center md:gap-2.5">
              {contactTeamItem.label} <RightArrow className="w-[28px]" />
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};
