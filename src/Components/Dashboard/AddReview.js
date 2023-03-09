import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const review = {
      name: data.Name,
      address: data.Address,
      ratting: data.Ratting,
      comment: data.comment,
      photo: data.Photo,
    };

    // console.log(data.Name, data.Address, data.Ratting, data.comment);

    fetch(`https://luxury-suites-server-production.up.railway.app/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Successfully added a review",
          icon: "success",
          // confirmButtonText: "Done",
        });
        review("");
      });
  };
  return (
    <div
      className="hero font-serif"
      style={{ backgroundImage: "url(https://i.ibb.co/9ZKpt34/room5.png)" }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center ">
        <div className="max-w-md">
          <h1 className="text-4xl text-center my-6 text-white">Review Us</h1>
          <div className="p-4  mt-6  lg:w-80  mb-24  rounded-lg hover:border-white border-2 ">
            <div className="font-serif">
              <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid justify-center items-center text-black">
                  <input
                    type="text"
                    readOnly
                    value={user?.displayName}
                    className="input border-b-4 focus:border-0  input-primary input-sm w-60 max-w-xs mb-2"
                    {...register("Name", { required: true })}
                  />

                  <span className="label-text-alt text-white ">
                    {errors.Name?.type === "required" && "! Name is required"}
                  </span>
                </div>

                <div className="grid justify-center items-center">
                  <input
                    type="text"
                    placeholder="Type Address"
                    className="input border-b-4 focus:border-0  input-primary input-sm w-60 max-w-xs"
                    {...register("Address", { required: true })}
                  />

                  <span className="label-text-alt text-white ">
                    {errors.Address?.type === "required" &&
                      "! Address is required"}
                  </span>
                </div>
                <div className="grid justify-center items-center mt-2">
                  <select
                    name="Ratting"
                    type="text"
                    placeholder="Type Ratting"
                    className="select border-b-4 focus:border-0  select-warning select-sm w-60 max-w-xs"
                    {...register("Ratting", { required: true })}
                  >
                    <option selected>5/5</option>
                    <option>1/5</option>
                    <option>2/5</option>
                    <option>3/5</option>
                    <option>4/5</option>
                  </select>

                  <span className="label-text-alt text-white ">
                    {errors.Address?.type === "required" &&
                      "! Ratting is required"}
                  </span>
                </div>
                <div className="grid justify-center items-center">
                  <select
                    name="Photo"
                    type="text"
                    placeholder="Type Ratting"
                    className="select border-b-4 focus:border-0  select-warning select-sm w-60 max-w-xs mt-2"
                    {...register("Photo", { required: true })}
                  >
                    <option selected>5/5</option>
                    <option>1/5</option>
                    <option>2/5</option>
                    <option>3/5</option>
                    <option>4/5</option>
                  </select>

                  <span className="label-text-alt text-white ">
                    {errors.Photo?.type === "required" && "! Photo is required"}
                  </span>
                </div>
                <div className="grid justify-center items-center mt-2">
                  <textarea
                    name="comment"
                    type="text"
                    placeholder="Type comment"
                    className="textarea border-b-4 focus:border-0  textarea-primary textarea-sm w-60 max-w-xs"
                    {...register("comment", { required: true })}
                  />

                  <span className="label-text-alt text-white ">
                    {errors.Address?.type === "required" &&
                      "! Comment is required"}
                  </span>
                </div>
                <button className="btn btn-primary mt-6 w-48 ">
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
