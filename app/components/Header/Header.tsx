"use client";
import { FC, useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const Header: FC = () => {
  const [isBurgerMenuOpened, toggleBurgerMenu] = useState<boolean>(false);

  const openBurgerMenu = () => toggleBurgerMenu(true);
  const closeBurgerMenu = () => toggleBurgerMenu(false);

  return (
    <header className="max-w-max-page mx-auto relative">
      <BurgerMenu
        handleClose={closeBurgerMenu}
        isVisible={isBurgerMenuOpened}
      />
      <DesktopMenu />
      <MobileMenu handleBurgerMenuClick={openBurgerMenu} />
    </header>
  );
};
