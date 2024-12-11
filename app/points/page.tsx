"use client";
import { PointsHero } from "@/app/components";
import { PointsLeaderboard } from "../components/PointsLeaderboard";
import { useEffect, useState } from "react";
import { YourPoints } from "../components/YourPoints";

export default function Home() {
  const [data, setData] = useState<
    {
      id: string;
      index: number;
      balance: number;
    }[]
  >([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchScript() {
      try {
        setLoading(true);
        const response = await fetch("/api/proxy"); // API route
        if (!response.ok) {
          throw new Error(`Failed to fetch script: ${response.statusText}`);
        }

        const scriptText = await response.text();

        // Safely evaluate the script (assuming it exports something as `wallets`)
        const scriptFunction = new Function(`${scriptText}; return wallets;`);
        const result: { [key: string]: { i: number; b: number } } =
          scriptFunction();

        // Transform the object into an array of objects and sort by `i` key
        const transformedWallets = Object.entries(result)
          .map(([id, { i, b }]) => ({
            id, // Wallet ID
            index: i, // Index
            balance: b, // Balance
          }))
          .sort((a, b) => a.index - b.index); // Sort by `i` (index) in ascending order

        // Store the transformed data in state
        setData(transformedWallets);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.warn(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchScript();
  }, []);

  return (
    <main>
      <PointsHero />
      <YourPoints data={data} loading={loading} error={error} />
      <PointsLeaderboard
        data={data.slice(0, 10)}
        loading={loading}
        error={error}
      />
    </main>
  );
}
