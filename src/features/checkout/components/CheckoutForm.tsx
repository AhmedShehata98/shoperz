import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import { routes } from "@/constants/Routes";
import { ImSpinner8 } from "react-icons/im";
import { useSelector } from "react-redux";
import { selectAppState } from "@/redux/slices/app.slice";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/router";

type Props = {};

function CheckoutForm() {
  const { clientSecret } = useSelector(selectAppState);
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [originName, setOriginName] = useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "accordion",
  };
  console.log(router);
  useEffect(() => {
    const origin = window.location.origin;
    setOriginName(origin);
  }, []);
  useEffect(() => {
    if (!stripe) return;
    if (!clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          toast.success("payment succeeded .");
          break;
        case "processing":
          toast.info("payment is under processing now ...");
          break;
        case "requires_payment_method":
          toast.error("Your payment was not successful, please try again.");
          break;
        default:
          toast.warn("Something went wrong !!!");
      }
    });
  }, [clientSecret]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${originName}/${routes.orderCompleted}`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      toast.error(error.message);
    } else {
      toast.error("An unexpected error occurred.");
    }
    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="mt-6 mb-3">
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.value.email)}
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />

      <CustomButton
        extraClassName="w-full mt-2"
        disabled={isLoading || !stripe}
        id="submit"
      >
        {!isLoading && stripe && <p>pay now</p>}
        {isLoading ||
          (!stripe && (
            <ImSpinner8 className="inline-block text-xl animate-spin" />
          ))}
      </CustomButton>
    </form>
  );
}

export default CheckoutForm;
