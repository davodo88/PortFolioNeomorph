import Image from "next/image";
import React from "react";
import ImgPortfolio from "../../../images/ImgPortfolio.png";

const ImagePort = () => {
  return (
    <div className="p-3 mt-10 md:mt-0  md:mx-0  border-gray-100 rounded  ">
      <Image
        src={ImgPortfolio}
        width={500}
        height={500}
        alt="one picture from my self"
        className="bg-gray-200 shadow-imageShadow rounded"
      />
    </div>
  );
};

export default ImagePort;
