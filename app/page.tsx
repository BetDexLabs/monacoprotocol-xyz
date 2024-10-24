import {
  Banner,
  BuildOnMonaco,
  Ecosystem,
  Hero,
  OtherProducts,
  TradingIntegrations,
  TrustedBy,
} from "@/app/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <TradingIntegrations />
      <Banner caption="Learn more about trading on Monaco" />
      <BuildOnMonaco />
      <OtherProducts />
      <Banner caption="Learn more about building an application" />
      <Ecosystem />
    </main>
  );
}
