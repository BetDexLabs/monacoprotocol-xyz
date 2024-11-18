import { ArrowDown, ArrowUp, Cross } from "@/icons";
import Link from "next/link";
import { FC, useState } from "react";
import { navItems } from "./constants";

type BurgerMenuProps = {
  isVisible: boolean;
  handleClose: () => void;
};

export const BurgerMenu: FC<BurgerMenuProps> = ({ isVisible, handleClose }) => {
  const [openedDropdowns, toggleDropdown] = useState<string[]>([]);

  const handleInnerItemClick = (id: string) => {
    if (openedDropdowns.includes(id)) {
      toggleDropdown((prev) => prev.filter((item) => item !== id));
    } else {
      toggleDropdown((prev) => [...prev, id]);
    }
  };

  return (
    <div
      className={`absolute z-50 top-0 left-0 h-screen w-full transform transition-transform duration-30 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} lg:hidden`}
    >
      <div className="bg-nav-bg-mobile h-full w-full overflow-scroll">
        <div className="flex justify-end horizontal-padding py-6">
          <div className="md:hidden cursor-pointer" onClick={handleClose}>
            <Cross size="small" />
          </div>
          <div className="hidden md:block cursor-pointer" onClick={handleClose}>
            <Cross />
          </div>
        </div>
        <div className="flex w-full horizontal-padding">
          <ul className="flex flex-col w-full pb-6 gap-6 pr-1">
            {navItems.map(({ id, label, href, innerItems }) => {
              const isCurrentSectionOpened = openedDropdowns.includes(id);

              return (
                <li key={id} className="w-full">
                  {href ? (
                    <Link href={href}>
                      <div className="flex text-nav">
                        <span>{label}</span>
                      </div>
                    </Link>
                  ) : (
                    <div
                      className="flex text-nav gap-3 justify-between"
                      onClick={() => handleInnerItemClick(id)}
                    >
                      <span>{label}</span>
                      {innerItems?.length && (
                        <div className="flex h-[24px] max-w-[12px] w-full items-center">
                          {isCurrentSectionOpened ? <ArrowUp /> : <ArrowDown />}
                        </div>
                      )}
                    </div>
                  )}
                  {innerItems?.length && isCurrentSectionOpened && (
                    <ul className="pt-3.5">
                      {innerItems.map((innerItem, i) => (
                        <li
                          key={`${id}-${i}`}
                          className="bg-transition hover:bg-dropdown-active-bg"
                        >
                          <Link href={innerItem.href}>
                            <div className="flex gap-3.5 nav-dropdown py-3">
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
      </div>
    </div>
  );
};
