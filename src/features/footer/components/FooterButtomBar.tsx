import Image from "next/image";
import React from "react";
import visaLogo from "@/assets/icons/visa.png";
import mastercardLogo from "@/assets/icons/mastercard.svg";
import paypalLogo from "@/assets/icons/paypal.svg";
import cashLogo from "@/assets/icons/cash-on-delivery.png";

function FooterButtomBar() {
  return (
    <section className="border-t bg-Grey-100 border-Grey-300 py-1 mt-12 px-3">
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row justify-between items-start gap-3">
        <p className="text-gray-500">© Shoperz 2023 - All Rights Reserved</p>
        <div className="flex items-center gap-9 lg:gap-6">
          <Image src={visaLogo} alt="payments-logo" />
          <Image src={mastercardLogo} alt="payments-logo" />
          <Image src={paypalLogo} alt="payments-logo" />
          <Image src={cashLogo} alt="payments-logo" />
        </div>
      </div>
    </section>
  );
}

export default FooterButtomBar;
