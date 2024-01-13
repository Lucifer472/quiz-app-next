import dynamic from "next/dynamic";

const Cat = () => {
  const AdTop = dynamic(() => import("@/components/ads/Ad-Home"), {
    ssr: false,
  });

  const AllCategory = dynamic(
    () => import("@/app/(app)/_componets/AllCategory"),
    {
      ssr: false,
    }
  );

  return (
    <div className="w-full">
      <AdTop />
      <div className="px-5 pt-[2rem] pb-20 flex flex-col w-full gap-6">
        <div className="flex flex-col gap-6">
          <div className="text-lg font-bold text-center">
            Select the Quiz category that you want to play
          </div>
          <AllCategory />
        </div>
      </div>
    </div>
  );
};

export default Cat;
