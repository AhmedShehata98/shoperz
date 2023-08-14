import useGetToken from "@/hooks/useGetToken";
import { selectAppState } from "@/redux/slices/app.slice";
import { useGetStripePublishableKeyQuery } from "@/services/shoperzApi.service";
import { Elements } from "@stripe/react-stripe-js";
import {
  Stripe,
  StripeElementsOptionsClientSecret,
  loadStripe,
} from "@stripe/stripe-js";
import { Appearance } from "@stripe/stripe-js";
import React from "react";
import { useSelector } from "react-redux";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

function PaymentWrapper({ children }: Props) {
  const { token } = useGetToken();
  const { clientSecret, paymentMethod } = useSelector(selectAppState);
  const { data: PKResponse, isSuccess: isSuccessGetPK } =
    useGetStripePublishableKeyQuery({ token }, { skip: token ? false : true });
  const appearance: Appearance = {
    theme: "stripe",
  };
  const stripeOptions: StripeElementsOptionsClientSecret = {
    clientSecret: clientSecret!,
    appearance,
  };

  return (
    <div className="basis-2/3 max-lg:w-full flex flex-col pt-5">
      {/* order method menu */}
      {React.Children.toArray(children).filter(
        (component) => (component as any)?.key !== ".$checkout-form"
      )}
      {/* stripe */}
      {clientSecret && isSuccessGetPK && paymentMethod === "card" && (
        <Elements
          options={stripeOptions}
          stripe={loadStripe(PKResponse?.data.pk as string)}
        >
          {React.Children.toArray(children).filter(
            (component) => (component as any)?.key === ".$checkout-form"
          )}
        </Elements>
      )}
    </div>
  );
}

export default PaymentWrapper;
