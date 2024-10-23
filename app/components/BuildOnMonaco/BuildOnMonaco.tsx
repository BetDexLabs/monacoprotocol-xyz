"use client";
import Image from "next/image";
import { FC } from "react";
import { benefits } from "./constants";

export const BuildOnMonaco: FC = () => (
  <section className="xxl:relative">
    <div className="section">
      <h2 className="heading-dark text-heading text-center">
        What can you build on Monaco?
      </h2>
      <h3 className="text-subheading text-center">
        Applications and Services Sportsbooks and Sportsbetting exchanges
      </h3>

      <div className="flex flex-col gap-8 xxl:gap-12 xxl:flex-row">
        <div className="xxl:absolute right-0 xxl:w-[952px] xxl:h-[1222px] xxl:z-10">
          <div className="relative w-full h-[390px] md:h-[729px] right-[-16px] md:right-[-36px] xxl:right-0 xxl:w-[952px] xxl:h-[1222px]">
            <Image
              src="/buildOnMonaco/side-image.png"
              alt="Purebet & Betdex illustration"
              objectFit="contain"
              objectPosition="right"
              fill
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {benefits.map(({ icon, title, description }, i) => (
            <article
              key={`benefit-${i}`}
              className="flex flex-col gap-4 p-4 bg-article-bg backdrop-blur-[60px] rounded-[30px] md:p-8 md:gap-8 xxl:py-20 xxl:max-w-[600px] xxl:w-full xxl:px-6 xxl:gap-6"
            >
              <div className="relative h-[50px] md:h-[100px]">
                <Image
                  src={icon}
                  alt="Buils with Monaco illustration"
                  objectFit="contain"
                  objectPosition="left"
                  fill
                />
              </div>
              <h3 className="text-subheading">{title}</h3>
              <p className="text-small text-tertiary">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
