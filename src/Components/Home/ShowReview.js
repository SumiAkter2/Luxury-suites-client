import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShowReview = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://luxury-suites-server-production.up.railway.app/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="bg-yellow-100 mt-2 p-6">
      <h1 className="text-3xl text-center my-12 ">Clients Testimonial</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-12 ">
        {review.slice(0, 3).map((r) => (
          <div className="card flex  justify-center items-center  shadow-xl text-center p-4 bg-yellow-200">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt="man-pic" />
              </div>
            </div>

            <h2>{r.name}</h2>
            <h2>{r.address}</h2>
            <h2 className="flex">
              {star}
              {star}
              {star}
              {star}
              {star}
            </h2>
            <p className="mt-2 text-xs">{r.comment}</p>
          </div>
        ))}
        <div>
          <button>
            <Link to="/dashboard/review">Add Review</Link>
          </button>
        </div>
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
