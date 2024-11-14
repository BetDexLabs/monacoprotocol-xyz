import monacoMobile from "@/public/monaco-icon-mobile.png";
import monacoDesktop from "@/public/monaco-icon.png";

import Image from "next/image";
import { FC } from "react";

export const MonacoLogo: FC = () => (
  <>
    <div className="hidden h-auto w-[54px] xxl:w-[88px] lg:block">
      <Image
        className="w-full"
        src={monacoDesktop}
        alt="The Monaco Protocol icon"
      />
    </div>
    <div className="w-8 h-auto md:w-12 lg:hidden">
      <Image
        className="w-full"
        src={monacoMobile}
        alt="The Monaco Protocol icon"
      />
    </div>
  </>
);
