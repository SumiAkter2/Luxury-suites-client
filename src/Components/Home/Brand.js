import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import logo1 from "../../img/brand1.png";
import logo2 from "../../img/brand2.png";
import logo3 from "../../img/brand3.png";
import logo4 from "../../img/brand4.png";
import logo6 from "../../img/brand5.png";
import logo5 from "../../img/brand6.png";

import { Autoplay } from "swiper";

const Brand = () => {
  return (
    <div>
      <div className="hero bg-gray-200">
        <div className="hero-content text-white p-6 ">
          <Swiper
            autoplay={{
              delay: 900,
              disableOnInteraction: false,
            }}
            // loop={true}
            slidesPerView={3}
            spaceBetween={30}
            modules={[Autoplay]}
            className="mySwiper mt-12 overflow-hidden"
          >
            <SwiperSlide>
              <img src={logo1} className="w-12 h-12 " alt="brand-logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo2} className="h-12 w-12 " alt="brand-logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo3} className="w-12 h-12 " alt="brand-logo" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={logo4} className="w-18 h-12 " alt="brand-logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo5} className="w-12 h-12 " alt="brand-logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo6} className="w-12 h-12 " alt="brand-logo" />
            </SwiperSlide>
            {/* <SwiperSlide className="my-6">
              <img src={logo1} className="w-12 h-12 " alt="brand-logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo2} className="h-12 w-12 " alt="brand-logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo3} className="w-12 h-12 " alt="brand-logo" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={logo4} className="w-18 h-12 " alt="brand-logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo5} className="w-12 h-12 " alt="brand-logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={logo6} className="w-12 h-12 " alt="brand-logo" />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Brand;
