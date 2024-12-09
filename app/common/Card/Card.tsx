import { FC, ReactNode } from "react";

type CardProps = {
  image: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export const Card: FC<CardProps> = ({
  image,
  title,
  description,
  className,
}) => (
  <article
    className={`flex flex-col gap-4 p-4 bg-article-bg backdrop-blur-[60px] rounded-[30px] w-full md:px-6 md:gap-6 lg:max-w-[540px] xxl:py-10  xxl:max-w-[600px] ${className}`}
  >
    {image}
    <h3 className="text-subheading">{title}</h3>
    <p className="text-small text-tertiary">{description}</p>
  </article>
);
