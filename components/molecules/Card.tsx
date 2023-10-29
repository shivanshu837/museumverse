import Image from "next/image";

const Card = ({ data, color }: { data: any; color: string }) => {
  return (
    <div className="m-2 border border-solid border-gray-300 rounded-xl" style={{ width: "250px" }}>
      <div style={{ backgroundColor: color }}>
        <div className="flex items-start justify-end">
          <Image src={"/eye-light 23.png"} width={20} height={20} alt="eye icon" className="pr-1" />
          <span className="text-black text-sm pr-1">88</span>
          <Image src={"/heart-straight 24.png"} width={20} height={20} alt="heart icon" className="pr-1" />
          <span className="text-black text-sm pr-1">2.2k</span>
        </div>
        <div className="flex justify-center">
          <Image src={data.thumb} width={158} height={200} alt="Artifact" className="inline-block" />
        </div>
      </div>
      <div className="p-2 text-black">
        <div className="flex items-center justify-between mb-4">
          <span
            style={{
              maxWidth: "200px",
              display: "inline-block",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.name}
          </span>
          <span>{data.period}CE</span>
        </div>
        <div>
          <span
            className="text-sm text-gray-400"
            style={{
              maxHeight: "40px",
              display: "inline-block",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
