"use client";
import { BurgerMenu } from "@/icons";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-max-page mx-auto gap-24 horizontal-padding py-7 md:py-9 xxl:py-12">
      <div className="flex xxl:gap-24">
        <Image
          className="hidden xxl:block"
          src="/monaco-icon.png"
          width={88}
          height={67}
          alt="The Monaco Protocol icon"
        />
        <div className="max-w-8 md:max-w-12 xxl:hidden">
          <Image
            className="w-100"
            src="/monaco-icon-mobile.png"
            width={48}
            height={46}
            alt="The Monaco Protocol icon"
          />
        </div>
        <ul className="hidden xxl:flex gap-12 items-center text-nav">
          <li>
            <Link href="">
              <span>Use Cases</span>
            </Link>
          </li>
          <li>
            <Link href="">
              <span>Developer Resources</span>
            </Link>
          </li>
          <li>
            <Link href="">
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link href="">
              <span>Points</span>
            </Link>
          </li>
          <li>
            <Link href="">
              <span>Roadmap</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden text-nav pointer">
        <BurgerMenu size="small" />
      </div>
      <div className="hidden md:block xxl:hidden text-nav pointer">
        <BurgerMenu size="default" />
      </div>
      <div className="hidden xxl:block text-nav pointer">
        <Link href="">Contact team</Link>
      </div>
    </header>
  );
};
