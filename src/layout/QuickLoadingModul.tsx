import React from "react";

function QuickLoadingModul() {
  return (
    <div className="fixed z-30 inset-0 bg-Grey-500 bg-opacity-70 flex items-center justify-center">
      <span className="w-10 h-10 rounded-full border-4 border-Primary-700 border-b-Primary-300 animate-spin"></span>
    </div>
  );
}

export default QuickLoadingModul;
