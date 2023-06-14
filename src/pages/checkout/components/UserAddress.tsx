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

function UserAddress() {
  const { token } = useGetToken();
  const {
    data: userAddressList,
    isLoading: loadingUserAddress,
    isError: ErrorFetchUserAddress,
  } = useGetUserAddressListQuery(token, {
    skip: !token ? true : false,
  });
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
      {loadingUserAddress ? (
        <div className="flex items-center justify-center gap-2">
          <span className="spinner-loading w-7 h-7 border-Primary-700"></span>
          <small>getting address ..</small>
        </div>
      ) : null}
      {!loadingUserAddress &&
      !ErrorFetchUserAddress &&
      userAddressList?.data.userAddresses?.length! >= 1 ? (
        <ul className="grid grid-flow-row gap-2 bg-Grey-100 border border-Grey-200 p-2">
          {userAddressList?.data.userAddresses.map((address: UserAddress) => (
            <AddressCardItem
              key={address._id}
              address={address}
              onCheckAddress={() => {
                fetchUpdateAddress({
                  payload: { default: !address.default },
                  addressId: address._id,
                  token,
                });
              }}
              onRemoveAddress={() => {
                fetchRemoveAddress({ token, addressId: address._id });
              }}
            />
          ))}
        </ul>
      ) : null}
      {!loadingUserAddress &&
      !ErrorFetchUserAddress &&
      userAddressList?.data.userAddresses?.length! <= 0 ? (
        <NoAddressList />
      ) : null}
      <button
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
      ) : null}
    </div>
  );
}

export default UserAddress;

function NoAddressList() {
  return (
    <div className="flex flex-col items-center justify-center px-2 py-6 bg-Grey-100">
      <span className="w-14 h-14 flex items-center justify-center bg-orange-100 rounded-full shadow self-center mb-4">
        <TbAddressBookOff className="block text-4xl text-orange-700" />
      </span>
      <p className="capitalize text-sm text-Grey-800">
        sorry , there is no address information provided in your profile
      </p>
    </div>
  );
}
