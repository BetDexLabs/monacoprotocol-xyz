import { Banner, Hero, TradingIntegrations, TrustedBy } from "@/app/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <TradingIntegrations />
      <Banner caption="Learn more about trading on Monaco" />
    </main>
  );
}
