import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  if (user) {
    console.log("yes", user);
  }
  if (loading) {
    return <p>loading...</p>;
  }
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(
      data.Email,
      data.Password,
      data.Name,
      data.Number
    );
    console.log(data);
    navigate("/");
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
                  {/* name input */}
                  <input
                    type="text"
                    placeholder="Type Name"
                    className="input border-b-4 focus:border-0  mt-2 input-warning input-sm  max-w-xs"
                    {...register("Name", { required: true })}
                  />
                  {/* error for name */}
                  <span className="label-text-alt text-white ">
                    {errors.Name?.type === "required" && "! Name is required"}
                  </span>
                </div>
                {/* email Input */}
                <div className="grid">
                  <input
                    type="text"
                    placeholder="Type Email"
                    className="input border-b-4 focus:border-0  mt-2 input-warning input-sm  max-w-xs"
                    {...register("Email", { required: true })}
                  />
                  {/* error for email */}
                  <span className="label-text-alt text-white ">
                    {errors.Email?.type === "required" && "! Email is required"}
                  </span>
                </div>
              </div>
              {/* pass input */}
              <div className="lg:flex justify-center items-center gap-x-2">
                <div className="grid">
                  <input
                    type="text"
                    placeholder="Type Password"
                    className="input border-b-4 focus:border-0  mt-2 input-warning input-sm  max-w-xs"
                    {...register("Password", { required: true })}
                  />
                  {/* error for pass */}
                  <span className="label-text-alt text-white ">
                    {errors.Password?.type === "required" &&
                      "! Password is required"}
                  </span>
                </div>
                {/* num input */}
                <div className="grid">
                  <input
                    type="text"
                    placeholder="Type Number"
                    className="input border-b-4 focus:border-0  mt-2 input-warning input-sm  max-w-xs"
                    {...register("Number", { required: true })}
                  />
                  {/* error for num */}
                  <span className="label-text-alt text-white ">
                    {errors.Number?.type === "required" &&
                      "! Number is required"}
                  </span>
                </div>
              </div>
              <button className="button bg-secondary lg:w-80 w-48 ">
                Sign Up
              </button>
            </form>

            {/* social */}
            <Social />
            <div className="mt-4 font-serif text-black text-sm flex justify-center">
              <p>Have An Account? </p>
              <Link to="/login" className="text-white pl-2">
                Please Log IN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
