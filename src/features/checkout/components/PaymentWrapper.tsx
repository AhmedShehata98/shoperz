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

function PaymentWrapper(props: any) {
  const { token } = useGetToken();
  const { clientSecret } = useSelector(selectAppState);
  const { data: PKResponse, isSuccess: isSuccessGetPK } =
    useGetStripePublishableKeyQuery({ token }, { skip: token ? false : true });
  const appearance: Appearance = {
    theme: "stripe",
  };
  const stripeOptions: StripeElementsOptionsClientSecret = {
    clientSecret,
    appearance,
  };

  // useCreateOrderMutation
  // const renderStripeCheckoutForm = (
  //   stripeOptions: StripeElementsOptionsClientSecret,
  //   pk: Promise<Stripe | null>
  // ) => {
  //   return React.Children.map(props.children.at(1), (child) =>
  //     React.cloneElement(child, { stripeOptions, pk })
  //   );
  // };

  return (
    <div className="basis-2/3 max-lg:w-full flex flex-col pt-5">
      {/* order method menu */}
      {props.children.at(0)}
      {/* stripe */}
      {clientSecret && isSuccessGetPK && PKResponse?.data.pk && (
        <Elements
          options={stripeOptions}
          stripe={loadStripe(PKResponse?.data.pk as string)}
        >
          {props.children.at(1)}
        </Elements>
      )}
    </div>
  );
}

export default PaymentWrapper;
