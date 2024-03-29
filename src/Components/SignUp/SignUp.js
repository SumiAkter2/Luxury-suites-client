import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Social from "../Social/Social";
import Button from "../Button/Button";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth);

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

    navigate("/");
  };

  return (
    <div
      className="hero font-serif"
      style={{ backgroundImage: "url(https://i.ibb.co/7gJMvks/room.png)" }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center ">
        <div className="max-w-lg py-12">
          <div className="py-12 rounded-lg hover:border-white border-2 backdrop-blur-sm backdrop-brightness-50 bg-white/30">
            <h1 className=" text-xl font-serif text-primary font-bold">
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
                    className="input border-b-4 focus:border-0  mt-2 input-primary input-sm  max-w-xs"
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
                    className="input border-b-4 focus:border-0  mt-2 input-primary input-sm  max-w-xs"
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
                    className="input border-b-4 focus:border-0  mt-2 input-primary input-sm  max-w-xs"
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
                    className="input border-b-4 focus:border-0  mt-2 input-primary input-sm  max-w-xs"
                    {...register("Number", { required: true })}
                  />
                  {/* error for num */}
                  <span className="label-text-alt text-white ">
                    {errors.Number?.type === "required" &&
                      "! Number is required"}
                  </span>
                </div>
              </div>
              <Button className=" mt-6 lg:w-80 w-48 ">Sign Up</Button>
            </form>

            {/* social */}
            <Social />
            <div className="mt-4 font-serif text-white text-sm flex justify-center">
              <p>Have An Account? </p>
              <Link to="/login" className="hover:text-primary pl-2">
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
