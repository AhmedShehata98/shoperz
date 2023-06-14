import React, { useCallback, useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useAddUserAddressMutation } from "@/services/shoperzApi.service";
import useGetToken from "@/hooks/useGetToken";
import CustomButton from "./CustomButton";
import { toast } from "react-toastify";
interface AddressForm {
  setIsShowing: (state: boolean) => void;
}
function UserAddressForm({ setIsShowing }: AddressForm) {
  const [fetchAddUserAddress, responseUserAddress] =
    useAddUserAddressMutation();
  const { token } = useGetToken();
  const [formData, setFormData] = useState<
    Omit<UserAddress, "_id" | "userId" | "createdAt" | "updatedAt" | "__v">
  >({
    default: false,
    country: "",
    city: "",
    province: "",
    street: "",
    postalCode: "",
    contactPhone: "",
    additionalLandmarks: "",
    addressLabel: "Home",
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

  const resetAllInputFields = () => {
    setFormData({
      default: true,
      country: "",
      city: "",
      province: "",
      street: "",
      postalCode: "",
      contactPhone: "",
      additionalLandmarks: "",
      addressLabel: "Home",
    });
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    fetchAddUserAddress({ address: formData, token: token })
      .unwrap()
      .then((res) => {
        toast.done("Ok , Address is added successfully .");
        setIsShowing(false);
      })
      .catch((err) => {
        toast.warn(
          `Error ${err.code}, something won't warning ,${err.message} `
        );
      });
  };
  return (
    <div className="absolute z-10 inset-0 flex items-start md:items-center justify-center bg-Grey-800 bg-opacity-60 overflow-y-auto">
      <motion.form
        action=""
        variants={{
          hidden: { opacity: 0, translateY: "20px" },
          visible: { opacity: 1, translateY: "-0px" },
        }}
        initial={"hidden"}
        animate={"visible"}
        className="flex flex-col items-stretch justify-start w-full md:w-3/5 bg-white p-3 rounded-md"
        onSubmit={handleSubmit}
      >
        <header className="flex items-center justify-between pb-2 my-2 border-b-2 border-Primary-700">
          <h3 className="text-lg font-semibold uppercase">add new address :</h3>
          <button
            className="text-rose-700 text-3xl m-3"
            onClick={() => setIsShowing(false)}
            type="button"
          >
            <AiFillCloseSquare />
          </button>
        </header>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-between mb-4 py-2 ">
          <span className="flex flex-col gap-2 capitalize">
            <label
              htmlFor="addressLabel"
              className="font-medium text-Grey-700"
              aria-required
            >
              address label *
            </label>
            <select
              id="addressLabel"
              name="addressLabel"
              required
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              placeholder="your first name"
              value={formData.addressLabel}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            >
              <option value="Home">home</option>
              <option value="Work">work</option>
            </select>
          </span>
          <span className="flex flex-col gap-2 capitalize">
            <label
              htmlFor="contactPhone"
              className="font-medium text-Grey-700"
              aria-required
            >
              contact Phone *
            </label>
            <input
              type="tel"
              id="contactPhone"
              name="contactPhone"
              required
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              placeholder="EX +20100000000"
              value={formData.contactPhone}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            />
          </span>
        </form>
        <div className="grid grid-cols-1  gap-3 items-center justify-between mb-4 py-2 ">
          <span className="flex flex-col gap-2 capitalize">
            <label
              htmlFor="country"
              className="font-medium text-Grey-700"
              aria-required
            >
              Country / Region *
            </label>
            <input
              type="text"
              id="country"
              name="country"
              required
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              placeholder="EX, Egypt.."
              value={formData.country}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            />
            <span className="flex flex-col gap-2 capitalize">
              <label
                htmlFor="street"
                className="font-medium text-Grey-700"
                aria-required
              >
                Street *
              </label>
              <input
                type="text"
                id="street"
                name="street"
                className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
                placeholder="House number and street name ..."
                value={formData.street}
                onChange={(e: React.ChangeEvent) => handleGetValue(e)}
              />
            </span>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center justify-between mb-4 py-2 ">
          <span className="flex flex-col gap-2 capitalize">
            <label
              htmlFor="city"
              className="font-medium text-Grey-700"
              aria-required
            >
              Town / City *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              required
              placeholder="EX , alexsandria "
              value={formData.city}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            />
          </span>
          <span className="flex flex-col gap-2 capitalize">
            <label
              htmlFor="province"
              className="font-medium text-Grey-700"
              aria-required
            >
              Province *
            </label>
            <input
              type="text"
              id="province"
              name="province"
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              required
              placeholder="EX , Sidi Gaber"
              value={formData.province}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            />
          </span>
          <span className="flex flex-col gap-2 capitalize">
            <label
              htmlFor="postalCode"
              className="font-medium text-Grey-700"
              aria-required
            >
              Postcode / ZIP *
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              required
              placeholder="Ex, 95135"
              value={formData.postalCode}
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
              additional Landmarks
            </label>
            <input
              type="tel"
              id="additionalLandmarks"
              name="additionalLandmarks"
              className="border px-4 py-2 focus:outline-none focus:border-Primary-500"
              placeholder="Ex, extra information about location.."
              value={formData.additionalLandmarks}
              onChange={(e: React.ChangeEvent) => handleGetValue(e)}
            />
          </span>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-between mb-4 py-2">
          <CustomButton type="submit" extraClassName="rounded-full capitalize">
            {responseUserAddress.isLoading ? (
              <>
                creating ..
                <span className="w-6 h-6 border-4 rounded-full border-t-Primary-600 animate-spin"></span>
              </>
            ) : (
              "add address"
            )}
          </CustomButton>
          <button
            type="reset"
            className="border border-Primary-600 py-2 px-3 rounded-full text-Primary-700 capitalize hover:bg-Primary-300 font-medium"
            onClick={resetAllInputFields}
          >
            clear
          </button>
        </div>
      </motion.form>
    </div>
  );
}

export default UserAddressForm;
