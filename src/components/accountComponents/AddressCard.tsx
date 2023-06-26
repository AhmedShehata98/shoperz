import React from "react";
import ReactSwitch from "react-switch";

type Props = {
  onSwitchDefaultAddress: any;
  addressData: UserAddress;
  onRemoveAddress: React.MouseEventHandler;
  showAddressForm: React.Dispatch<React.SetStateAction<boolean>>;
};
function AddressCard({
  onSwitchDefaultAddress,
  showAddressForm,
  onRemoveAddress,
  addressData,
}: Props) {
  return (
    <li
      key={addressData._id}
      className=" bg-white border border-Grey-200 p-2 shadow-md"
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-Grey-200">
        <h5 className="text-lg text-Grey-900 font-medium capitalize">
          {addressData.addressLabel}
        </h5>
        <span className="flex items-center justify-center gap-3">
          <button
            className="text-sm text-Danger-600 underline"
            onClick={onRemoveAddress}
          >
            remove
          </button>
          <button
            className="text-sm text-Grey-800 underline"
            onClick={() => showAddressForm((prev) => !prev)}
          >
            edit
          </button>
          <ReactSwitch
            checked={addressData.default}
            onColor="#0077E4"
            className="ms-3"
            onChange={onSwitchDefaultAddress}
          />
        </span>
      </div>
      <div className="flex flex-col items-start justify-center gap-3 my-3 px-2">
        <span className="flex max-md:flex-col max-md:items-start items-center justify-start gap-1">
          {/* <p className="capitalize text-sm text-Grey-600 font-medium pe-3">
          name :
        </p>
        <p className="capitalize text-Grey-800 font-medium">
          {address.name}
        </p> */}
        </span>
        <span className="flex max-md:flex-col max-md:items-start items-center justify-start gap-1">
          <p className="capitalize text-sm text-Grey-600 font-medium pe-3">
            location:
          </p>
          <address className="capitalize text-Grey-800 font-medium">
            {`${addressData.country} ,${addressData.city} - ${addressData.street} ${addressData.province} ${addressData.postalCode} ${addressData.additionalLandmarks}`}
          </address>
        </span>
        <span className="flex max-md:flex-col max-md:items-start items-center justify-start gap-1">
          <p className="capitalize text-sm text-Grey-600 font-medium pe-3">
            phone :
          </p>
          <code className="capitalize text-Grey-900 font-medium">
            {addressData.contactPhone}
          </code>
        </span>
      </div>
    </li>
  );
}

export default AddressCard;
