import monacoMobile from "@/public/monaco-icon-mobile.png";
import monacoDesktop from "@/public/monaco-icon.png";

import Image from "next/image";
import { FC } from "react";

export const MonacoLogo: FC = () => (
  <>
    <Image
      className="hidden xxl:block"
      src={monacoDesktop}
      width={88}
      height={67}
      alt="The Monaco Protocol icon"
    />
    <div className="w-8 h-auto md:w-12 xxl:hidden">
      <Image
        className="w-full"
        src={monacoMobile}
        alt="The Monaco Protocol icon"
      />
    </div>
  </>
);
