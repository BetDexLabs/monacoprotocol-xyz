"use client";

// import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => (
  <footer className="section pt-0 mt-10 pb-10 md:mt-14 md:pb-14 xxl:mt-24 xxl:pb-24 bg-black">
    <div className="flex flex-col text-footer gap-6">
      <p className="flex flex-wrap justify-center">
        <span>&copy; 2026 BetDEX. </span>
        <span>&nbsp;</span>
        <span>All rights reserved.</span>
      </p>
    </div>
  </footer>
);
