import React from "react";

type Props = {
  onChangePageNo: React.MouseEventHandler<HTMLButtonElement>;
  pageNo?: number;
  currentPage?: number;
};
export default function PagginitionBtn({
  currentPage,
  pageNo,
  onChangePageNo,
}: Props) {
  return (
    <button
      type="button"
      onClick={onChangePageNo}
      disabled={currentPage === pageNo}
      className="pagginition-btn"
      data-pageno={pageNo}
    >
      {pageNo}
    </button>
  );
}
