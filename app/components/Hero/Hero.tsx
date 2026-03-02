"use client";
import { emailLink, LinkButton } from "@/app/common";
import { FC } from "react";

export const Hero: FC = () => (
  <section className="section bg-black">
    <h2 className="text-subheading heading-neutral text-center lg:max-w-[720px] xxl:max-w-[1200px] mx-auto">
      An international sports trading platform.
    </h2>
    <p className="text-center text-small mx-auto lg:max-w-3xl\t xxl:max-w-6xl">
      Access global sports liquidity, trade programmatically, build betting
      apps, and more!
    </p>
    <LinkButton href={emailLink} label="Contact team" align="center" />
  </section>
);
