// Withdraw.js
import React, { useState } from "react";
import { withdrawRequest } from "./api";

export default function Withdraw({ user }) {
  const [upi, setUpi] = useState("");
  const [amount, setAmount] = useState("");

  function handleWithdraw() {
    if (!upi || !amount) {
      alert("⚠ Enter UPI & amount");
      return;
    }
    withdrawRequest(user.name, user.email, upi, amount);
    alert("✅ Withdraw Request Sent!");
    setUpi("");
    setAmount("");
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-2">Withdraw</h2>
      <input
        type="text"
        placeholder="Enter UPI"
        value={upi}
        onChange={(e) => setUpi(e.target.value)}
        className="border p-2 rounded mb-2 w-64"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded mb-2 w-64"
      />
      <button
        onClick={handleWithdraw}
        className="bg-red-500 text-white p-2 rounded w-64"
      >
        Request Withdraw
      </button>
    </div>
  );
}
