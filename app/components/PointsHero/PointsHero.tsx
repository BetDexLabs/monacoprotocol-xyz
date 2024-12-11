"use client";
import { FC } from "react";

export const PointsHero: FC = () => (
  <section className="section">
    <h1 className="text-subheading text-center">Monaco Protocol Points</h1>
    <h2 className="text-small text-center lg:max-w-[720px] xxl:max-w-[1200px] mx-auto">
      Monaco Protocol Points are your pass to exclusive promotions, bonuses, and
      rewards that the Monaco Protocol might offer!
    </h2>
    <p className="text-center text-xsmall mx-auto lg:max-w-3xl	 xxl:max-w-6xl">
      See Monaco Protocol Points{" "}
      <a
        className="text-link"
        href="https://docs.monacoprotocol.xyz/readme/points-terms-and-conditions"
        target="_blank"
      >
        Terms & Conditions
      </a>{" "}
      for full details.
    </p>
  </section>
);
