"use client";
import { Card } from "@/app/common";
import Image from "next/image";
import { FC } from "react";
import { benefits } from "./constants";

export const BuildOnMonaco: FC = () => (
  <section className="lg:relative">
    <div className="section">
      <h2 className="heading-dark text-heading text-center">
        What can you build on Monaco?
      </h2>
      <h3 className="text-subheading text-center">
        Applications and Services Sportsbooks and Sportsbetting exchanges
      </h3>

      <div className="flex flex-col gap-8 lg:gap-12 lg:flex-row">
        <div className="lg:absolute right-0 lg:h-[729px] lg:w-[638px] lg:z-10 xxl:w-[952px] xxl:h-[1222px]">
          <div className="relative w-full h-[390px] md:h-[729px] right-[-16px] md:right-[-36px] lg:right-0 lg:h-[729px] lg:w-[638px] xxl:w-[952px] xxl:h-[1222px]">
            <Image
              src="/buildOnMonaco/side-image.png"
              alt="Purebet & Betdex illustration"
              className="object-contain object-right"
              sizes="(max-width: 672px) 304px, (max-width: 1920px) 638px, 952px"
              fill
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {benefits.map(({ icon, ...benefit }, i) => (
            <Card
              key={`benefit-${i}`}
              image={
                <div className="w-auto h-[50px] md:h-[100px]">
                  <Image
                    src={icon.src}
                    alt="Benefit illustration"
                    width={icon.width}
                    height={icon.height}
                  />
                </div>
              }
              {...benefit}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);
