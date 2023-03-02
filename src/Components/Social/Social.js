import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const googleSingIn = () => {
    signInWithGoogle();
    navigate("/");
  };
  if (user) {
    console.log(user);
  }
  const githubSignIn = () => {
    signInWithGithub();
    navigate("/");
  };
  const facebookSignIn = () => {
    signInWithFacebook();
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center gap-x-6 mt-6 bg-secondary w-48 mx-auto rounded-lg p-1">
      <img
        onClick={googleSingIn}
        className="w-8 h-8 cursor-pointer hover:border-2 hover:border-blue-200"
        src="https://i.ibb.co/ByzF7HZ/google-removebg-preview.png"
        alt=""
      />
      <img
        onClick={facebookSignIn}
        className="w-8 h-8 cursor-pointer  hover:border-2 hover:border-red-300"
        src="https://i.ibb.co/F4yknXJ/facebook.png"
        alt=""
      />
      <img
        onClick={githubSignIn}
        className="w-6 h-6 m-1 cursor-pointer  hover:border-2 hover:border-blue-200 "
        src="https://i.ibb.co/chk4SZH/github.png"
        alt=""
      />
    </div>
  );
};

export default Social;
