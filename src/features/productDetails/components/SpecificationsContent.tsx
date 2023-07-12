import React from "react";

type Props = {
  specifications: string;
};
function SpecificationsContent({ specifications }: Props) {
  return (
    <div className="border px-3 py-6 mb-4">
      {/* <b>specificationsContent</b> */}
      <br />
      {specifications}
    </div>
  );
}

export default SpecificationsContent;
