import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { GrUpdate } from "react-icons/gr";

const Profile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="my-12">
      <h1 className="text-3xl pb-12 text-center">Your Profile</h1>
      <div className="card card-side bg-secondary shadow-xl lg:w-96  lg:mx-auto mx-12">
        <figure>
          <img src={user.photoURL} alt="Movie" className="ml-6 rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user.displayName}</h2>
          <p>{user.email}</p>

          <button className="btn btn-primary">
            <GrUpdate className="mr-4" /> Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
