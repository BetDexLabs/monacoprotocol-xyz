import {
  Banner,
  BuildOnMonaco,
  Hero,
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
      <Banner caption="Learn more about building an application" />
    </main>
  );
}
