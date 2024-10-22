"use client";
import { LinkButton } from "@/app/common";
import { RightArrow } from "@/icons";
import Link from "next/link";
import { FC } from "react";

export const Hero: FC = () => (
  <section className="section">
    <h1 className="page-heading text-center">Monaco Protocol</h1>
    <h3 className="text-subheading-expanded heading-neutral text-center max-w-[1200px]">
      An open-sourced, transparent, and permissionless liquidity pool for
      betting and prediction markets.
    </h3>
    <p className="text-center max-w-6xl">
      Bet directly into a{" "}
      <strong className="font-extrabold">global liquidity</strong> pool with{" "}
      <strong className="font-extrabold">no restrictions</strong>, build your
      own betting applications, create and settle betting markets, and more!
    </p>
    <LinkButton href="" label="Contact team" align="center" />
    <Link href="/target-page" passHref>
      <div className="flex justify-center items-center gap-2.5">
        <p className="text-[16px] font-semibold max-w-[180px] md:max-w-full md:text-[20px] xxl:text-[24px]">
          Learn more about what you can build
        </p>
        <RightArrow />
      </div>
    </Link>
  </section>
);
