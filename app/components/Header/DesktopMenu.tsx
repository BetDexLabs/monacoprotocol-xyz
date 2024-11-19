import { useOutsideClick } from "@/hooks/useOutSideClick";
import { ArrowDown, ArrowUp, RightArrow } from "@/icons";
import Link from "next/link";
import { useState } from "react";
import { MonacoLogo } from "./MonacoLogo";
import { contactItem, navItems } from "./constants";

export const DesktopMenu = () => {
  const [openDropdownId, toggleDropdown] = useState<string | null>(null);

  const outsideClickRef = useOutsideClick(() => {
    toggleDropdown(null);
  });

  const handleDropdownSectionClick = (id: string) => {
    if (id === openDropdownId) {
      toggleDropdown(null);
    } else {
      toggleDropdown(id);
    }
  };

  return (
    <div
      className={
        "hidden lg:flex justify-between items-center gap-24 horizontal-padding py-9 xxl:py-12"
      }
    >
      <div className="flex gap-20 xxl:gap-24">
        <Link href="/">
          <MonacoLogo />
        </Link>
        <ul className="flex gap-12 items-center">
          {navItems.map(({ id, label, href, innerItems }, i) => {
            const isCurrentSectionOpened = openDropdownId === id;
            return (
              <li key={`${label}-${i}`} className="relative">
                {href ? (
                  <Link href={href}>
                    <div className="flex text-nav text-transition hover:text-active">
                      <span>{label}</span>
                    </div>
                  </Link>
                ) : (
                  <div
                    className={`flex text-nav gap-3 text-transition hover:text-active ${isCurrentSectionOpened ? "text-active" : "text-primary"}`}
                    onClick={() => handleDropdownSectionClick(id)}
                  >
                    <span>{label}</span>
                    {innerItems?.length && (
                      <div className="flex h-[24px] max-w-[18px] w-full items-end xxl:h-[26px] xxl:max-w-[22px]">
                        {isCurrentSectionOpened ? <ArrowUp /> : <ArrowDown />}
                      </div>
                    )}
                  </div>
                )}
                {innerItems?.length && isCurrentSectionOpened && (
                  <ul
                    className={`absolute top-full left-0 z-10 border rounded-lg border-border min-w-full w-max bg-dropdown-bg overflow-hidden mt-2 xxl:mt-6 common-transition ${isCurrentSectionOpened ? "visible" : "invisible"}`}
                    ref={outsideClickRef}
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
            );
          })}
        </ul>
      </div>
      {contactItem.href && (
        <div className="text-nav cursor-pointer">
          <a href={contactItem.href}>
            <span className="inline-flex items-center text-transition hover:text-active gap-2.5 xxl:gap-3">
              {contactItem.label}{" "}
              <RightArrow className="h-[22px] w-auto xxl:h-[28px]" />
            </span>
          </a>
        </div>
      )}
    </div>
  );
};
