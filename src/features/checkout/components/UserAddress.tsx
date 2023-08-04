import React, { useState } from "react";
import AddressCardItem from "./AddressCardItem";
import Portal from "@/hooks/Protal";
import UserAddressForm from "@/components/UserAddressForm";
import {
  useGetUserAddressListQuery,
  useRemoveAddressMutation,
  useUpdateAddressDataMutation,
} from "@/services/shoperzApi.service";
import useGetToken from "@/hooks/useGetToken";
import { TbAddressBookOff } from "react-icons/tb";

type Props = {
  address: UserAddress[];
  apiCallState: {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
  };
};
function UserAddress({
  address,
  apiCallState: { isError, isLoading, isSuccess },
}: Props) {
  const { token } = useGetToken();
  // const {
  //   data: userAddressList,
  //   isLoading: loadingUserAddress,
  //   isError: ErrorFetchUserAddress,
  // } = useGetUserAddressListQuery(
  //   { token },
  //   {
  //     skip: !token ? true : false,
  //   }
  // );
  const [fetchUpdateAddress, ResponseAddressUpdate] =
    useUpdateAddressDataMutation();
  const [fetchRemoveAddress, ResponseAddressRemove] =
    useRemoveAddressMutation();

  const [showAddressForm, setShowAddressForm] = useState(false);
  return (
    <div className=" mt-3">
      <h3 className="mb-2 text-Grey-700 text-xl font-medium capitalize">
        shopping address :
      </h3>
      {isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <span className="spinner-loading w-7 h-7 border-Primary-700"></span>
          <small>getting address ..</small>
        </div>
      ) : null}
      {!isLoading && !isError && address.length! >= 1 ? (
        <ul className="grid grid-flow-row gap-2 bg-Grey-100 border border-Grey-200 p-2">
          {/* {address?.map((adres: UserAddress) => (
            <AddressCardItem
              key={adres._id}
              address={adres}
              onCheckAddress={() => {
                fetchUpdateAddress({
                  payload: { default: !adres.default },
                  addressId: adres._id,
                  token,
                });
              }}
              onRemoveAddress={() => {
                fetchRemoveAddress({ token, addressId: adres._id });
              }}
            />
          ))} */}
        </ul>
      ) : null}

      {/* <button
        type="button"
        className="w-full rounded bg-Primary-600 p-2 text-white capitalize mt-4 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-gray-400"
        onClick={() => setShowAddressForm((prev) => !prev)}
      >
        add new address
      </button>
      {showAddressForm ? (
        <Portal>
          <UserAddressForm setIsShowing={setShowAddressForm} />
        </Portal>
      ) : null} */}
    </div>
  );
}

export default UserAddress;
