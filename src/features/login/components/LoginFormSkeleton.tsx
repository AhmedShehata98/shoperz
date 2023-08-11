import React from "react";

function LoginFormSkeleton() {
  return (
    <div className="max-lg:w-full w-9/12 flex flex-col items-start justify-start gap-2 p-3 ">
      <p className="w-10/12 self-center h-3 bg-gray-300 mb-3 animate-pulse"></p>
      <label className="w-28 h-3 bg-gray-300 mt-4 animate-pulse"></label>
      <div className="max-lg:w-full w-3/4 h-7 bg-gray-400 mt-1 rounded-full animate-pulse"></div>
      <label className="w-28 h-3 bg-gray-300 mt-4 animate-pulse"></label>
      <div className="max-lg:w-full w-3/4 h-7 bg-gray-400 mt-1 rounded-full animate-pulse"></div>
      <button className="max-lg:w-full w-1/3 h-10 bg-gray-500 self-end mt-7 rounded-full animate-pulse"></button>
    </div>
  );
}

export default LoginFormSkeleton;
