// api.js
export const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxGSWiKHf4b-KCo4yRc8JzjfA7QbsAQgI9EA5UCbJYUM9yo8JohCWEItVv0lHOE2-5Z/exec";

export async function fetchCoins(email) {
  const res = await fetch(`${GOOGLE_SHEET_URL}?email=${email}`);
  const data = await res.json();
  return data?.coins || 0;
}

export async function updateCoins(email, coins) {
  await fetch(GOOGLE_SHEET_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, coins, action: "updateCoins" }),
  });
}

export async function withdrawRequest(name, email, upi, amount) {
  await fetch(GOOGLE_SHEET_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, upi, amount, action: "withdraw" }),
  });
}
