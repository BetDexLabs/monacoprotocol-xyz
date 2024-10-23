import { Hero, TrustedBy } from "@/app/components";
import { TradingIntegrations } from "./components/TradingIntegrations";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <TradingIntegrations />
    </main>
  );
}
