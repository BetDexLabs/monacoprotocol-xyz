"use client";
import { FC, useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const Header: FC = () => {
  const [isBurgerMenuOpened, toggleBurgerMenu] = useState<boolean>(false);

  const openBurgerMenu = () => {
    toggleBurgerMenu(true);
    document.body.style.overflow = "hidden";
  };
  const closeBurgerMenu = () => {
    toggleBurgerMenu(false);
    document.body.style.overflow = "auto";
  };

  return (
    <header className="max-w-max-page mx-auto relative">
      <DesktopMenu />
      <MobileMenu handleBurgerMenuClick={openBurgerMenu} />
      <BurgerMenu
        handleClose={closeBurgerMenu}
        isVisible={isBurgerMenuOpened}
      />
    </header>
  );
};
