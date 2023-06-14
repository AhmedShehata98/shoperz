import { useRouter } from "next/router";
import React, { useState } from "react";

interface BreadcrumbProps {}
function Breadcrumb() {
  const { route, pathname } = useRouter();
  const [bredcrumbData, setBredcrumbData] = useState([
    "shop",
    ...pathname.split("/"),
  ]);

  return (
    <nav className="flex items-center justify-start pt-10 pb-4 px-3">
      <ol className="flex gap-2 items-center justify-start text-gray-400 font-medium">
        {bredcrumbData.map((data) =>
          data !== "" ? (
            <li key={data}>{data.toLocaleUpperCase()}</li>
          ) : (
            <b key={data}> / </b>
          )
        )}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
