import { Banner, BuildOnMonaco, Hero } from "@/app/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <BuildOnMonaco />
      <Banner caption="Learn more about building an application" />
    </main>
  );
}
