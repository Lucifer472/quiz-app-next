import Image from "next/image";

const Coin = () => {
  return (
    <figure className="inline">
      <Image src="/coin.svg" alt="Coins" width={10} height={10} />
    </figure>
  );
};

export default Coin;
