import React from "react";
import Swal from "sweetalert2";

const suite = ({ suite }) => {
  const handleToBooking = () => {
    const bookings = {
      bookingName: suite.name,
      bookingBed: suite.bed,
      bookingGuest: suite.guest,
      bookingSqr: suite.sqr,
      bookingDis: suite.dis,
      bookingImage: suite.picture,
      bookingBalance: suite.balance,
    };
    console.log("added booking", bookings);
    fetch(`https://luxury-suites-server.vercel.app/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          text: "Successfully added a review",
          icon: "success",
        });
      });
  };
  return (
    <div>
      <div className="card card-compact w-72 lg:w-96 h-96  bg-base-100 shadow-xl mx-auto">
        <figure>
          <img className="h-56 w-full" src={suite.picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{suite.name} </h2>

          <div className="flex justify-center items-center">
            <p className="flex mr-2">
              {icon1} <span className="pl-2">{suite.bed} </span>
            </p>
            <p className="flex mr-2">
              {icon2} <span className="pl-2">{suite.guest} </span>
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p>
              {suite.balance}/ <span className="text-xs">Night</span>
            </p>

            <div className="card-actions justify-end"
              // onClick={handleToBooking}
            >
              
              <button className="btn btn-primary bg-yellow-200">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default suite;
const icon1 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    width="20px"
    fill="orange"
  >
    <path d="M32 32C49.67 32 64 46.33 64 64V320H288V160C288 142.3 302.3 128 320 128H544C597 128 640 170.1 640 224V448C640 465.7 625.7 480 608 480C590.3 480 576 465.7 576 448V416H64V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V64C0 46.33 14.33 32 32 32zM96 208C96 163.8 131.8 128 176 128C220.2 128 256 163.8 256 208C256 252.2 220.2 288 176 288C131.8 288 96 252.2 96 208z" />
  </svg>
);
const icon2 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    width="20px"
    fill="orange"
  >
    <path d="M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z" />
  </svg>
);
