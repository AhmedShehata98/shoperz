import React from "react";

type Props = {
  description: string;
};
function DescriptionContent({ description }: Props) {
  return (
    <div className="border px-3 py-6 mb-4">
      {/* <b>DescriptionContent</b> */}
      <br />
      {description}
    </div>
  );
}

export default DescriptionContent;
