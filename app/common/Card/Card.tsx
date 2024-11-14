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
    className={`flex flex-col gap-4 p-4 bg-article-bg backdrop-blur-[60px] rounded-[30px] w-full md:p-8 md:gap-8 xxl:py-20 lg:max-w-[540px] xxl:px-6 xxl:gap-6 xxl:max-w-[600px] ${className}`}
  >
    {image}
    <h3 className="text-subheading">{title}</h3>
    <p className="text-small text-tertiary">{description}</p>
  </article>
);
