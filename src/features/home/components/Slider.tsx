import React from "react";
import controller from "@/assets/sliders/ds4_controller1-slide.png";
import iphone from "@/assets/sliders/iph1-slide.png";
import Watches from "@/assets/sliders/Watche1-slide.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
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
        className=" w-full"
      >
        <SwiperSlide>
          <div className={`bg-gradient-to-r from-[#F1FFF8] to-[#C4F4FF]`}>
            <Slide
              src={iphone}
              title={
                <>
                  <p>new</p>
                  <b className="text-4xl">Iphone 14 Pro max</b>
                  <p>release this fall</p>
                </>
              }
              name="iphone 14 pro"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`bg-gradient-to-r from-[#FFFCF3] to-[#FFDFDF]`}>
            <Slide
              src={Watches}
              title={
                <>
                  <b className="text-4xl">playbox</b>
                  <p>console</p>
                  <br />
                  <p>x245-HD</p>
                </>
              }
              name="iphone 14 pro"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={"!bg-gradient-to-r !from-[#FEF3FD] !to-[#CBCDFF]"}
        >
          <Slide
            src={controller}
            title={
              <>
                <p>keep your shape with all new</p>
                <b className="text-4xl">gadgets</b>
              </>
            }
            name="iphone 14 pro"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
