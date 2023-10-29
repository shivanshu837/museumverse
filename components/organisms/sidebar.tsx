import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="hidden md:block md:w-1/3 md:pt-8">
      <div className="flex items-center justify-center">
        <div>
          <div>
            <span className="sidebar-nav-active">Home</span>
            <Image src={"/CaretRight.png"} width={16} height={16} alt="Caret right icon" className="inline-block" />
            <span className="sidebar-nav">Artifacts</span>
          </div>
          <div className="sidebar-heading">Artifacts</div>
          <div className="mt-4">
            <div>
              <div>
                <Image src={"/Frame 19341.png"} width={24} height={24} alt="Caret right icon" className="inline-block" />
                <span className="sidebar-filter-heading">Select Dynasty</span>
              </div>
              <div className="px-6 mt-2">
                <div className="p-2 mb-2 bg-white rounded-md">
                  <Image src={"/search.png"} width={24} height={24} alt="Caret right icon" className="inline-block" />
                  <input type="text" placeholder="Search for Artifacts" className="inline-block text-sm" />
                </div>
                <div className="pb-2">
                  <Image src={"/check-square 3.png"} width={24} height={24} alt="Caret right icon" className="inline-block mr-2" />
                  <span
                    className="sidebar-filter-heading sidebar-nav"
                    style={{ maxWidth: "213px", display: "inline-block", overflowWrap: "break-word" }}
                  >
                    Nalanda, Bihar India
                  </span>
                </div>
                <div className="pb-2">
                  <Image src={"/check-square-fill 2.png"} width={24} height={24} alt="Caret right icon" className="inline-block mr-2" />
                  <span
                    className="sidebar-filter-heading sidebar-nav"
                    style={{ maxWidth: "213px", display: "inline-block", overflowWrap: "break-word" }}
                  >
                    Sarnath, Uttar Pradesh
                  </span>
                </div>
                <div className="pb-2">
                  <Image src={"/check-square 3.png"} width={24} height={24} alt="Caret right icon" className="inline-block mr-2" />
                  <span
                    className="sidebar-filter-heading sidebar-nav"
                    style={{ maxWidth: "213px", display: "inline-block", overflowWrap: "break-word" }}
                  >
                    Jagannath Tekri, pauni...
                  </span>
                </div>
                <div className="pb-2">
                  <Image src={"/check-square 3.png"} width={24} height={24} alt="Caret right icon" className="inline-block mr-2" />
                  <span
                    className="sidebar-filter-heading sidebar-nav"
                    style={{ maxWidth: "213px", display: "inline-block", overflowWrap: "break-word" }}
                  >
                    Ahichchhatra
                  </span>
                </div>
                <div className="pb-2">
                  <Image src={"/check-square 3.png"} width={24} height={24} alt="Caret right icon" className="inline-block mr-2" />
                  <span
                    className="sidebar-filter-heading sidebar-nav"
                    style={{ maxWidth: "213px", display: "inline-block", overflowWrap: "break-word" }}
                  >
                    Chola, Tamil Nadu
                  </span>
                </div>
                <div className="truncate-text text-sm pb-4 border-b border-solid border-gray-400" style={{ maxWidth: "213px", color: "#B57850" }}>
                  <span>+ 15 more</span>
                </div>
              </div>
            </div>
            <div className="my-4">
              <Image src={"/Frame 19344.png"} width={24} height={24} alt="Caret right icon" className="inline-block" />
              <span className="sidebar-filter-heading">Select Period</span>
              <div className="px-6">
                <div className="mt-4 border-b border-solid border-gray-400" style={{ maxWidth: "213px" }}></div>
              </div>
            </div>
            <div className="my-4">
              <Image src={"/Frame 19344.png"} width={24} height={24} alt="Caret right icon" className="inline-block" />
              <span className="sidebar-filter-heading">Select Material</span>
              <div className="px-6">
                <div className="mt-4 border-b border-solid border-gray-400" style={{ maxWidth: "213px" }}></div>
              </div>
            </div>
            <div>
              <Image src={"/Frame 19344.png"} width={24} height={24} alt="Caret right icon" className="inline-block" />
              <span className="sidebar-filter-heading">Select Region</span>
              <div className="px-6">
                <div className="mt-4 border-b"></div>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
