"use client";
import { Card } from "@/app/common";
import Image from "next/image";
import { FC } from "react";
import { integrationArticles, integrationImages } from "./constants";

export const TradingIntegrations: FC = () => (
  <section className="section md:gap-12" id="trading-integrations">
    <h2 className="text-heading heading-dark text-center">
      Trading Integrations
    </h2>
    <div className="flex flex-col gap-8 md:gap-12 lg:flex-row">
      <div className="flex justify-center gap-4 max-w-full h-[58px] md:h-[130px] lg:flex-col lg:h-auto lg:ml-[-90px] lg:justify-evenly lg:py-12">
        {integrationImages.map((src, i) => (
          <Image
            key={`illustration-${i}`}
            src={src}
            alt={`Section illustration ${i}`}
            className="h-full w-auto object-contain"
          />
        ))}
      </div>
      <div className="flex flex-col gap-12 md:gap-16 xxl:gap-24">
        {integrationArticles.map(({ icon, ...integration }, i) => (
          <Card
            key={`trading-${i}`}
            image={
              <figure className="max-w-[50px] h-auto w-full md:max-w-[100px]">
                <Image src={icon} alt={`trading illustration ${i}`} />
              </figure>
            }
            className="lg:w-[600px]"
            {...integration}
          />
        ))}
      </div>
    </div>
  </section>
);
