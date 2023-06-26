import React from "react";
import { ImSpinner8 } from "react-icons/im";
import ErrorHappened from "../ErrorHappened";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  apiCallState: {
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
  };
  addressLength: number;
};
function UserAddressList({
  children,
  apiCallState: { isError, isLoading, isSuccess },
  addressLength,
}: Props) {
  return (
    <ul className="grid grid-flow-row gap-3 bg-Grey-100 mt-1 py-4 px-2">
      {isLoading ? (
        <ImSpinner8 className="block text-xl text-Primary-700 animate-spin" />
      ) : null}
      {addressLength >= 1 ? children : null}
      {addressLength <= 0 ? (
        <span className="text-sm capitalize mx-auto text-Grey-700">
          there is no address in your account yet .{" "}
        </span>
      ) : null}
      {isError ? <ErrorHappened /> : null}
    </ul>
  );
}

export default UserAddressList;
