import illustration1 from "@/public/tradingIntegrations/illustration1.png";
import illustration2 from "@/public/tradingIntegrations/illustration2.png";
import image1 from "@/public/tradingIntegrations/trading1.png";
import image2 from "@/public/tradingIntegrations/trading2.png";
import image3 from "@/public/tradingIntegrations/trading3.png";

import { StaticImageData } from "next/image";

type IntegrationProps = {
  icon: StaticImageData;
  title: string;
  description: string;
};

export const integrationArticles: IntegrationProps[] = [
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
      "Unlike other platforms which can restrict or ban winning bettors, the Monaco API allows you to trade without any risk of being banned or limited for being a winner.",
  },
  {
    icon: image3,
    title: "1% Commission fees, no premium charges",
    description:
      "Maximise your profits with our extremely competitive fee structure. At just 1% commission, you keep more of your winnings, allowing you to reinvest and grow your betting portfolio efficiently.",
  },
];

export const integrationImages = [illustration1, illustration2];
