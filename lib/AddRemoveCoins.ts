"use client";

const addRemoveCoins = (isPlus: boolean, amount: number) => {
  const currentCoins = sessionStorage.getItem("amount");

  if (currentCoins === null) return null;
  const coins = parseInt(currentCoins);

  if (isPlus) {
    const newAmount = amount + coins;
    sessionStorage.setItem("amount", newAmount.toString());

    return newAmount;
  }

  if (amount > coins) {
    const newAmount = amount - coins;
    sessionStorage.setItem("amount", newAmount.toString());

    return newAmount;
  } else {
    const newAmount = coins - amount;
    sessionStorage.setItem("amount", newAmount.toString());

    return newAmount;
  }
};

export default addRemoveCoins;
