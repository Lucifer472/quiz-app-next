"use server";
import { cookies } from "next/headers";

export const setIsNewUser = async () => {
  cookies().set("isFirst", "false");
  return true;
};

export const isUser = async () => {
  const cok = cookies().get("isFirst");
  if (cok === undefined) return false;
  return true;
};

export const getCoins = async () => {
  const coins = cookies().get("coins");
  if (coins === undefined) return null;
  return coins.value;
};

export const addCoins = async (coins: number) => {
  const currentCoins = await getCoins();
  if (currentCoins === null) {
    cookies().set("coins", coins.toString());
    return coins;
  }
  const coin = parseInt(currentCoins);
  if (isNaN(coin)) return null;
  const setupCoins = coin + coins;
  cookies().set("coins", setupCoins.toString());
  return setupCoins;
};

export const removeCoins = async (coins: number) => {
  const currentCoins = await getCoins();
  if (currentCoins === null) return null;
  const coin = parseInt(currentCoins);
  if (isNaN(coin)) return null;
  if (coins > coin) return null;
  const setupCoins = coin - coins;
  cookies().set("coins", setupCoins.toString());
  return setupCoins;
};
