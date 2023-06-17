import React from "react";
import { BsHouseDoor, BsTrash } from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";
import { CgOrganisation } from "react-icons/Cg";

type Props = {
  address: UserAddress;
  onCheckAddress: React.ChangeEventHandler;
  onRemoveAddress: React.MouseEventHandler;
};
export default function AddressCardItem({
  address,
  onCheckAddress,
  onRemoveAddress,
}: Props) {
  // const {
  //   country,
  //   province,
  //   postalCode,
  //   city,
  //   street,
  //   contactPhone,
  //   updatedAt,
  //   default: isDefault,
  //   addressLabel,
  // } = address;
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
            onChange={onCheckAddress}
          />
          <label htmlFor="address1" className="flex gap-2 items-center">
            {address?.addressLabel === "Home" ? (
              <BsHouseDoor className="block text-xl" />
            ) : (
              <CgOrganisation />
            )}
            <b className="leading-3">{address?.addressLabel}</b>
          </label>
        </span>
        <button
          type="button"
          className="p-2 text-red-600 bg-rose-100 rounded hover:bg-red-200"
          onClick={onRemoveAddress}
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
            last update at :{new Date(address?.updatedAt).toDateString()}
          </small>
        </span>
      </span>
    </li>
  );
}
