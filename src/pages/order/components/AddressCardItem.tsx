import React from "react";
import { BsHouseDoor, BsTrash } from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";

type Props = {
  data: ShippingAddress;
};
export default function AddressCardItem({ data }: Props) {
  return (
    <li className="flex items-start flex-col bg-white p-3 border rounded">
      <span className="w-full flex items-center justify-between rounded mb-2">
        <span className="flex items-center justify-start gap-3 uppercase">
          <input
            type="checkbox"
            name="address"
            id="address1"
            className="accent-Primary-700 mx-2"
          />
          <label htmlFor="address1" className="flex gap-2 items-center">
            <BsHouseDoor className="block text-xl" />
            <b className="leading-3">{data.addressType}</b>
          </label>
        </span>
        <button className="p-2 text-red-700 rounded hover:bg-red-200">
          <BsTrash />
        </button>
      </span>
      <span className="flex flex-col gap-1">
        <span className="flex items-center justify-start gap-2 uppercase mb-1">
          <IoIosPerson className="block text-xl ms-1" />
          <p className="text-Primary-700 capitalize">{`${data.firstName} ${data.lastName}`}</p>
        </span>
        <address className="text-sm capitalize text-Grey-700">
          <p>{data["more-of-location"]}</p>
          <b>{data.city}</b>
          <b>{data["country-or-regio"]}</b>
        </address>
        <code>{data["phone-number"]}</code>
      </span>
    </li>
  );
}
