import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
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
    <div className="bg-yellow-100 mt-2 p-6">
      <h1 className="text-3xl text-center my-12 pb-12">Clients Testimonial</h1>

      <div className=" hidden lg:block">
        <div>
          <Swiper
            style={{
              "--swiper-pagination-color": "yellow",
            }}
            slidesPerView={3}
            spaceBetween={0}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper swiper"
          >
            {review.map((r) => (
              <>
                <SwiperSlide key={r._id} className="lg:w-full ">
                  <div className="card flex  justify-center items-center  shadow-xl text-center bg-yellow-200 lg:p-6 h-80 lg:w-80 mx-auto w-48">
                    <div className="avatar">
                      <div className="w-24 rounded-full m-6">
                        <img
                          src="https://placeimg.com/192/192/people"
                          alt="clients-pic"
                        />
                      </div>
                    </div>
                    <h2>{r.name}</h2>
                    <h2>{r.address}</h2>
                    <h2 className="flex mt-2">
                      {star}
                      {star}
                      {star}
                      {star}
                      {star}
                    </h2>
                    <p className="mt-2 text-sm p-6 leading-6">{r.comment}</p>
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide> */}
              </>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto lg:hidden">
        {review.slice(0, 3).map((r) => (
          <div className="card lg:flex  justify-center items-center  shadow-xl text-center bg-yellow-200 p-6 h-80 w-80 mx-auto ">
            <div className="avatar">
              <div className="w-24 rounded-full m-6">
                <img
                  src="https://placeimg.com/192/192/people"
                  alt="clients-pic"
                />
              </div>
            </div>
            <h2>{r.name}</h2>
            <h2>{r.address}</h2>
            <h2 className="flex mt-2">
              {star}
              {star}
              {star}
              {star}
              {star}
            </h2>
            <p className="mt-2 text-sm p-6 leading-6">{r.comment}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center ">
        <button className=" btn btn-primary mt-24">
          <Link to="/dashboard/review ">Add Review</Link>
        </button>
      </div>
    </div>
  );
};

export default ShowReview;
const star = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    width="10px"
    fill="orange"
  >
    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
  </svg>
);
