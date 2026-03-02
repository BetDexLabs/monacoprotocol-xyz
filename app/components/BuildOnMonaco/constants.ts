type IntegrationProps = {
  icon: {
    src: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
};

export const benefits: IntegrationProps[] = [
  {
    icon: {
      src: "/buildOnMonaco/benefit1.png",
      width: 100,
      height: 100,
    },
    title: "Access Global Sports Markets",
    description:
      "Bring more liquidity to your users, manage & off-load exposure programmatically, integrate directly into your trading stack",
  },
  {
    icon: {
      src: "/buildOnMonaco/benefit2.png",
      width: 100,
      height: 100,
    },
    title: "Ready To Use Infrastructure",
    description:
      "API-first architecture built to handle global, in-play volatility at institutional speeds",
  },
  {
    icon: {
      src: "/buildOnMonaco/benefit3.png",
      width: 126,
      height: 100,
    },
    title: "Built for the International Markets",
    description:
      "Crypto-friendly settlement, credit relationships, white-label skins, agent systems & more",
  },
];
