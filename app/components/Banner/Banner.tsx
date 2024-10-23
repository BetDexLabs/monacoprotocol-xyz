"use client";
import { LinkButton } from "@/app/common";
import { RightArrow } from "@/icons";
import { FC } from "react";

type BannerProps = {
  caption: string;
  mobileCaption?: string;
};

export const Banner: FC<BannerProps> = ({ caption }) => (
  <section className="section py-[38px]">
    <div className="flex flex-col p-5 gap-5 bg-accent rounded-[20px] md:p-8 md:gap-8 md:rounded-[30px] xxl:flex-row xxl:justify-between xxl:gap-14 xxl:p-14">
      <div className="flex items-center md:gap-6">
        <h3 className="text-caption">{caption}</h3>
        <RightArrow className="hidden md:block" />
      </div>
      <LinkButton
        href=""
        label="Contact team"
        mobileLabel="Contact Our team"
        variant="light"
      />
    </div>
  </section>
);
