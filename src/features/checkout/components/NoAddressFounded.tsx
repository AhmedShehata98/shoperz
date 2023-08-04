import React from "react";
import { TbAddressBookOff } from "react-icons/tb";

function NoAddressFounded() {
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

export default NoAddressFounded;
