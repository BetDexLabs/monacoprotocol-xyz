"use client";
import { truncatePkString } from "@/app/utils/truncatePk";
import { FC } from "react";

interface PointsLeaderboardProps {
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

export const PointsLeaderboard: FC<PointsLeaderboardProps> = ({
  data,
  loading,
  error,
}: PointsLeaderboardProps) => {
  return (
    <section className="section">
      <h3 className="text-small text-left">Monaco Protocol Leaderboard</h3>
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
          {data?.map((wallet) => {
            return (
              <tr key={`table-row-${wallet.id}`}>
                <td className="table-cell text-left w-1 text-xsmall text-zinc-500">
                  {wallet.index}
                </td>
                <td className="table-cell text-left">
                  {truncatePkString(wallet.id)}
                </td>
                <td className="table-cell text-right">
                  {wallet.balance.toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
