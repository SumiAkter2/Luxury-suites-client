import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Review.css";

const ShowReview = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://luxury-suites-server-production.up.railway.app/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="bg-white mt-2 p-6">
      <h1 className="text-3xl lg:text-5xl text-center my-12 pb-12">
        Clients Testimonial
      </h1>

      <div data-aos="zoom-in" data-aos-duration="800">
        <div
          className="hero lg:h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/LhpgD4N/room10.png)",
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-60"></div>
          <Swiper
            style={{
              "--swiper-pagination-color": "#fff",
              "--swiper-navigation-color": "#fff",
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={0}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper swiper"
          >
            {review.map((r) => (
              <div key={r._id}>
                <SwiperSlide className="lg:w-full ">
                  <div className="hero-content  text-neutral-content h-96 mb-12">
                    <div className="max-w-md text-white text-center">
                      <h1 className="mb-5 text-sm font-serif tracking-[5px]">
                        Testimonials
                      </h1>
                      <h1 className="mb-5 text-3xl lg:text-5xl font-serif">
                        Our Clients Say
                      </h1>
                      <div>
                        <p className="mt-2 text-sm p-6 leading-6">
                          {r.comment}
                        </p>
                        <p className="text-xs flex items-center justify-center">
                          <AiFillStar color="#a87932" />
                          <AiFillStar color="#a87932" />
                          <AiFillStar color="#a87932" />
                          <AiFillStar color="#a87932" />
                          <AiFillStar color="#a87932" />
                        </p>
                        <div className="flex justify-center pt-6">
                          <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                              <img
                                src="https://i.ibb.co/rHHJGXH/women2.jpg"
                                alt="Girl-img"
                              />
                            </div>
                          </div>
                          <div className="pl-4 text-center">
                            <h1 className="font-bold ">{r.name}</h1>
                            <h1 className="font-bold ">{r.address}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <button className=" btn btn-primary mt-24">
          <Link to="/dashboard/review ">Add Your Review</Link>
        </button>
      </div>
    </div>
  );
};

export default ShowReview;
