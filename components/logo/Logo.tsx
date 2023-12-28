import Image from "next/image";

const Logo = () => {
  return (
    <figure>
      <Image src="/logo.png" alt="Logo" width={120} height={75} />
    </figure>
  );
};

export default Logo;
