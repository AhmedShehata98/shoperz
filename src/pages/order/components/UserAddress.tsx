import React, { useCallback, useState } from "react";
import { BsHouseDoor, BsTrash } from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";
import AddressCardItem from "./AddressCardItem";

import Portal from "@/hooks/Protal";
import UserAddressForm from "@/components/UserAddressForm";
import { handleAddToOrderData } from "@/redux/slices/app.slice";
import { useDispatch } from "react-redux";

function UserAddress() {
  const dispatch = useDispatch();
  const {
    isLoading,
    isError,
    isSuccess,
    data: addressList,
  } = useGetUserAddressQuery("");
  const [showAddressForm, setShowAddressForm] = useState(false);
  const sendUserInformation = () => {
    dispatch(
      handleAddToOrderData({
        id: "checkout",
        userInformation: formData,
      })
    );
  };
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
      ) : (
        <ul className="grid grid-flow-row gap-2 bg-Grey-100 border border-Grey-200 p-2">
          {addressList?.slice(2, 4).map((address) => {
            let newAddress: ShippingAddress = {
              firstName: address.name.split(" ")[0],
              lastName: address.name.split(" ")[1],
              "phone-number": address.phone,
              postcode: address.address.zipcode,
              city: address.address.city,
              email: address.email,
              id: address.id.toString(),
              "country-or-regio": "egypt",
              "more-of-location": `${address.address.street} ${address.address.suite} ${address.address.zipcode}`,
              province: address.address.city,
              addressType: "house address",
              isCurrent: false,
            };

            return <AddressCardItem key={newAddress.id} data={newAddress} />;
          })}
        </ul>
      )}
      <button
        type="button"
        className="w-full rounded bg-Primary-600 p-2 text-white capitalize mt-4 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-gray-400"
        onClick={() => setShowAddressForm((prev) => !prev)}
        disabled={isLoading}
      >
        add new address
      </button>
      {showAddressForm ? (
        <Portal>
          <UserAddressForm
            setIsShowing={setShowAddressForm}
            handleSubmit={sendUserInformation}
          />
        </Portal>
      ) : null}
    </div>
  );
}

export default UserAddress;
