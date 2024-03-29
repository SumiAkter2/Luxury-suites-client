import React from "react";
import { useForm } from "react-hook-form";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Social from "../Social/Social";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
const LogIn = () => {
  // const [email, setEmail] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, loading] =
    useSignInWithEmailAndPassword(auth);
  // const [sendPasswordResetEmail, sending, error] =
  //   useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  //   if (loading) {
  //   return <Loading/>

  // }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.Email, data.Password);
    console.log(data);

    navigate("/");
    // const resetPass = () => {
    //   alert("sure?");
    //   sendPasswordResetEmail(data.Email);
    //   console.log("done");
    // };
  };

  // if (error) {
  //   return (
  //     <div>
  //       <p>Error: {error.message}</p>
  //     </div>
  //   );
  // }
  // if (sending) {
  //   return <p>Sending...</p>;
  // }
  return (
    <div
      className="hero font-serif "
      style={{ backgroundImage: "url(https://i.ibb.co/7gJMvks/room.png)" }}
    >
      <div className="hero-overlay bg-black bg-opacity-50"></div>
      <div className="hero-content text-center ">
        <div className="max-w-md ">
          <div className="p-4  mt-6  lg:w-80  mb-24  rounded-lg hover:border-white border-2 backdrop-blur-sm backdrop-brightness-50 bg-white/30">
            <h1 className=" text-xl font-serif font-bold pt-6 text-primary">
              Please Log In
            </h1>
            {/* form */}
            <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid justify-center items-center">
                <input
                  type="text"
                  name="email"
                  placeholder="Type Email"
                  className="input border-b-4 focus:border-0  input-primary input-sm w-60 max-w-xs mb-2"
                  {...register("Email", { required: true })}
                />

                <span className="label-text-alt text-white ">
                  {errors.Email?.type === "required" && "! Email is required"}
                </span>
              </div>

              <div className="grid justify-center items-center">
                <input
                  type="text"
                  placeholder="Type Password"
                  className="input border-b-4 focus:border-0  input-primary input-sm w-60 max-w-xs"
                  {...register("Password", { required: true })}
                />

                <span className="label-text-alt text-white ">
                  {errors.Password?.type === "required" &&
                    "! Password is required"}
                </span>
              </div>

              <Button className=" w-48 mt-6">Log In</Button>
            </form>
            {/* Reset pass */}
            <div className="mt-4  text-sm flex justify-center text-white">
              <p className=" pl-2">Forgot Password ? </p>
              <Button className=" pl-2 hover:text-primary">Please Reset</Button>
            </div>
            {/* social */}

            <Social />
            <div className="mt-4 font-serif text-sm flex justify-center text-white">
              <p>New To Here ? </p>
              <Link to="/signUp" className="hover:text-primary pl-2">
                Create An Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
