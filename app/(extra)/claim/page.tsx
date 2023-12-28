import dynamic from "next/dynamic";

const page = () => {
  const Welcome = dynamic(() => import("../_components/Welcome"), {
    ssr: false,
  });
  return (
    <div className="w-full h-full relative">
      <Welcome />
    </div>
  );
};

export default page;
