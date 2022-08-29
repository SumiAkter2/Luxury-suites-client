import React from "react";
import "../LogIn/Login.css";
const SignUp = () => {
  return (
    <div
      className="hero min-h-screen font-serif"
      style={{ backgroundImage: "url(https://i.ibb.co/9ZKpt34/room5.png)" }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center ">
        <div className="max-w-md">
          <div className=" w-80  py-12   rounded-lg hover:border-white border-2 ">
            <h1 className=" text-xl font-serif  text-black">
              Create A New Account
            </h1>
            {/* form */}
            <form className="mt-6">
              <input
                type="text"
                placeholder="Type Name"
                class="input border-b-4 focus:border-0  input-warning input-sm w-60 max-w-xs"
              />
              <br />
              <input
                type="text"
                placeholder="Type Email"
                class="input border-b-4 focus:border-0  mt-2 input-warning input-sm w-60 max-w-xs"
              />

              <br />
              <input
                type="text"
                placeholder="Type Password"
                class="input border-b-4 focus:border-0  mt-2 input-warning input-sm w-60 max-w-xs"
              />
              <br />

              <input
                type="text"
                placeholder="Type Number"
                class="input border-b-4 focus:border-0  mt-2 input-warning input-sm w-60 max-w-xs"
              />
              <button className="button bg-yellow-200 w-48 ">Sign Up</button>
            </form>

            {/* social */}
            <div className="flex justify-center items-center gap-x-6 mt-6 bg-yellow-200 w-48 mx-auto rounded-lg p-1">
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
