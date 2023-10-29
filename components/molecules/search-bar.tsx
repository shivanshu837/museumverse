import Image from "next/image";
import SearchButton from "../atoms/search-btn";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-start">
      <div className="p-2 bg-white rounded-md" style={{ width: 300 }}>
        <Image src={"/search.png"} width={24} height={24} alt="search icon" className="inline-block" />
        <input type="text" placeholder="Search.." className="text-sm" />
      </div>
      <SearchButton />
    </div>
  );
};

export default SearchBar;
