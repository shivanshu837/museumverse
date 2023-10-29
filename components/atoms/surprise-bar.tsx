import Image from "next/image";

const SurpriseBar = () => {
  return (
    <div className="p-2 border border-gray-400 border-solid rounded-sm my-2 md:my-0 inline-block">
      <Image src={"/confetti.png"} width={24} height={24} alt="confetti" className="inline-block px-1" />
      <span className="surprise">Surprise me</span>
    </div>
  );
};

export default SurpriseBar;
