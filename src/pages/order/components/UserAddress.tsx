import React from "react";
import { BsHouseDoor, BsTrash } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

function UserAddress() {
  return (
    <div className=" mt-6">
      <h3 className="mb-2 text-Grey-700 text-xl font-medium capitalize">
        shopping address :
      </h3>
      <ul className="border border-Grey-200 ">
        <li className="flex items-start flex-col">
          <span className="w-full flex items-center justify-between p-2 bg-gray-100 rounded">
            <span className="flex items-center justify-start gap-3 uppercase">
              <input
                type="checkbox"
                name="address"
                id="address1"
                className="accent-Primary-700 mx-2"
              />
              <label htmlFor="address1" className="flex gap-2 ">
                <BsHouseDoor className="block text-xl" />
                <b>house</b>
              </label>
            </span>
            <button className="p-2 bg-red-500 rounded-full text-white">
              <BsTrash />
            </button>
          </span>
          <span className="flex flex-col gap-2 p-3">
            <span className="flex items-center justify-start gap-2 uppercase mb-1">
              <FaUser className="block text-xl ms-1" />
              <p className="text-Primary-700 capitalize">ahmed shehata</p>
            </span>
            <address>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              similique animi voluptatum ducimus accusamus repellat commodi
              magni culpa!
            </address>
            <code>+201234567891</code>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default UserAddress;
