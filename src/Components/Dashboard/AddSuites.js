import React from "react";
import { useForm } from "react-hook-form";

const AddSuites = () => {
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
        className="hero font-serif"
        style={{ backgroundImage: "url(https://i.ibb.co/ZhxLNjN/balcony.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center ">
          <div className="max-w-md">
            <h1 className="text-4xl text-center my-6 text-white">
              Add A New Suites
            </h1>
            <div className="p-4  mt-6    mb-24  rounded-lg hover:border-white border-2 ">
              <div className="font-serif">
                <form className="mt-6 " onSubmit={handleSubmit(onSubmit)}>
                  <div className=" lg:flex">
                    <div className="grid justify-center items-center">
                      <input
                        type="text"
                        name="Name"
                        placeholder="Type Name"
                        className="input border-b-4 focus:border-0  input-warning input-sm  max-w-xs mb-2  ml-2"
                        {...register("Name", { required: true })}
                      />

                      <span className="label-text-alt text-white ">
                        {errors.Name?.type === "required" &&
                          "! Name is required"}
                      </span>
                    </div>
                    <div className="grid justify-center items-center">
                      <input
                        type="text"
                        name="Price"
                        placeholder="Type Price"
                        className="input border-b-4 focus:border-0  input-warning input-sm  max-w-xs mb-2  ml-2"
                        {...register("Price", { required: true })}
                      />

                      <span className="label-text-alt text-white ">
                        {errors.Price?.type === "required" &&
                          "! Price is required"}
                      </span>
                    </div>
                  </div>
                  <div className=" lg:flex">
                    <div className="grid justify-center items-center">
                      <input
                        type="text"
                        name="Square"
                        placeholder="Type Square"
                        className="input border-b-4 focus:border-0  input-warning input-sm  max-w-xs mb-2  ml-2"
                        {...register("Square", { required: true })}
                      />

                      <span className="label-text-alt text-white ">
                        {errors.Square?.type === "required" &&
                          "! Square is required"}
                      </span>
                    </div>
                    <div className="grid justify-center items-center">
                      <input
                        type="text"
                        placeholder="Type Address"
                        className="input border-b-4 focus:border-0  input-warning input-sm  max-w-xs  ml-2"
                        {...register("Address", { required: true })}
                      />

                      <span className="label-text-alt text-white ">
                        {errors.Address?.type === "required" &&
                          "! Address is required"}
                      </span>
                    </div>
                  </div>
                  <div className="grid justify-center items-center">
                    <input
                      type="file"
                      className="input border-b-4 focus:border-0  input-warning input-sm  max-w-xs my-2 ml-2"
                      {...register("Photo", { required: true })}
                    />

                    <span className="label-text-alt text-white ">
                      {errors.Photo?.type === "required" &&
                        "! Photo is required"}
                    </span>
                  </div>

                  <div className="grid justify-center items-center mt-4">
                    <textarea
                      name="Description"
                      type="text"
                      placeholder="Type Description"
                      className="textarea border-b-4 lg:w-96 ml-2 focus:border-0  textarea-warning textarea-sm max-w-xs"
                      {...register("Description", { required: true })}
                    />

                    <span className="label-text-alt text-white ">
                      {errors.Description?.type === "required" &&
                        "! Description is required"}
                    </span>
                  </div>
                  <div className=" lg:flex">
                    <div className="grid justify-center items-center mt-2">
                      <select
                        name="Bed"
                        type="text"
                        placeholder="Type Bed"
                        className="select border-b-4 focus:border-0  select-warning select-sm max-w-xs  ml-2"
                        {...register("Bed", { required: true })}
                      >
                        <option selected>1 King Bed</option>
                        <option>2 Single Bed</option>
                        <option>2 King Bed</option>
                        <option>1 Double Bed</option>
                        <option>1 Single Bed</option>
                      </select>

                      <span className="label-text-alt text-white ">
                        {errors.Bed?.type === "required" && "! Bed is required"}
                      </span>
                    </div>
                    <div className="grid justify-center items-center mt-2">
                      <select
                        name="Guest"
                        type="text"
                        placeholder="Type Guest"
                        className="select border-b-4 focus:border-0  select-warning select-sm  max-w-xs  ml-2"
                        {...register("Guest", { required: true })}
                      >
                        <option selected>5 Guest</option>
                        <option>1 Guest</option>
                        <option>2 Guest</option>
                        <option>3 Guest</option>
                        <option>4 Guest</option>
                      </select>

                      <span className="label-text-alt text-white ">
                        {errors.Guest?.type === "required" &&
                          "! Guest is required"}
                      </span>
                    </div>
                    <div className="grid justify-center items-center mt-2">
                      <select
                        name="Ratting"
                        type="text"
                        placeholder="Type Ratting"
                        className="select border-b-4 focus:border-0  select-warning select-sm  max-w-xs lg:w-28 ml-2"
                        {...register("Ratting", { required: true })}
                      >
                        <option selected>5/5</option>
                        <option>1/5</option>
                        <option>2/5</option>
                        <option>3/5</option>
                        <option>4/5</option>
                      </select>

                      <span className="label-text-alt text-white ">
                        {errors.Ratting?.type === "required" &&
                          "! Ratting is required"}
                      </span>
                    </div>
                  </div>

                  <button className="button bg-yellow-200 w-48 ">
                    Add Suites
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSuites;
