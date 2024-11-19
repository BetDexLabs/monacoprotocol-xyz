"use client";

import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => (
  <footer className="section py-0 my-10 md:my-14 xxl:my-24">
    <div className="flex flex-col text-footer gap-6">
      <p className="flex flex-wrap justify-center">
        <span>© 2024 Monaco Protocol Foundation. </span>
        <span>&nbsp;</span>
        <span>All rights reserved.</span>
      </p>
      <p className="text-center text-link">
        <Link href="https://docs.monacoprotocol.xyz/readme/terms-of-service">
          Terms of Service
        </Link>
        &nbsp;&nbsp;
        <Link href="https://docs.monacoprotocol.xyz/readme/privacy-notice">
          Privacy Notice
        </Link>
      </p>
    </div>
  </footer>
);
