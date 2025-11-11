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
    title: "Ready To Use Betting Infrastructure",
    description:
      "Skip the headaches of building your own matching algorithms for a high frequency exchange. Focus on product innovation and user acquisition.",
  },
  {
    icon: {
      src: "/buildOnMonaco/benefit2.png",
      width: 100,
      height: 100,
    },
    title: "Global Liquidity Pool",
    description:
      "Users of Monaco products are able to tap into a global liquidity pool while maintaining custody of their funds.",
  },
  {
    icon: {
      src: "/buildOnMonaco/benefit3.png",
      width: 126,
      height: 100,
    },
    title: "Proven Monetization Strategies",
    description:
      "Leverage the protocol to create revenue streams. As an app developer you can set your own commission rate, allowing you to monetize from the trading that you facilitate.",
  },
];
