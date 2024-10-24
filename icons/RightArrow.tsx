import { FC } from "react";
import { IconProps } from "./type";

export const RightArrow: FC<IconProps> = ({ className }) => (
  <svg
    width="13"
    height="24"
    viewBox="0 0 13 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12.8501 12C12.8509 12.4573 12.7613 12.9103 12.5865 13.3328C12.4116 13.7554 12.155 14.1393 11.8314 14.4623L2.61227 23.6797L0.149902 21.2173L9.36725 12L0.149901 2.78264L2.61227 0.320269L11.8296 9.53761C12.1536 9.86055 12.4105 10.2443 12.5857 10.6669C12.7608 11.0895 12.8507 11.5425 12.8501 12Z"
      fill="currentColor"
    />
  </svg>
);
