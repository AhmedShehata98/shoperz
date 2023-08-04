import useGetToken from "@/hooks/useGetToken";
import {
  useGetUserAddressListQuery,
  useRemoveAddressMutation,
  useUpdateAddressDataMutation,
} from "@/services/shoperzApi.service";
import React, { Children, cloneElement } from "react";
import UserAddress from "./UserAddress";
import { JsxElement } from "typescript";
import { ImSpinner } from "react-icons/im";
import NoAddressFounded from "./NoAddressFounded";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};
function AddressWrpapper({ children }: Props) {
  const { token } = useGetToken();

  const {
    data: userAddressList,
    isLoading: loadingUserAddress,
    isError: ErrorFetchUserAddress,
    isSuccess: isSuccessFetchUserAddress,
  } = useGetUserAddressListQuery(
    { token },
    {
      skip: !token ? true : false,
    }
  );

  const renderAddressChildren = (address: UserAddress) =>
    Children.map((children as React.ReactNode[])?.at(0), (child: any) =>
      cloneElement(child, {
        key: address._id,
        address,
      })
    );
  return (
    <div className="flex flex-col gap-3 mt-8">
      <ul className="grid grid-flow-row gap-2 bg-Grey-100 border border-Grey-200 p-2">
        {!loadingUserAddress &&
          isSuccessFetchUserAddress &&
          userAddressList.data.userAddresses.map((address) =>
            renderAddressChildren(address)
          )}
        {!loadingUserAddress &&
          !ErrorFetchUserAddress &&
          userAddressList?.data.userAddresses?.length! <= 0 && (
            <NoAddressFounded />
          )}
        {loadingUserAddress && !ErrorFetchUserAddress && (
          <ImSpinner className="inline-block text-2xl animate-spin mx-auto my-8" />
        )}
      </ul>

      {(children as React.ReactNode[])?.at(1)}
      {(children as React.ReactNode[])?.at(2)}
    </div>
  );
}

export default AddressWrpapper;
