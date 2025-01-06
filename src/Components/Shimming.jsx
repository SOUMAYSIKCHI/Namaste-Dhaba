import React from "react";

const Shimming = () => {
  return (
    <div className="w-4/5 mx-auto mt-6">
      {/* Shimmer Header */}
      <div className="w-3/5 h-8 bg-gray-300 rounded animate-pulse"></div>

      {/* Shimmer Circles */}
      <div className="mt-4 flex flex-wrap gap-4">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="w-16 h-16 bg-gray-300 rounded-full animate-pulse"
            ></div>
          ))}
      </div>

      {/* Shimmer Cards */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="p-4 bg-gray-300 rounded-lg animate-pulse flex flex-col gap-4"
            >
              <div className="w-full h-24 bg-gray-400 rounded"></div>
              <div className="w-3/4 h-4 bg-gray-400 rounded"></div>
              <div className="w-1/2 h-4 bg-gray-400 rounded"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimming;
