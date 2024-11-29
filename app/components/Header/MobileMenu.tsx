import { BurgerMenu } from "@/icons";
import { FC } from "react";
import { MonacoLogo } from "./MonacoLogo";

type MobileMenuProps = {
  handleBurgerMenuClick: () => void;
};

export const MobileMenu: FC<MobileMenuProps> = ({ handleBurgerMenuClick }) => (
  <div
    className={
      "flex lg:hidden justify-between items-center gap-24 horizontal-padding py-7 md:py-9"
    }
  >
    <MonacoLogo />
    <div className="md:hidden cursor-pointer" onClick={handleBurgerMenuClick}>
      <BurgerMenu size="small" />
    </div>
    <div
      className="hidden md:block cursor-pointer"
      onClick={handleBurgerMenuClick}
    >
      <BurgerMenu />
    </div>
  </div>
);
