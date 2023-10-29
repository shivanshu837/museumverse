"use-client";
import { useEffect, useState } from "react";
import Card from "./Card";
import { JSON_SERVER_URL as url } from "../../constants/url";

const CardContent: React.FunctionComponent = () => {
  const [artifacts, setArtifacts] = useState([]);
  const flag = artifacts.length > 0;
  useEffect(() => {
    console.log("use effect called");
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArtifacts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    flag && (
      <div className="mt-4 flex items-center justify-center md:justify-start flex-wrap">
        {artifacts.map((elem, idx) => {
          if (idx < 16) {
            let color;
            let i = idx + 1;
            if (idx % 3 == 1) color = "#D9E5E2";
            else if (idx % 3 == 2) color = "#CCD5E4";
            else color = "#DE9C6D66";
            return <Card data={elem} color={color} />;
          }
        })}
      </div>
    )
  );
};

export default CardContent;
