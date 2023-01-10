import {
  faArrowLeft,
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Subscribe from "../Home/Subscribe";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div
        className="hero h-56"
        style={{ backgroundImage: "url(https://i.ibb.co/7gJMvks/room.png)" }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-serif">Contact Us</h1>
            <p className="mb-5 text-xl font-serif">Get In Touch</p>
          </div>
        </div>
      </div>
      {/* detail contact */}
      <div className="lg:flex justify-evenly  items-center py-12 bg-yellow-200 px-12">
        <div>
          <h1 className="flex justify-start items-center ">
            <FontAwesomeIcon icon={faPhone} />
            <span className="text-3xl pl-2">Phone </span>
          </h1>
          <p className="mb-4">099999765534</p>
        </div>
        <div>
          <h1 className="flex justify-start items-center ">
            <FontAwesomeIcon icon={faMailBulk} />
            <span className="text-3xl pl-2">Email </span>
          </h1>
          <p className="mb-4">luxurySuites@gmail.com</p>
        </div>
        <div>
          <h1 className="flex justify-start items-center ">
            <FontAwesomeIcon icon={faLocation} />
            <span className="text-3xl pl-2">Location </span>
          </h1>
          <p className=" text-sm mb-4">
            4 apt. Flawing Street. The Grand <br />
            <span>Avenue. Liverpool, UK 33342</span>
          </p>
        </div>
      </div>
      <div>
        <form
          className="mt-6  p-6 rounded-md lg:w-96 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-3xl font-serif mb-6 text-center">
            Give us your info
          </h1>
          <div className="grid justify-center items-center">
            <input
              type="text"
              name="email"
              placeholder="Type Email"
              className="input border-b-4 focus:border-0  input-warning input-sm w-60 max-w-xs mb-2"
              {...register("Email", { required: true })}
            />

            <span className="label-text-alt text-red-500 ">
              {errors.Email?.type === "required" && "! Email is required"}
            </span>
          </div>

          <div className="grid justify-center items-center">
            <input
              type="text"
              placeholder="Type Password"
              className="input border-b-4 focus:border-0  input-warning input-sm w-60 max-w-xs"
              {...register("Password", { required: true })}
            />

            <span className="label-text-alt text-red-500 ">
              {errors.Password?.type === "required" && "! Password is required"}
            </span>
          </div>
          <div className="grid justify-center items-center">
            <textarea
              type="text"
              name="email"
              placeholder="Type Here"
              className="textarea border-b-4 focus:border-0  textarea-warning textarea-sm w-60 max-w-xs mb-2 mt-2"
              {...register("TextArea", { required: true })}
            />

            <span className="label-text-alt text-red-500 ">
              {errors.TextArea?.type === "required" && "! TextArea is required"}
            </span>
          </div>
          <div className="flex justify-center items-center">
            <button className="button bg-yellow-300 w-48  ">Submit</button>
          </div>
        </form>
      </div>
      <div className="bg-yellow-200 py-12">
        <Subscribe />
      </div>

      <div className=" flex justify-center my-6">
        <p className="cursor-pointer p-2  text-2xl">
          <FontAwesomeIcon icon={faArrowLeft} /> <Link to="/"> Go Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Contact;
