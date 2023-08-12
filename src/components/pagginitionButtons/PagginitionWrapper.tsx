import React from "react";

type Props = {
  actualProductsLength: number;
  remainingPages: number;
  currentPage: number;
  children: React.ReactNode | React.ReactNode[];
  onClickNextBtn: React.MouseEventHandler<HTMLButtonElement>;
  onClickPrevBtn: React.MouseEventHandler<HTMLButtonElement>;
};
function PagginitionWrapper({
  actualProductsLength,
  currentPage,
  remainingPages,
  onClickNextBtn,
  onClickPrevBtn,
  children,
}: Props) {
  const renderButtonsChildren = (pageNo: number) =>
    React.Children.map(children, (child) =>
      React.cloneElement(
        child as React.DetailedReactHTMLElement<any, HTMLElement>,
        { key: pageNo, pageNo, currentPage }
      )
    );
  return (
    <div className="w-full flex items-center justify-center gap-8 px-2 mt-3 mb-9">
      <button
        className="pagginition-btn text-sm uppercase font-semibold disabled:bg-gray-300 disabled:opacity-70"
        type="button"
        disabled={currentPage <= 1}
        onClick={onClickPrevBtn}
      >
        previus
      </button>
      <ul className="flex items-center justify-center gap-2">
        {Array.from({ length: remainingPages }, (_, k) => k + 1).map((pageNo) =>
          renderButtonsChildren(pageNo)
        )}
      </ul>
      <button
        className="pagginition-btn text-sm uppercase font-semibold disabled:bg-gray-300 disabled:opacity-70"
        type="button"
        disabled={currentPage >= remainingPages}
        onClick={onClickNextBtn}
      >
        next
      </button>
    </div>
  );
}

export default PagginitionWrapper;
