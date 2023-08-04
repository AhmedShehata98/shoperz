import useGetToken from "@/hooks/useGetToken";
import {
  useGetUserAddressListQuery,
  useRemoveAddressMutation,
  useUpdateAddressDataMutation,
} from "@/services/shoperzApi.service";
import React, { Children, cloneElement, useEffect } from "react";
import { ImSpinner } from "react-icons/im";
import NoAddressFounded from "./NoAddressFounded";
import { useDispatch } from "react-redux";
import { setAddressId } from "@/redux/slices/app.slice";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};
function AddressWrpapper({ children }: Props) {
  const { token } = useGetToken();
  const dispatch = useDispatch();
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
  useEffect(() => {
    if (isSuccessFetchUserAddress) {
      const addressId = userAddressList.data.userAddresses.find(
        (adrs) => adrs.default === true
      )?._id;
      if (addressId) {
        dispatch(setAddressId({ addressId }));
      }
    }
  }, [loadingUserAddress, isSuccessFetchUserAddress]);

  const renderAddressChildren = (address: UserAddress) =>
    Children.map((children as React.ReactNode[])?.at(0), (child: any) =>
      cloneElement(child, {
        key: address._id,
        address,
      })
    );
  return (
    <div className="flex flex-col gap-3 mt-8">
      <h3 className="mb-2 text-Grey-700 text-xl font-medium capitalize">
        shopping address :
      </h3>
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
