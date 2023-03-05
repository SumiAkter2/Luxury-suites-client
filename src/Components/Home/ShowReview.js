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
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="bg-white mt-2 p-6">
      <h1 className="text-3xl text-center my-12 pb-12">Clients Testimonial</h1>

      <div className=" hidden lg:block">
        <div>
          <Swiper
            style={{
              "--swiper-pagination-color": "#a87932",
            }}
            slidesPerView={1}
            spaceBetween={0}
            grabCursor={true}
            autoplay={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper swiper"
          >
            {review.map((r) => (
              <>
                <SwiperSlide key={r._id} className="lg:w-full overflow-visible">
                  <div
                    className="hero h-screen"
                    style={{
                      backgroundImage:
                        "url(https://i.ibb.co/LhpgD4N/room10.png)",
                    }}
                  >
                    <div className="hero-overlay bg-black bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                      <div className="max-w-md text-white">
                        <h1 className="mb-5 text-4xl font-serif">
                         Our Clients Say
                        </h1>
                        <p>We provide the best services for our clients</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="overflow-visible">
                    <div className="overflow-visible  justify-center items-center  shadow-xl text-center bg-secondary lg:p-6 h-80 lg:w-80 mx-auto w-48  ">
                      <div className="avatar mt-[-100px] review-img mb-">
                        <div className="w-24 rounded-full ">
                          <img
                            src="https://placeimg.com/192/192/people"
                            alt="clients-pic"
                          />
                        </div>
                      </div>
                      <h2>{r.name}</h2>
                      <h2>{r.address}</h2>
                      <h2 className="flex mt-2 justify-center">
                        {star}
                        {star}
                        {star}
                        {star}
                        {star}
                      </h2>
                      <p className="mt-2 text-sm p-6 leading-6">{r.comment}</p>
                    </div>
                  </div> */}
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto lg:hidden">
        {review.slice(0, 3).map((r) => (
          <div
            key={review._id}
            className="card lg:flex  justify-center items-center  shadow-xl text-center bg-secondary p-6 h-80 w-80 mx-auto "
          >
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
            <h2 className="flex mt-2"></h2>
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
