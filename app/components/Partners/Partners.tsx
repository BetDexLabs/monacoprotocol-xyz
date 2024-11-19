import Image from "next/image";
import { FC } from "react";

export const Partners: FC = () => (
  <section className="blurred-section">
    <div className="section xxl:gap-10">
      <h3 className="heading-dark text-subheading text-center">
        Powered by Solana, audited by Sec3
      </h3>
      <div className="flex flex-col gap-8 items-center justify-center md:flex-row md:gap-20">
        <div className="w-[166px] h-auto md:w-[202px] xxl:w-[350px]">
          <Image src="/solana.png" alt="Solana logo" width={350} height={52} />
        </div>
        <div className="w-[100px] h-auto xxl:w-[150px]">
          <Image src="/sec3.png" alt="Sec3 logo" width={150} height={150} />
        </div>
      </div>
    </div>
  </section>
);
