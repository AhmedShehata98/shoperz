import React from "react";

interface CustomHeading {
  title: string;
  counts?: string;
}
function CustomHeading({ counts, title }: CustomHeading) {
  return (
    <header className="w-max capitalize flex items-center justify-start gap-1 border-b-2 border-sky-500 py-1.5 mb-4">
      <b className="text-xl">{title}</b>
      {counts && <p>({counts})</p>}
    </header>
  );
}

export default CustomHeading;
