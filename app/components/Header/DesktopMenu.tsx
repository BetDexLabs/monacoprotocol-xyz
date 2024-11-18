import { ArrowDown, ArrowUp, RightArrow } from "@/icons";
import Link from "next/link";
import { useState } from "react";
import { MonacoLogo } from "./MonacoLogo";
import { navItems } from "./constants";

export const DesktopMenu = () => {
  const [openDropdownId, toggleDropdown] = useState<string | null>(null);

  const handleInnerItemClick = (id: string) => {
    if (id === openDropdownId) {
      toggleDropdown(null);
    } else {
      toggleDropdown(id);
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
          {navItems.map(({ id, label, href, innerItems }, i) => {
            const isCurrentSectionOpened = openDropdownId === id;
            return (
              i !== navItems.length - 1 && (
                <li key={`${label}-${i}`} className="relative">
                  {href ? (
                    <Link href={href}>
                      <div className="flex text-nav text-transition hover:text-active">
                        <span className="w-full inline-flex justify-center items-center gap-2.5">
                          {label}
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <div
                      className={`flex text-nav gap-3 text-transition hover:text-active ${isCurrentSectionOpened ? "text-active" : "text-primary"}`}
                      onClick={() => handleInnerItemClick(id)}
                    >
                      <span className="w-full inline-flex justify-center items-center">
                        {label}
                      </span>
                      {innerItems?.length && (
                        <div className="flex h-[24px] max-w-[18px] w-full items-end xxl:h-[26px] xxl:max-w-[22px]">
                          {isCurrentSectionOpened ? <ArrowUp /> : <ArrowDown />}
                        </div>
                      )}
                    </div>
                  )}
                  {innerItems?.length && isCurrentSectionOpened && (
                    <ul
                      className={`absolute top-full left-0 z-10 border rounded-lg border-border min-w-full w-max bg-dropdown-bg overflow-hidden mt-2 common-transition ${isCurrentSectionOpened ? "visible" : "invisible"}`}
                    >
                      {innerItems.map((innerItem, i) => (
                        <li
                          key={`${id}-${i}`}
                          className="bg-transition hover:bg-dropdown-active-bg"
                        >
                          <Link href={innerItem.href}>
                            <div className="flex gap-3.5 nav-dropdown px-4 py-5">
                              {innerItem.icon}
                              <span className="">{innerItem.title}</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            );
          })}
        </ul>
      </div>
      {contactTeamItem.href && (
        <div className="text-nav cursor-pointer">
          <Link href={contactTeamItem.href}>
            <span className="inline-flex items-center text-transition hover:text-active gap-2.5 xxl:gap-3">
              {contactTeamItem.label}{" "}
              <RightArrow className="h-[22px] w-auto xxl:h-[28px]" />
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};
