import React from "react";

function SignupFormSkeleton() {
  return (
    <div className="max-lg:w-full w-9/12 flex flex-col items-start justify-start gap-2">
      <p className="w-10/12 self-center h-3 bg-gray-300 mb-4 animate-pulse"></p>
      <div className="w-full flex items-center justify-between gap-5 mb-4">
        <div className="max-lg:w-full w-1/2 flex flex-col items-start justify-start gap-2">
          <label className="w-28 h-3 bg-gray-300 mt-4 animate-pulse"></label>
          <div className="w-full h-7 bg-gray-400 mt-1 rounded-full animate-pulse"></div>
        </div>
        <div className="max-lg:w-full w-1/2 flex flex-col items-start justify-start gap-2">
          <label className="w-28 h-3 bg-gray-300 mt-4 animate-pulse"></label>
          <div className="w-full h-7 bg-gray-400 mt-1 rounded-full animate-pulse"></div>
        </div>
      </div>
      <label className="w-28 h-3 bg-gray-300 mt-4 animate-pulse"></label>
      <div className="w-full h-7 bg-gray-400 mt-1 rounded-full animate-pulse"></div>
      <label className="w-28 h-3 bg-gray-300 mt-4 animate-pulse"></label>
      <div className="w-full h-7 bg-gray-400 mt-1 rounded-full animate-pulse"></div>
      <button className="max-lg:w-full w-1/3 h-10 bg-gray-500 self-end mt-7 rounded-full animate-pulse"></button>
    </div>
  );
}

export default SignupFormSkeleton;
