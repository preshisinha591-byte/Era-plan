// Earn.js
import React, { useState } from "react";
import { AdMobBanner, AdMobRewarded } from "expo-ads-admob";
import { updateCoins } from "./api";

export default function Earn({ user, coins, setCoins }) {
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  async function watchAd() {
    await AdMobRewarded.setAdUnitID("ca-app-pub-5281362250015353/6087442642");
    await AdMobRewarded.requestAdAsync({ servePersonalizedAds: true });
    await AdMobRewarded.showAdAsync();
    AdMobRewarded.addEventListener("rewardedVideoUserDidEarnReward", () => {
      const newCoins = coins + 10;
      updateCoins(user.email, newCoins);
      setCoins(newCoins);
      alert("🎉 10 Coins Added!");
    });
  }

  function spinWheel() {
    const randomCoins = Math.floor(Math.random() * 31); // 0 to 30 coins
    const newCoins = coins + randomCoins;
    updateCoins(user.email, newCoins);
    setCoins(newCoins);
    alert(`🎡 You got ${randomCoins} coins!`);
  }

  function solveCaptcha() {
    if (parseInt(captchaAnswer) === 5) {
      const newCoins = coins + 10;
      updateCoins(user.email, newCoins);
      setCoins(newCoins);
      alert("✅ Correct! 10 Coins Added");
      setCaptchaAnswer("");
    } else {
      alert("❌ Wrong Answer");
    }
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-2">Hello {user.name}</h2>

      {/* Earn Boxes */}
      <div className="w-64 p-4 bg-white shadow-lg rounded-xl mb-4 text-center">
        <h3 className="font-semibold mb-2">🎡 Spin the Wheel</h3>
        <AdMobBanner
          bannerSize="banner"
          adUnitID="ca-app-pub-5281362250015353/5069820541"
          servePersonalizedAds
        />
        <button
          onClick={spinWheel}
          className="bg-green-500 text-white p-2 rounded mt-2"
        >
          Spin Now
        </button>
      </div>

      <div className="w-64 p-4 bg-white shadow-lg rounded-xl mb-4 text-center">
        <h3 className="font-semibold mb-2">🔢 Captcha: 2 + 3 = ?</h3>
        <input
          type="number"
          placeholder="Answer"
          value={captchaAnswer}
          onChange={(e) => setCaptchaAnswer(e.target.value)}
          className="border p-2 rounded mb-2 w-full"
        />
        <button
          onClick={solveCaptcha}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Submit
        </button>
      </div>

      <div className="w-64 p-4 bg-white shadow-lg rounded-xl mb-4 text-center">
        <h3 className="font-semibold mb-2">📺 Watch Ads</h3>
        <button
          onClick={watchAd}
          className="bg-yellow-500 text-black p-2 rounded w-full"
        >
          Watch & Earn 10 Coins
        </button>
      </div>
    </div>
  );
}
