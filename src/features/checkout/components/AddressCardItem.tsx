import useGetToken from "@/hooks/useGetToken";
import {
  useRemoveAddressMutation,
  useUpdateAddressDataMutation,
} from "@/services/shoperzApi.service";
import React from "react";
import { BsHouseDoor, BsTrash } from "react-icons/bs";
import { MdOutlineMapsHomeWork } from "react-icons/md";

type Props = {
  address?: UserAddress;
};
export default function AddressCardItem({ address }: Props) {
  const [fetchUpdateAddress, ResponseAddressUpdate] =
    useUpdateAddressDataMutation();
  const [fetchRemoveAddress, ResponseAddressRemove] =
    useRemoveAddressMutation();
  const { token } = useGetToken();

  const handleRemoveAddress = (id: string | undefined) => {
    fetchRemoveAddress({ addressId: id, token });
  };
  const handleUpdateAddress = (id: string | undefined) => {
    fetchUpdateAddress({
      addressId: id,
      payload: { default: !address?.default },
      token,
    });
  };

  return (
    <li className="flex items-start flex-col bg-white p-3 border rounded">
      <span className="w-full flex items-center justify-between rounded mb-2">
        <span className="flex items-center justify-start gap-3 uppercase">
          <input
            type="checkbox"
            name="address"
            id="address1"
            className="accent-Primary-700 mx-2"
            checked={address?.default}
            onChange={() => handleUpdateAddress(address?._id)}
          />
          <label htmlFor="address1" className="flex gap-2 items-center">
            {address?.addressLabel === "Home" ? (
              <BsHouseDoor className="block text-xl" />
            ) : (
              <MdOutlineMapsHomeWork />
            )}
            <b className="leading-3">{address?.addressLabel}</b>
          </label>
        </span>
        <button
          type="button"
          className="p-2 text-red-600 bg-rose-100 rounded hover:bg-red-200"
          onClick={() => handleRemoveAddress(address?._id)}
        >
          <BsTrash />
        </button>
      </span>
      <span className="w-full flex flex-col gap-1">
        {/* <span className="flex items-center justify-start gap-2 uppercase mb-1">
          <IoIosPerson className="block text-xl ms-1" />
          <p className="text-Primary-700 capitalize">{`${data.firstName} ${data.lastName}`}</p>
        </span> */}
        <address className="text-sm capitalize text-Grey-700">
          <span className="flex gap-2 items-center">
            <b>{address?.city}</b>
            <b>{address?.country}</b>
          </span>
          <span className="flex gap-2 items-center">
            <b>{address?.street}</b>
            <b>{address?.province}</b>
            <b>{address?.postalCode}</b>
          </span>
        </address>
        <span className="w-full flex items-center justify-between">
          <code>{address?.contactPhone}</code>
          <small>
            last update at :{new Date(address?.updatedAt ?? 0).toDateString()}
          </small>
        </span>
      </span>
    </li>
  );
}
