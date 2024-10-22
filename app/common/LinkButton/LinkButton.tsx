"use client";
import Link from "next/link";
import { FC } from "react";

type ButtonProps = {
  variant?: "dark" | "light";
  label: string;
  href: string;
  align?: "left" | "center" | "right";
};

export const LinkButton: FC<ButtonProps> = ({
  variant = "dark",
  label,
  href,
  align = "left",
}) => {
  const styles = `${
    variant === "dark" ? "bg-accent text-supportive" : "bg-white text-secondary"
  } tracking-normal rounded-full py-1.5 px-7 font-semibold pointer md:py-2.5 md:px-9 xxl:py-4 xxl:px-16`;

  const wrapStyles = `flex justify-${align}`;

  return (
    <Link href={href} className={wrapStyles}>
      <button className={styles}>{label}</button>
    </Link>
  );
};
