import clsx from "clsx";
import React from "react";

type Props = {
  actualProductsLength: number;
  remainingPages: number;
  currentPage: number;
  onChangePage: React.MouseEventHandler;
};
function PagginitionButtons({
  actualProductsLength,
  remainingPages,
  currentPage,
  onChangePage,
}: Props) {
  return (
    <ol className="paggination-buttons-group">
      <button
        disabled={currentPage <= 1}
        className="paggination-btn"
        data-button={"prev"}
        onClick={onChangePage}
      >
        previus
      </button>
      {[...Array(remainingPages).keys()].map((page) => {
        return (
          <li
            key={page}
            className={clsx(
              "paggination-index",
              page + 1 === currentPage && "paggination-index-active"
            )}
            data-pagenumber={page + 1}
            onClick={onChangePage}
          >
            {page + 1}
          </li>
        );
      })}
      <button
        className="paggination-btn"
        disabled={currentPage >= remainingPages}
        data-button={"next"}
        onClick={onChangePage}
      >
        next
      </button>
    </ol>
  );
}

export default PagginitionButtons;
