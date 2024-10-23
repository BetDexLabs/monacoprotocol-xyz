import Image from "next/image";
import { FC } from "react";
import { integrations } from "./constants";

export const TradingIntegrations: FC = () => (
  <section className="section">
    <h2 className="text-heading heading-dark text-center">
      Trading Integrations
    </h2>
    <div className="flex flex-col gap-12 md:gap-16 xxl:gap-24">
      {integrations.map(({ icon, title, description }, i) => (
        <article
          key={`trading-${i}`}
          className="flex flex-col gap-4 md:gap-7 xxl:flex-row xxl:gap-24"
        >
          <figure className="max-w-[50px] h-auto w-full md:max-w-[100px]">
            <Image
              src={icon}
              alt={`trading illustration ${i}`}
              width={100}
              height={100}
            />
          </figure>
          <div className="flex flex-col gap-4 md:gap-7 xxl:gap-8">
            <h3 className="text-subheading">{title}</h3>
            <p className="text-tertiary">{description}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
