import React from "react";
import { MdReportProblem } from "react-icons/md";

type Props = {
  errorMsg?: string;
};
function ErrorHappened({ errorMsg }: Props) {
  return (
    <div className="flex flex-col items-center gap-8 my-4">
      <span className="grid w-24 h-24 bg-red-100 text-red-700 text-4xl shadow-lg rounded-full">
        <MdReportProblem className="m-auto" />
      </span>
      <b className="uppercase text-red-500">{errorMsg}</b>
    </div>
  );
}

export default ErrorHappened;
