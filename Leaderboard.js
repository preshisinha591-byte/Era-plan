// Leaderboard.js
import React, { useEffect, useState } from "react";
import { GOOGLE_SHEET_URL } from "./api";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchLeaderboard() {
      const res = await fetch(`${GOOGLE_SHEET_URL}?action=leaderboard`);
      const data = await res.json();
      setUsers(data || []);
    }
    fetchLeaderboard();
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-2">Leaderboard</h2>
      <ol className="list-decimal w-64">
        {users.map((u, index) => (
          <li key={index}>
            {u.name} - {u.coins} Coins
          </li>
        ))}
      </ol>
    </div>
  );
}
