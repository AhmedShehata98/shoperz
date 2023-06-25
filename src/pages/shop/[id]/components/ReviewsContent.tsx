import React from "react";

type Props = {
  reviews: string;
};
function ReviewsContent({ reviews }: Props) {
  return (
    <div className="border px-3 py-6 mb-4">
      {/* <b>ReviewsContent</b> */}
      <br />
      {reviews}
    </div>
  );
}

export default ReviewsContent;
