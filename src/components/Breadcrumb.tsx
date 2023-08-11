import { useRouter } from "next/router";
import React, { useState } from "react";

interface Props {
  name: string;
}
function Breadcrumb({ name }: Props) {
  const { pathname, asPath } = useRouter();

  return (
    <nav className="flex items-center justify-start pt-10 pb-4 px-3">
      <ol className="flex gap-2 items-center justify-start text-gray-400 font-medium">
        <li>{pathname.split("/")[0]}</li>
        <li>/</li>
        <li>{name}</li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
