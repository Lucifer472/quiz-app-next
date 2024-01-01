import Image from "next/image";
import Link from "next/link";

interface CategoryTabProps {
  label: string;
  src: string;
}

const CategoryTab = ({ label, src }: CategoryTabProps) => {
  return (
    <Link href={`/home/${label}`}>
      <div className="flex gap-1 items-center border-[1px] border-white rounded-full p-2 cursor-pointer">
        <Image
          className="w-[46px] rounded-full"
          width={46}
          height={46}
          src={`/icons/${src}`}
          alt={label}
        />
        <span className="w-full text-center text-sm">{label}</span>
      </div>
    </Link>
  );
};

export default CategoryTab;
