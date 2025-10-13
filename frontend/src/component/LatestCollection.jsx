import React from "react";
import Title from "./Title";

const LatestCollection = () => {
  return (
    <div>
      <div className="h-[8%] w-[100%] text-center md:mt-[50px] ">
        <Title text1={"LATEST"} text2={" COLLECTION"} />
        <p className="w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100">
          {" "}
          Step Into Style - New Collection Droppingp This Season{" "}
        </p>
      </div>
    </div>
  );
};

export default LatestCollection;
