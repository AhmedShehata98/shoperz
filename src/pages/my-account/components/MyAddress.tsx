import CustomButton from "@/components/CustomButton";
import UserAddressForm from "@/components/UserAddressForm";
import Portal from "@/hooks/Protal";
import React, { useState } from "react";
import ReactSwitch from "react-switch";

type Props = {
  title: string;
};

function MyAddress({ title }: Props) {
  const [addressList, setAddressList] = useState([
    {
      id: "1",
      isDefault: false,
      name: "john doe",
      address:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, inventore porro, accusantium doloremque qui laborum dolorem mollitia nihil molestias tenetur neque!",
      phone: "+201234567891",
      locationLabel: "home",
    },
    {
      id: "2",
      isDefault: false,
      name: "john doe 2",
      address:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dicta porro impedit autem aut?",
      phone: "+201234500091",
      locationLabel: "home",
    },
    {
      id: "3",
      isDefault: true,
      name: "john doe 2",
      address:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dicta porro impedit autem aut?",
      phone: "+201234502991",
      locationLabel: "work",
    },
  ]);
  const [showAddressForm, setShowAddressForm] = useState(false);

  function handleShowAddressForm() {
    setShowAddressForm((prev) => !prev);
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
        <ul className="grid grid-flow-row gap-3 bg-Grey-100 mt-1 py-4 px-2">
          {addressList.map((address) => {
            function handleChange(id: string) {
              setAddressList((address) =>
                address.map((adr) =>
                  adr.id === id
                    ? { ...adr, isDefault: true }
                    : { ...adr, isDefault: false }
                )
              );
            }
            return (
              <li
                key={address.id}
                className=" bg-white border border-Grey-200 p-2 shadow-md"
              >
                <div className="flex items-center justify-between px-3 py-2 border-b border-Grey-200">
                  <h5 className="text-lg text-Grey-900 font-medium capitalize">
                    {address.locationLabel}
                  </h5>
                  <span className="flex items-center justify-center gap-3">
                    <button className="text-sm text-Danger-600 underline">
                      remove
                    </button>
                    <button className="text-sm text-Grey-800 underline">
                      edit
                    </button>
                    <ReactSwitch
                      checked={address.isDefault}
                      onColor="#0077E4"
                      className="ms-3"
                      onChange={() => handleChange(address.id)}
                    />
                  </span>
                </div>
                <div className="flex flex-col items-start justify-center gap-3 my-3 px-2">
                  <span className="flex max-md:flex-col max-md:items-start items-center justify-start gap-1">
                    <p className="capitalize text-sm text-Grey-600 font-medium pe-3">
                      name :
                    </p>
                    <p className="capitalize text-Grey-800 font-medium">
                      {address.name}
                    </p>
                  </span>
                  <span className="flex max-md:flex-col max-md:items-start items-center justify-start gap-1">
                    <p className="capitalize text-sm text-Grey-600 font-medium pe-3">
                      location:
                    </p>
                    <address className="capitalize text-Grey-800 font-medium">
                      {address.address}
                    </address>
                  </span>
                  <span className="flex max-md:flex-col max-md:items-start items-center justify-start gap-1">
                    <p className="capitalize text-sm text-Grey-600 font-medium pe-3">
                      phone :
                    </p>
                    <code className="capitalize text-Grey-900 font-medium">
                      {address.phone}
                    </code>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {showAddressForm ? (
        <Portal>
          <UserAddressForm setIsShowing={setShowAddressForm} />
        </Portal>
      ) : null}
    </article>
  );
}

export default MyAddress;
