import { handleAddToOrderData } from "@/redux/slices/app.slice";
import React, { useCallback, useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";

interface AddressForm {
  // setFormData: React.Dispatch<
  //   React.SetStateAction<{
  //     firstName: string;
  //     lastName: string;
  //     "country-or-regio": string;
  //     "more-of-location": string;
  //     city: string;
  //     province: string;
  //     postcode: string;
  //     "phone-number": string;
  //     email: string;
  //   }>
  // >;
  // formData: {
  //   firstName: string;
  //   lastName: string;
  //   "country-or-regio": string;
  //   "more-of-location": string;
  //   city: string;
  //   province: string;
  //   postcode: string;
  //   "phone-number": string;
  //   email: string;
  // };
}
function UserAddressForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    "country-or-regio": "",
    "more-of-location": "",
    city: "",
    province: "",
    postcode: "",
    "phone-number": "",
    email: "",
  });
  const handleGetValue = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    let name: string = target.name;
    let value: string = target.value;
    setFieldValue(name, value);
  };
  const setFieldValue = useCallback((name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const sendUserInformation = useCallback(() => {
    dispatch(
      handleAddToOrderData({
        id: "checkout",
        userInformation: formData,
      })
    );
  }, [formData]);

  const resetAllInputFields = () => {
    setFormData({
      firstName: "",
      lastName: "",
      "country-or-regio": "",
      "more-of-location": "",
      city: "",
      province: "",
      postcode: "",
      "phone-number": "",
      email: "",
    });
  };

  return (
    <div className="absolute z-10 inset-0 flex items-start md:items-center justify-center bg-Grey-800 bg-opacity-60 overflow-y-auto">
      <form
        action=""
        className="flex flex-col items-stretch justify-start w-full md:w-3/5 bg-white p-3 rounded-md"
      >
        <header className="flex items-center justify-between pb-2 my-2 border-b-2 border-Primary-700">
          <h3 className="text-lg font-semibold uppercase">add new address :</h3>
          <button className="text-rose-700 text-3xl m-3">
            <AiFillCloseSquare />
          </button>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-between mb-4 py-2 ">
          <span className="flex flex-col gap-2 capitalize">
            <label
              htmlFor="firstName"
              className="font-medium text-Grey-700"
              aria-required
            >
              first name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              placeholder="your first name"
              value={formData.firstName}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            />
          </span>
          <span className="flex flex-col gap-2 capitalize">
            <label
              htmlFor="lastName"
              className="font-medium text-Grey-700"
              aria-required
            >
              last name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              placeholder="your last name"
              value={formData.lastName}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            />
          </span>
        </div>
        <div className="grid grid-cols-1  gap-3 items-center justify-between mb-4 py-2 ">
          <span className="flex flex-col gap-2 capitalize">
            <label
              htmlFor="countryOrRegion"
              className="font-medium text-Grey-700"
              aria-required
            >
              Country / Region *
            </label>
            <input
              type="text"
              id="countryOrRegion"
              name="country-or-regio"
              required
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              placeholder="House number and street name"
              value={formData["country-or-regio"]}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            />
            <input
              type="text"
              id="more"
              name="more-of-location"
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              placeholder="Apartment, suite, unit, etc. (optional)"
              value={formData["more-of-location"]}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            />
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center justify-between mb-4 py-2 ">
          <span className="flex flex-col gap-2 capitalize">
            <label
              htmlFor="City"
              className="font-medium text-Grey-700"
              aria-required
            >
              Town / City *
            </label>
            <input
              type="text"
              id="City"
              name="city"
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              required
              placeholder=""
              value={formData["city"]}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            />
          </span>
          <span className="flex flex-col gap-2 capitalize">
            <label
              htmlFor="Province"
              className="font-medium text-Grey-700"
              aria-required
            >
              Province *
            </label>
            <input
              type="text"
              id="Province"
              name="province"
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              required
              placeholder=""
              value={formData["province"]}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            />
          </span>
          <span className="flex flex-col gap-2 capitalize">
            <label
              htmlFor="Postcode"
              className="font-medium text-Grey-700"
              aria-required
            >
              Postcode / ZIP *
            </label>
            <input
              type="text"
              id="Postcode"
              name="postcode"
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              required
              placeholder=""
              value={formData["postcode"]}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            />
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-between mb-4 py-2">
          <span className="flex flex-col gap-2 capitalize">
            <label
              htmlFor="Phone"
              className="font-medium text-Grey-700"
              aria-required
            >
              Phone (optional)
            </label>
            <input
              type="tel"
              id="Phone"
              name="phone-number"
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              placeholder=""
              value={formData["phone-number"]}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            />
          </span>
          <span className="flex flex-col gap-2 capitalize">
            <label
              htmlFor="Email"
              className="font-medium text-Grey-700"
              aria-required
            >
              Email address *
            </label>
            <input
              type="email"
              id="Email"
              name="email"
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              required
              placeholder="johndoe@example.com"
              value={formData["email"]}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            />
          </span>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-between mb-4 py-2">
          <button
            type="button"
            className="bg-Primary-600 py-2 px-3 rounded-full text-white capitalize hover:bg-Primary-500 font-medium"
            onClick={sendUserInformation}
          >
            add address
          </button>
          <button
            type="reset"
            className="border border-Primary-600 py-2 px-3 rounded-full text-Primary-700 capitalize hover:bg-Primary-300 font-medium"
            onClick={resetAllInputFields}
          >
            clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserAddressForm;
