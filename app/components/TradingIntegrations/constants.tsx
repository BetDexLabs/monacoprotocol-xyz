import image1 from "@/public/tradingIntegrations/trading1.png";
import image2 from "@/public/tradingIntegrations/trading2.png";
import image3 from "@/public/tradingIntegrations/trading3.png";
import image4 from "@/public/tradingIntegrations/trading4.png";
import { StaticImageData } from "next/image";

type IntegrationProps = {
  icon: StaticImageData;
  title: string;
  description: string;
};

export const integrations: IntegrationProps[] = [
  {
    icon: image1,
    title: "Trade anywhere in the world with no restrictions",
    description:
      "Experience the freedom of a global trading platform where geographical boundaries no longer limit your betting opportunities.",
  },
  {
    icon: image2,
    title: "Winners Welcome",
    description:
      "Unlike other platforms which can restrict or ban winning bettors, Monaco's decentralized protocol allows you to trade without any risk of being banned or limited for being a winner.",
  },
  {
    icon: image3,
    title: "1% Commission fees, no premium charges",
    description:
      "Maximise your profits with our extremely competitive fee structure. At just 1% commission, you keep more of your winnings, allowing you to reinvest and grow your betting portfolio efficiently.",
  },
  {
    icon: image4,
    title: "Maintain Privacy",
    description:
      "With Monaco, you can trade directly into a permissionless liquidity pool with no KYC.",
  },
];
