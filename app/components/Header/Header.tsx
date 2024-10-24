"use client";
import { BurgerMenu, Cross, RightArrow } from "@/icons";
import Link from "next/link";
import { FC, useState } from "react";
import { navItems } from "./constants";
import { MonacoLogo } from "./MonacoLogo";

export const Header: FC = () => {
  const [isBurgerMenuOpened, toggleBurgerMenu] = useState<boolean>(false);
  const contactTeamItem = navItems[navItems.length - 1];

  return (
    <header className="max-w-max-page mx-auto relative">
      <div
        className={`transition-transform duration-300 ease-in-out fixed z-10 top-0 left-0 w-full transform ${isBurgerMenuOpened ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} bg-main fixed w-full xxl:hidden`}
      >
        <div className="blurred-wrapper">
          <div className="flex justify-between items-center gap-24 horizontal-padding py-7 md:py-9">
            <MonacoLogo />
            <div
              className="md:hidden cursor-pointer"
              onClick={() => toggleBurgerMenu(false)}
            >
              <Cross size="small" />
            </div>
            <div
              className="hidden md:block xxl:hidden cursor-pointer "
              onClick={() => toggleBurgerMenu(false)}
            >
              <Cross />
            </div>
          </div>
          <div className="flex w-full horizontal-padding">
            <ul className="flex flex-col justify-center w-full pb-[36px] md:pb-[42px] gap-4">
              {navItems.map(({ label, href, arrowRight }, i) => (
                <li key={`${label}-${i}`} className="w-full">
                  <Link href={href}>
                    <div className="flex text-nav">
                      <span className="w-full inline-flex justify-center items-center gap-2 md:gap-2.5">
                        {label}{" "}
                        {arrowRight && (
                          <RightArrow className="w-[7px] md:w-[10px]" />
                        )}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={
          "flex justify-between items-center gap-24 horizontal-padding py-7 md:py-9 xxl:py-12"
        }
      >
        <div className="flex xxl:gap-24">
          <MonacoLogo />
          <ul className="hidden xxl:flex gap-12 items-center">
            {navItems.map(
              ({ label, href }, i) =>
                i !== navItems.length - 1 && (
                  <li key={`${label}-${i}`}>
                    <Link href={href}>
                      <span className="text-nav">{label}</span>
                    </Link>
                  </li>
                ),
            )}
          </ul>
        </div>
        <div
          className="md:hidden cursor-pointer "
          onClick={() => toggleBurgerMenu(true)}
        >
          <BurgerMenu size="small" />
        </div>
        <div
          className="hidden md:block xxl:hidden cursor-pointer "
          onClick={() => toggleBurgerMenu(true)}
        >
          <BurgerMenu />
        </div>
        <div className="hidden xxl:block text-nav cursor-pointer">
          <Link href={contactTeamItem.href}>
            <span className="inline-flex items-center md:gap-2.5">
              {contactTeamItem.label} <RightArrow className="w-[28px]" />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
