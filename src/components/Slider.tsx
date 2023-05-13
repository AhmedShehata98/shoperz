import React from "react";
import controller from "../assets/sliders/ds4_controller1-slide.png";
import iphone from "../assets/sliders/iph1-slide.png";
import Watches from "../assets/sliders/Watche1-slide.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import Slide from "./Slide";

type Props = {};

const Slider = (props: Props) => {
  const swiper = useSwiper();

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
      }}
      pagination={{
        el: ".custom-home-slideshow-paginition",
        clickable: true,
        renderBullet: (index, className) => {
          return '<span class="' + className + '">' + "</span>";
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-full"
    >
      <div className="custom-home-slideshow-paginition"></div>
      <SwiperSlide>
        <Slide
          bg={`bg-gradient-to-r from-[#F1FFF8] to-[#C4F4FF]`}
          src={iphone}
          title={
            <>
              new <b>Iphone 14 pro max </b> <br /> release this fall
            </>
          }
          name="iphone 14 pro"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          bg={`bg-gradient-to-r from-[#FFFCF3] to-[#FFDFDF]`}
          src={Watches}
          title={
            <>
              <b>playbox </b> console <br /> x245-HD
            </>
          }
          name="iphone 14 pro"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          bg={`!bg-gradient-to-r !from-[#FEF3FD] !to-[#CBCDFF]`}
          src={controller}
          title={
            <>
              keep your shape with all new <b>gadgates</b>
            </>
          }
          name="iphone 14 pro"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
