import React from "react";
import { useForm } from "react-hook-form";
import "../LogIn/Login.css";
const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div
      className="hero  font-serif"
      style={{ backgroundImage: "url(https://i.ibb.co/9ZKpt34/room5.png)" }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center ">
        <div className="max-w-lg">
          <div className="   py-12   rounded-lg hover:border-white border-2 ">
            <h1 className=" text-xl font-serif  text-black">
              Create A New Account
            </h1>
            {/* form */}
            <form className="mt-6  px-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="lg:flex  justify-center items-center gap-x-2">
                <div className="grid ">
                  <input
                    type="text"
                    placeholder="Type Name"
                    class="input border-b-4 focus:border-0  mt-2 input-warning input-sm  max-w-xs"
                    {...register("Name", { required: true })}
                  />

                  <span class="label-text-alt text-white ">
                    {errors.Name?.type === "required" && "! Name is required"}
                  </span>
                </div>

                <div className="grid">
                  <input
                    type="text"
                    placeholder="Type Email"
                    class="input border-b-4 focus:border-0  mt-2 input-warning input-sm  max-w-xs"
                    {...register("Email", { required: true })}
                  />

                  <span class="label-text-alt text-white ">
                    {errors.Email?.type === "required" && "! Email is required"}
                  </span>
                </div>
              </div>

              <div className="lg:flex justify-center items-center gap-x-2">
                <div className="grid">
                  <input
                    type="text"
                    placeholder="Type Password"
                    class="input border-b-4 focus:border-0  mt-2 input-warning input-sm  max-w-xs"
                    {...register("Password", { required: true })}
                  />

                  <span class="label-text-alt text-white ">
                    {errors.Password?.type === "required" &&
                      "! Password is required"}
                  </span>
                </div>

                <div className="grid">
                  <input
                    type="text"
                    placeholder="Type Number"
                    class="input border-b-4 focus:border-0  mt-2 input-warning input-sm  max-w-xs"
                    {...register("Number", { required: true })}
                  />

                  <span class="label-text-alt text-white ">
                    {errors.Number?.type === "required" &&
                      "! Number is required"}
                  </span>
                </div>
              </div>
              <button className="button bg-yellow-200 lg:w-80 w-48 ">
                Sign Up
              </button>
            </form>

            {/* social */}
            <div className="flex justify-center items-center gap-x-6 mt-6 bg-yellow-200 lg:w-80 w-48 mx-auto rounded-lg p-1">
              <img
                className="w-8 h-8"
                src="https://i.ibb.co/ByzF7HZ/google-removebg-preview.png"
                alt=""
              />
              <img
                className="w-8 h-8"
                src="https://i.ibb.co/F4yknXJ/facebook.png"
                alt=""
              />
              <img
                className="w-6 h-6"
                src="https://i.ibb.co/chk4SZH/github.png"
                alt=""
              />
            </div>
            <div className="mt-4 font-serif text-black text-sm flex justify-center">
              <p>Have An Account? </p>
              <p>Please Log IN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
