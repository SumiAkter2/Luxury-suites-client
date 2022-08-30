import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import "../LogIn/Login.css";
import Social from "../Social/Social";
const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.Email, data.Password);
    console.log(data);
  };
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
            <Social />
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