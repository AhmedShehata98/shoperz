import React from "react";
import controller from "../assets/sliders/ds4_controller1-slide.png";
import iphone from "../assets/sliders/iph1-slide.png";
import Watches from "../assets/sliders/Watche1-slide.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import Slide from "./Slide";

type Props = {};

const Slider = (props: Props) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
        }}
        pagination={{
          clickable: true,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className=" w-full"
      >
        <SwiperSlide>
          <div className={`bg-gradient-to-r from-[#F1FFF8] to-[#C4F4FF]`}>
            <Slide
              src={iphone}
              title="NEW RELEASE THIS FALL"
              name="iphone 14 pro"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`bg-gradient-to-r from-[#FFFCF3] to-[#FFDFDF]`}>
            <Slide
              src={Watches}
              title="NEW RELEASE THIS FALL"
              name="iphone 14 pro"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={"!bg-gradient-to-r !from-[#FEF3FD] !to-[#CBCDFF]"}
        >
          <Slide
            src={controller}
            title="NEW RELEASE THIS FALL"
            name="iphone 14 pro"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
