import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TiArrowForward } from "react-icons/ti";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper";
import { Pagination, Navigation } from "swiper";

import { CgPhone } from "react-icons/cg";

const ExtraServices = () => {
  const extraServices = [
    {
      id: 1,
      name: "ROOM CLEANING",
      price: 50,
      img: "https://i.ibb.co/G78VHdh/room-cleaning.jpg",
      work1: "Hotel ipsum dolor sit amet.",
      work2: "Toils ipsum dolor sit amet.",
      work3: "Loban ipsum dolor sit amet.",
    },
    {
      id: 2,
      name: "CLOTH WASHING",
      price: 40,
      img: "https://i.ibb.co/cbxVgn4/cloth.jpg",
      work1: "Hotel ipsum dolor sit amet.",
      work2: "Toils ipsum dolor sit amet.",
      work3: "Loban ipsum dolor sit amet.",
    },
    {
      id: 3,
      name: "DRINKS INCLUDES",
      price: 60,
      img: "https://i.ibb.co/KbG84LV/drinks.jpg",
      work1: "Hotel ipsum dolor sit amet.",
      work2: "Toils ipsum dolor sit amet.",
      work3: "Loban ipsum dolor sit amet.",
    },
    {
      id: 4,
      name: "ROOM CLEANING",
      price: 50,
      img: "https://i.ibb.co/G78VHdh/room-cleaning.jpg",
      work1: "Hotel ipsum dolor sit amet.",
      work2: "Toils ipsum dolor sit amet.",
      work3: "Loban ipsum dolor sit amet.",
    },
    {
      id: 5,
      name: "CLOTH WASHING",
      price: 40,
      img: "https://i.ibb.co/cbxVgn4/cloth.jpg",
      work1: "Hotel ipsum dolor sit amet.",
      work2: "Toils ipsum dolor sit amet.",
      work3: "Loban ipsum dolor sit amet.",
    },
    {
      id: 6,
      name: "DRINKS INCLUDES",
      price: 60,
      img: "https://i.ibb.co/KbG84LV/drinks.jpg",
      work1: "Hotel ipsum dolor sit amet.",
      work2: "Toils ipsum dolor sit amet.",
      work3: "Loban ipsum dolor sit amet.",
    },
  ];
  return (
    <div className="lg:flex grid justify-between items-center bg-gray-900 text-info">
      <div className="lg:w-1/3 p-6 lg:p-12">
        <p className="text-xs mb-6 tracking-[.50em]"> Best Prices</p>
        <h1 className="lg:text-5xl text-3xl my-6 text-primary">
          Extra Services
        </h1>
        <p className="leading-7 mb-4">
          The best prices for your relaxing vacation. The utanislen quam
          nestibulum ac quame odion elementum sceisue the aucan.
        </p>
        <p>
          Orci varius natoque penatibus et magnis disney parturient monte
          nascete ridiculus mus nellen etesque habitant morbine.
        </p>

        <div className="mt-6 flex items-center gap-x-2">
          <CgPhone size="45px" color="#a87932" />
          <div>
            <p>For Any Need</p>
            <p> +90877666</p>
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 p-6 lg:p-12">
        <Swiper
          pagination={{
            type: "progressbar",
            clickable: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          style={{
            "--swiper-pagination-color": "#a87932",
          }}
          slidesPerView={2}
          spaceBetween={10}
          grabCursor={true}
        >
          {extraServices.map((service) => (
            <>
              <SwiperSlide key={service.id}>
                <div className="p-6 bg-white">
                  <img
                    src={service.img}
                    alt="service-img"
                    className="w-full h-56"
                  />
                  <div className="lg:p-6">
                    <h1 className="lg:text-3xl text-xl mt-6 text-primary">
                      {service.name}
                    </h1>
                    <h1 className="lg:text-3xl text-xl my-6">
                      $ {service.price}/Daily
                    </h1>
                    <p className="flex items-center gap-x-2">
                      <TiArrowForward fill="#a87932" size="30px" />
                      {service.work1}
                    </p>
                    <p className="flex items-center gap-x-2">
                      <TiArrowForward fill="#a87932" size="30px" />
                      {service.work2}
                    </p>
                    <p className="flex items-center gap-x-2">
                      <TiArrowForward fill="#a87932" size="30px" />
                      {service.work3}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
          {/* <SwiperSlide></SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default ExtraServices;
