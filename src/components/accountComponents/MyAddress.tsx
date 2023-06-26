import CustomButton from "@/components/CustomButton";
import UserAddressForm from "@/components/UserAddressForm";
import Portal from "@/hooks/Protal";
import useGetToken from "@/hooks/useGetToken";
import {
  useGetUserAddressListQuery,
  useRemoveAddressMutation,
  useUpdateAddressDataMutation,
} from "@/services/shoperzApi.service";
import React, { useState } from "react";
import ReactSwitch from "react-switch";
import AddressCard from "./AddressCard";
import UserAddressList from "./UserAddressList";
import { AnimatePresence } from "framer-motion";

type Props = {
  title: string;
};

function MyAddress({ title }: Props) {
  const { token } = useGetToken();
  const { data, isError, isLoading, isSuccess } = useGetUserAddressListQuery(
    { token },
    { skip: !Boolean(token) }
  );
  const [fetchUpdateAddress, responseUpdateAddress] =
    useUpdateAddressDataMutation();
  const [fetchRemoveAddress, responseRemoveAddress] =
    useRemoveAddressMutation();
  const [showAddressForm, setShowAddressForm] = useState(false);
  function handleShowAddressForm() {
    setShowAddressForm((prev) => !prev);
  }

  function handleSwitchDefaultAddress(
    id: string,
    payload: Partial<UserAddress>
  ) {
    fetchUpdateAddress({
      token,
      addressId: id,
      payload: {
        ...payload,
        default: !payload.default,
      },
    });
  }

  function handleRemoveUserAddress(id: string) {
    fetchRemoveAddress({ addressId: id, token });
  }

  return (
    <article className="w-full lg:basis-3/4 bg-white border shadow py-3 px-5">
      <header className="flex items-start justify-between mt-6 mb-3 ">
        <h3 className="text-xl capitalize ">{title}</h3>
        <CustomButton type="button" onClick={handleShowAddressForm}>
          add new address
        </CustomButton>
      </header>
      <div className="flex flex-col">
        <h4 className="block w-full capitalize text-Grey-700 font-medium border-b border-Grey-400 pt-4 pb-2">
          last added address
        </h4>
        <span className="w-full lg:basis-2/5 block mt-2 mb-6">
          <small className="text-Grey-600 font-bold">
            Manage your saved addresses so you can quickly and easily complete
            purchases across our stores Add a new address .
          </small>
        </span>
        <UserAddressList
          apiCallState={{ isError, isLoading, isSuccess }}
          addressLength={data?.data.userAddresses?.length!}
        >
          {data?.data.userAddresses.map((address) => {
            return (
              <AddressCard
                key={address._id}
                addressData={address}
                onSwitchDefaultAddress={() =>
                  handleSwitchDefaultAddress(address._id, address)
                }
                onRemoveAddress={() => handleRemoveUserAddress(address._id)}
                showAddressForm={setShowAddressForm}
              />
            );
          })}
        </UserAddressList>
      </div>
      {showAddressForm ? (
        <Portal>
          <AnimatePresence>
            <UserAddressForm setIsShowing={setShowAddressForm} />
          </AnimatePresence>
        </Portal>
      ) : null}
    </article>
  );
}

export default MyAddress;
