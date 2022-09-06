import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div
      className="hero font-serif"
      style={{ backgroundImage: "url(https://i.ibb.co/9ZKpt34/room5.png)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center ">
        <div className="max-w-md">
          <h1 className="text-4xl text-center my-6 text-white">Review Us</h1>
          <div className="p-4  mt-6  lg:w-80  mb-24  rounded-lg hover:border-white border-2 ">
            <div className="font-serif">
              <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid justify-center items-center">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Type Name"
                    class="input border-b-4 focus:border-0  input-warning input-sm w-60 max-w-xs mb-2"
                    {...register("Name", { required: true })}
                  />

                  <span class="label-text-alt text-white ">
                    {errors.Name?.type === "required" && "! Name is required"}
                  </span>
                </div>

                <div className="grid justify-center items-center">
                  <input
                    type="text"
                    placeholder="Type Address"
                    class="input border-b-4 focus:border-0  input-warning input-sm w-60 max-w-xs"
                    {...register("Address", { required: true })}
                  />

                  <span class="label-text-alt text-white ">
                    {errors.Address?.type === "required" &&
                      "! Address is required"}
                  </span>
                </div>
                <div className="grid justify-center items-center mt-2">
                  <select
                    name="Ratting"
                    type="text"
                    placeholder="Type Ratting"
                    class="select border-b-4 focus:border-0  select-warning select-sm w-60 max-w-xs"
                    {...register("Ratting", { required: true })}
                  >
                    <option selected>5</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>

                  <span class="label-text-alt text-white ">
                    {errors.Address?.type === "required" &&
                      "! Ratting is required"}
                  </span>
                </div>
                <div className="grid justify-center items-center mt-2">
                  <textarea
                    name="comment"
                    type="text"
                    placeholder="Type comment"
                    class="textarea border-b-4 focus:border-0  textarea-warning textarea-sm w-60 max-w-xs"
                    {...register("comment", { required: true })}
                  />

                  <span class="label-text-alt text-white ">
                    {errors.Address?.type === "required" &&
                      "! Comment is required"}
                  </span>
                </div>
                <button className="button bg-yellow-200 w-48 ">
                  Review Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
