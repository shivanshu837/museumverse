"use client";
import Image from "next/image";
import { useState } from "react";

const Navbar: React.FunctionComponent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const toggleNavbar = () => {
    setIsClicked(!isClicked);
  };
  return (
    <nav className="bg-white">
      <div className="px-8 sm:px-6 lg:px-16 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="">
                <Image src={"/logo.jpg"} width={201} height={32.79} alt="Museumverse Logo" />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center ml-4 space-x-4">
              <a href="#" className="ml-2 text-black flex items-end">
                <Image src={"/House.png"} className="inline-block" width={24} height={24} alt="home icon" />
                <span className="nav-bar-item ml-1">Home</span>
              </a>
              <a href="#" className="ml-4 text-black flex items-end">
                <Image src={"/CodesandboxLogo.png"} className="inline-block" width={24} height={24} alt="home icon" />
                <span className="nav-bar-item-active ml-1">Artifacts</span>
              </a>
              <a href="#" className="text-black flex items-end">
                <Image src={"/Storefront.png"} className="inline-block" width={24} height={24} alt="home icon" />
                <span className="nav-bar-item ml-1">Shop</span>
              </a>
              <a href="#" className="text-black flex items-end">
                <Image src={"/CircleWavyWarning.png"} className="inline-block" width={24} height={24} alt="home icon" />
                <span className="nav-bar-item ml-1">About</span>
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center p-2">
            <button onClick={toggleNavbar}>
              {!isClicked ? (
                <Image src={"/hamburger.png"} width={25} height={25} alt="Logo" />
              ) : (
                <Image src={"/close 3.png"} width={25} height={25} alt="Logo" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isClicked && (
        <div className="block md:hidden px-8 sm:px-6 lg:px-16 pb-2">
          <div>
            <a href="#" className="text-black my-2 flex items-end">
              <Image src={"/House.png"} className="inline-block" width={24} height={24} alt="home icon" />
              <span className="nav-bar-item">Home</span>
            </a>
            <a href="#" className="text-black my-2 flex items-end">
              <Image src={"/CodesandboxLogo.png"} className="inline-block" width={24} height={24} alt="home icon" />
              <span className="nav-bar-item-active ml-1">Artifacts</span>
            </a>
            <a href="#" className="text-black my-2 flex items-end">
              <Image src={"/Storefront.png"} className="inline-block" width={24} height={24} alt="home icon" />
              <span className="nav-bar-item ml-1">Shop</span>
            </a>
            <a href="#" className="text-black my-2 flex items-end">
              <Image src={"/CircleWavyWarning.png"} className="inline-block" width={24} height={24} alt="home icon" />
              <span className="nav-bar-item ml-1">About</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
