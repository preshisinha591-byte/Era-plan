// Profile.js
import React from "react";

export default function Profile({ user, coins }) {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-2">Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Coins: {coins}</p>
    </div>
  );
}
