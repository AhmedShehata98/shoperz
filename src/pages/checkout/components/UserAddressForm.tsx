import React from "react";

function UserAddressForm() {
  return (
    <form action="" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-between mn-4 py-6 ">
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
            required
            className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
            placeholder="your first name"
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
            required
            className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
            placeholder="your last name"
          />
        </span>
      </div>
      <div className="grid grid-cols-1  gap-3 items-center justify-between mn-4 py-6 ">
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
            required
            className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
            placeholder="House number and street name"
          />
          <input
            type="text"
            id="more"
            className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
            placeholder="Apartment, suite, unit, etc. (optional)"
          />
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center justify-between mn-4 py-6 ">
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
            className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
            required
            placeholder=""
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
            className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
            required
            placeholder=""
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
            className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
            required
            placeholder=""
          />
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-between mn-4 py-6">
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
            className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
            placeholder=""
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
            className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
            required
            placeholder="johndoe@example.com"
          />
        </span>
      </div>
    </form>
  );
}

export default UserAddressForm;
