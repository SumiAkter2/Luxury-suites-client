import {
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";

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
      <div className="lg:flex justify-evenly  items-center px-6">
        <div className="my-6 bg-yellow-200 p-4 rounded-md mr-6 ">
          <h1 className="flex justify-start items-center ">
            <FontAwesomeIcon icon={faPhone} />
            <span className="text-3xl pl-2">Phone </span>
          </h1>
          <p className="mb-4">099999765534</p>
          <h1 className="flex justify-start items-center ">
            <FontAwesomeIcon icon={faMailBulk} />
            <span className="text-3xl pl-2">Email </span>
          </h1>
          <p className="mb-4">luxurySuites@gmail.com</p>
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
            className="my-6 bg-yellow-200 p-6 rounded-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-2xl font-serif mb-4 ">Sent Email </h1>
            <div className="grid justify-center items-center">
              <input
                type="text"
                name="email"
                placeholder="Type Email"
                class="input border-b-4 focus:border-0  input-warning input-sm w-60 max-w-xs mb-2"
                {...register("Email", { required: true })}
              />

              <span class="label-text-alt text-red-500 ">
                {errors.Email?.type === "required" && "! Email is required"}
              </span>
            </div>

            <div className="grid justify-center items-center">
              <input
                type="text"
                placeholder="Type Password"
                class="input border-b-4 focus:border-0  input-warning input-sm w-60 max-w-xs"
                {...register("Password", { required: true })}
              />

              <span class="label-text-alt text-red-500 ">
                {errors.Password?.type === "required" &&
                  "! Password is required"}
              </span>
            </div>
            <div className="grid justify-center items-center">
              <textarea
                type="text"
                name="email"
                placeholder="Type Here"
                class="textarea border-b-4 focus:border-0  textarea-warning textarea-sm w-60 max-w-xs mb-2 mt-2"
                {...register("TextArea", { required: true })}
              />

              <span class="label-text-alt text-red-500 ">
                {errors.TextArea?.type === "required" &&
                  "! TextArea is required"}
              </span>
            </div>
            <button className="button bg-yellow-200 w-48 ml-6">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
