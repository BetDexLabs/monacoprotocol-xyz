"use client";
import { truncatePkString } from "@/app/utils/truncatePk";
import { FC, useState } from "react";

interface YourPointsProps {
  data:
    | {
        id: string;
        index: number;
        balance: number;
      }[]
    | null;
  loading: boolean;
  error: string | null;
}

export const YourPoints: FC<YourPointsProps> = ({
  data,
  loading,
  error,
}: YourPointsProps) => {
  const [searchResult, setSearchResult] = useState<{
    id: string;
    index: number;
    balance: number;
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm) {
      return;
    }
    const result = data?.find((wallet) => wallet.id === searchTerm);
    setSearchResult(result || null);
    setSearchTerm("");
    setHasSearched(true);
  };

  return (
    <section className="points-section">
      <form className="check-balance-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(val) => setSearchTerm(val.target.value)}
          placeholder="Enter your wallet ID"
          className="text-input text-small"
        />
        <button type="submit" className="submit-button">
          Check balance
        </button>
      </form>
      <h3 className="text-small text-left">Your Monaco Protocol Points</h3>
      <table>
        <thead className="table-head">
          <tr>
            <th className="table-cell text-left w-1 text-zinc-500 text-xsmall">
              #
            </th>
            <th className="table-cell text-left text-zinc-500 text-xsmall">
              Wallet
            </th>
            <th className="table-cell text-right text-zinc-500 text-xsmall">
              Monaco Points
            </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {loading && (
            <tr>
              <td colSpan={3} className="table-cell text-center">
                Loading...
              </td>
            </tr>
          )}
          {error && (
            <tr>
              <td colSpan={3} className="table-cell text-center">
                {error}
              </td>
            </tr>
          )}
          {data && hasSearched && searchResult ? (
            <tr key={`table-row-${searchResult.id}`}>
              <td className="table-cell text-left w-1 text-xsmall text-zinc-500">
                {searchResult.index}
              </td>
              <td className="table-cell text-left">
                {truncatePkString(searchResult.id)}
              </td>
              <td className="table-cell text-right">
                {searchResult.balance.toLocaleString()}
              </td>
            </tr>
          ) : data && hasSearched && !searchResult ? (
            <tr>
              <td colSpan={3} className="table-cell text-center text-zinc-500">
                Wallet not found
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan={3} className="table-cell text-center text-zinc-500">
                Enter ID above to view your points
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};
