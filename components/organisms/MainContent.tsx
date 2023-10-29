"use client";
import SearchFilterPill from "../atoms/search-filter-pill";
import SurpriseBar from "../atoms/surprise-bar";
import CardContent from "../molecules/CardContent";
import SearchBar from "../molecules/search-bar";
import Image from "next/image";

const MainContent = () => {
  return (
    <div className="w-full md:w-2/3 p-2">
      <div className="mt-14 md:flex md:items-center md:justify-between">
        <SearchBar />
        <SurpriseBar />
      </div>
      <div className="mt-8">
        <span className="text-black mb-2 text-sm px-2 block">Showing 150 items</span>
        <SearchFilterPill />
      </div>
      <CardContent />
      <div className="my-4 flex items-center justify-center">
        <div className="mt-4 flex items-center md:w-full justify-between text-black">
          <span className="hidden md:inline-block">Page 1 of 7</span>
          <div className="flex items-center justify-center">
            <span className="px-4 py-2 text-white rounded" style={{ backgroundColor: "#B57850" }}>
              1
            </span>
            <span className="px-4 py-2 text-black rounded">2</span>
            <span className="px-4 py-2 text-black rounded">3</span>
            <span className="px-4 py-2 text-black rounded">4</span>
            <span className="px-4 py-2 text-black rounded">5</span>
            <span className="px-4 py-2 text-black rounded">6</span>
          </div>
          <div className="hidden md:block">
            <span>Next</span>
            <Image src={"/akar-icons_arrow-right.png"} width={24} height={24} alt="arrow" className="inline-block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
