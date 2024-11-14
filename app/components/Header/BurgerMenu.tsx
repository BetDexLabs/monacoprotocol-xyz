import { Cross, RightArrow } from "@/icons";
import Link from "next/link";
import { FC } from "react";
import { MonacoLogo } from "./MonacoLogo";
import { navItems } from "./constants";

type BurgerMenuProps = {
  isVisible: boolean;
  handleClose: () => void;
};

export const BurgerMenu: FC<BurgerMenuProps> = ({ isVisible, handleClose }) => (
  <div
    className={`transition-transform duration-300 ease-in-out fixed z-10 top-0 left-0 w-full transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} bg-main fixed w-full lg:hidden`}
  >
    <div className="blurred-wrapper">
      <div className="flex justify-between items-center gap-24 horizontal-padding py-7 md:py-9">
        <MonacoLogo />
        <div className="md:hidden cursor-pointer" onClick={handleClose}>
          <Cross size="small" />
        </div>
        <div className="hidden md:block cursor-pointer " onClick={handleClose}>
          <Cross />
        </div>
      </div>
      <div className="flex w-full horizontal-padding">
        <ul className="flex flex-col justify-center w-full pb-[36px] md:pb-[42px] gap-4">
          {navItems.map(({ id, label, href, arrowRight, innerItems }) => (
            <li key={id} className="w-full">
              {href && (
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
              )}
              {innerItems && (
                <div className="flex text-nav" onClick={() => {}}>
                  <span className="w-full inline-flex justify-center items-center gap-2 md:gap-2.5">
                    {label}{" "}
                    {arrowRight && (
                      <RightArrow className="w-[7px] md:w-[10px]" />
                    )}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
