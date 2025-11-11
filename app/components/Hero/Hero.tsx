"use client";
import { emailLink, LinkButton } from "@/app/common";
import { FC } from "react";

export const Hero: FC = () => (
  <section className="section">
    <h1 className="page-heading text-center">Monaco Protocol</h1>
    <h2 className="text-subheading heading-neutral text-center lg:max-w-[720px] xxl:max-w-[1200px] mx-auto">
      A world class, globally available liquidity pool for betting and
      prediction markets.
    </h2>
    <p className="text-center text-small mx-auto lg:max-w-3xl	 xxl:max-w-6xl">
      Bet directly into a{" "}
      <strong className="font-extrabold">global liquidity</strong> pool with{" "}
      <strong className="font-extrabold">no restrictions</strong>, build your
      own betting applications, create and settle betting markets, and more!
    </p>
    <LinkButton href={emailLink} label="Contact team" align="center" />
  </section>
);
