import React from "react";
import Banner from "./Banner";
import JBL from "@/assets/banner/JBL-Audio-Speakers-PNG-Background-Image 1.png";
import JoyStick from "@/assets/banner/shop-game.svg";

type Props = {};

const Banners = (props: Props) => {
  return (
    <div className="container max-w-5xl pb-10 mx-auto">
      <div className="grid lg:grid-cols-2 justify-center items-center gap-x-8 max-lg:gap-y-8">
        <Banner
          bannerImage={JBL}
          title={
            <>
              PORTABLE SPEAKERS COLLECTION{" "}
              <strong className="font-bold">2023</strong>
            </>
          }
          gradiantColot={{ from: "#F2FFF7", to: "#C3F4FF" }}
        />
        <Banner
          bannerImage={JoyStick}
          title={
            <>
              all accessories <br /> for{" "}
              <strong className="font-bold">Gamers</strong>
            </>
          }
          gradiantColot={{ from: "#FAF1FE", to: "#D0D1FF" }}
        />
      </div>
    </div>
  );
};
export default Banners;
