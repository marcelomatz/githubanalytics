import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <ClipLoader size={50} color={"#123abc"} loading={true} />
    </div>
  );
};

export default LoadingSpinner;
