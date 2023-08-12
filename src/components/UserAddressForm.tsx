import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { motion } from "framer-motion";
import { useAddUserAddressMutation } from "@/services/shoperzApi.service";
import useGetToken from "@/hooks/useGetToken";
import CustomButton from "./CustomButton";
import { toast } from "react-toastify";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import {
  addressFormSchema,
  initialAdressForm,
} from "@/features/checkout/utils/addressFormSchema";
import FormInputWrapper from "./FormInputWrapper";
interface AddressForm {
  setIsShowing: (state: boolean) => void;
}
function UserAddressForm({ setIsShowing }: AddressForm) {
  const [fetchAddUserAddress, responseUserAddress] =
    useAddUserAddressMutation();
  const { token } = useGetToken();

  const handleSubmit = (
    values: typeof initialAdressForm,
    action: FormikHelpers<typeof initialAdressForm>
  ) => {
    fetchAddUserAddress({ address: values, token: token })
      .unwrap()
      .then((res) => {
        toast.done("Ok , Your address is added successfully .");
        setIsShowing(false);
      })
      .catch((err) => {
        toast.warn(
          `Error ${err.code}, something won't warning ,${err.message} `
        );
      });
  };
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial={"hidden"}
      animate={"visible"}
      exit={"hidden"}
      className="absolute z-10 inset-0 flex items-start md:items-center justify-center bg-Grey-800 bg-opacity-60 overflow-y-auto"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: "20px" },
          visible: { opacity: 1, translateY: "-0px" },
        }}
        initial={"hidden"}
        animate={"visible"}
        exit={"hidden"}
        className="flex flex-col items-stretch justify-start w-full md:w-3/5 bg-white p-3 rounded-md"
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
        <Formik
          initialValues={initialAdressForm}
          onSubmit={(values, action) => handleSubmit(values, action)}
          validationSchema={addressFormSchema}
        >
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-between">
              <FormInputWrapper dir="col">
                <label
                  htmlFor="addressLabel"
                  className="font-medium text-Grey-700 text-sm capitalize"
                  aria-required
                >
                  address label *
                </label>
                <Field
                  as={"select"}
                  id="addressLabel"
                  name="addressLabel"
                  className="custom-input-field"
                  placeholder="your first name"
                >
                  <option value="Home">home</option>
                  <option value="Work">work</option>
                </Field>
                <p className="form-validaton-error-message">
                  <ErrorMessage name="addressLabel" />
                </p>
              </FormInputWrapper>
              <FormInputWrapper dir="col">
                <label
                  htmlFor="contactPhone"
                  className="font-medium text-Grey-700 text-sm capitalize"
                  aria-required
                >
                  contact Phone *
                </label>
                <Field
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  required
                  className="custom-input-field"
                  placeholder="EX +20100000000"
                />
                <p className="form-validaton-error-message">
                  <ErrorMessage name="contactPhone" />
                </p>
              </FormInputWrapper>
            </div>
            <div className="grid grid-cols-1 items-center justify-between">
              <FormInputWrapper dir="col">
                <label
                  htmlFor="country"
                  className="font-medium text-Grey-700 text-sm capitalize"
                  aria-required
                >
                  Country / Region *
                </label>
                <Field
                  type="text"
                  id="country"
                  name="country"
                  required
                  className="custom-input-field"
                  placeholder="EX, Egypt.."
                />
                <p className="form-validaton-error-message">
                  <ErrorMessage name="country" />
                </p>
              </FormInputWrapper>
              <FormInputWrapper dir="col">
                <label
                  htmlFor="street"
                  className="font-medium text-Grey-700 text-sm capitalize"
                  aria-required
                >
                  Street *
                </label>
                <Field
                  type="text"
                  id="street"
                  name="street"
                  className="custom-input-field"
                  placeholder="House number and street name ..."
                />
                <p className="form-validaton-error-message">
                  <ErrorMessage name="street" />
                </p>
              </FormInputWrapper>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-center justify-between">
              <FormInputWrapper dir="col">
                <label
                  htmlFor="city"
                  className="font-medium text-Grey-700 text-sm capitalize"
                  aria-required
                >
                  Town / City *
                </label>
                <Field
                  type="text"
                  id="city"
                  name="city"
                  className="custom-input-field"
                  required
                  placeholder="EX , alexsandria "
                />
                <p className="form-validaton-error-message">
                  <ErrorMessage name="city" />
                </p>
              </FormInputWrapper>
              <FormInputWrapper dir="col">
                <label
                  htmlFor="province"
                  className="font-medium text-Grey-700 text-sm capitalize"
                  aria-required
                >
                  Province *
                </label>
                <Field
                  type="text"
                  id="province"
                  name="province"
                  className="custom-input-field"
                  required
                  placeholder="EX , Sidi Gaber"
                />
                <p className="form-validaton-error-message">
                  <ErrorMessage name="province" />
                </p>
              </FormInputWrapper>
              <FormInputWrapper dir="col">
                <label
                  htmlFor="postalCode"
                  className="font-medium text-Grey-700 text-sm capitalize"
                  aria-required
                >
                  Postcode / ZIP *
                </label>
                <Field
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="custom-input-field"
                  required
                  placeholder="Ex, 95135"
                />
                <p className="form-validaton-error-message">
                  <ErrorMessage name="postalCode" />
                </p>
              </FormInputWrapper>
            </div>
            <div className="w-full flex flex-col items-stretch justify-start gap-2 mb-2">
              <FormInputWrapper dir="col">
                <label
                  htmlFor="additionalLandmarks"
                  className="font-medium text-Grey-700 text-sm capitalize"
                  aria-required
                >
                  additional Landmarks
                </label>
                <Field
                  type="text"
                  id="additionalLandmarks"
                  name="additionalLandmarks"
                  className="w-full custom-input-field"
                  placeholder="Ex, extra information about location.."
                />
                <p className="form-validaton-error-message">
                  <ErrorMessage name="additionalLandmarks" />
                </p>
              </FormInputWrapper>
              <FormInputWrapper dir="row">
                <Field
                  type="checkbox"
                  id="default-address"
                  name="default"
                  className="custom-input-field accent-Primary-700 w-5"
                  placeholder="Ex, extra information about location.."
                />
                <label
                  htmlFor="default-address"
                  className="font-medium text-Grey-800 text-sm capitalize"
                  aria-required
                >
                  use as a primary shipping address
                </label>
                <p className="form-validaton-error-message">
                  <ErrorMessage name="default" />
                </p>
              </FormInputWrapper>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-between mb-4 py-2">
              <CustomButton
                type="submit"
                extraClassName="rounded-full capitalize"
              >
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
              >
                clear
              </button>
            </div>
          </Form>
        </Formik>
      </motion.div>
    </motion.article>
  );
}

export default UserAddressForm;
