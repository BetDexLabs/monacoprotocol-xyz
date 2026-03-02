"use client";
import { FC } from "react";

type ButtonProps = {
  variant?: "dark" | "light";
  label: string;
  mobileLabel?: string;
  href: string;
  align?: "left" | "center" | "right";
};

export const LinkButton: FC<ButtonProps> = ({
  variant = "dark",
  label,
  mobileLabel,
  href,
  align = "left",
}) => {
  // Use Betdex purple for dark variant
  const styles = `${
    variant === "dark"
      ? "bg-betdex-purple text-white hover:bg-[#6d28d9]"
      : "bg-white text-betdex-purple border border-betdex-purple"
  } text-small tracking-normal rounded-full py-1.5 px-7 font-semibold cursor-pointer md:py-2.5 md:px-9 xxl:py-[18px] xxl:px-[68px] transition-colors`;

  const wrapStyles = `flex justify-${align}`;

  return (
    <a href={href} className={wrapStyles}>
      <button className={`${styles} hidden md:block`}>{label}</button>
      <button className={`${styles} md:hidden`}>{mobileLabel || label}</button>
    </a>
  );
};
