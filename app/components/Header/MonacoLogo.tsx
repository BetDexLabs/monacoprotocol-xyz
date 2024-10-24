import Image from "next/image";
import { FC } from "react";

export const MonacoLogo: FC = () => (
  <>
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
  </>
);
