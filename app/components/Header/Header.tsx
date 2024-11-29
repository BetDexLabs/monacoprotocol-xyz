"use client";
import { FC, useEffect, useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const Header: FC = () => {
  const [isBurgerMenuOpened, toggleBurgerMenu] = useState<boolean>(false);

  useEffect(() => {
    if (isBurgerMenuOpened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isBurgerMenuOpened]);

  const openBurgerMenu = () => toggleBurgerMenu(true);
  const closeBurgerMenu = () => toggleBurgerMenu(false);

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
