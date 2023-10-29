import Image from "next/image";

const SearchFilterPill = () => {
  return (
    <div className="p-2 bg-white rounded-sm inline-block">
      <span className="text-gray-600 text-sm px-1">Sarnath, Uttar Pradesh</span>
      <Image src={"/close 3.png"} width={14} height={14} alt="close icon" className="inline-block" />
    </div>
  );
};

export default SearchFilterPill;
