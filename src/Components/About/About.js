import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import food from "../../img/food.jpg";
const About = () => {
  return (
    <div className="font-serif">
      {/* about background */}
      <div
        className="hero h-56"
        style={{ backgroundImage: "url(https://i.ibb.co/7gJMvks/room.png)" }}
      >
        <div className="hero-overlay bg-black bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-serif">About Us</h1>
            <p className="mb-5 text-xl font-serif">
              Luxury Suites Like Yours Own Home .
            </p>
          </div>
        </div>
      </div>

      {/*  About services */}

      <div className=" text-center pt-12">
        <h1 className=" text-3xl font-serif">Visit Our Famous Facilities</h1>
        <p className="mt-4 font-serif">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </p>
      </div>

      {/*       {/* restaurant services */}
      <div className="hero min-h-screen my-0 bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
          <div className=" flex lg:w-1/2 justify-between items-center ">
            <div className="z-30">
              <img
                src="https://i.ibb.co/s2rtCq9/food2.jpg"
                className="max-w-sm lg:w-48 w-32 h-60 mr-[-70px] "
                alt="servant-img"
              />
            </div>
            <div className=" z-20 ">
              <img
                src={food}
                className="lg:h-[500px] w-80 h-80 lg:w-[500px]  "
                alt="servant-img"
              />
            </div>
          </div>

          <div className="mt-24 lg:w-1/2">
            {/* <div className="divider w-60 mx-auto mb-24 opacity-100 bg-opacity-100 "></div> */}
            <h1 className="text-4xl ">
              We provide always fresh and healthy food for our clients.
            </h1>
            <p className="pt-12">
              All our suites are fabulous, they are destinations unto
              themselves. We have crossed the globe to bring you only the best.
              A brasserie inspired by French cuisine, a fresh and modern place
              to visit and enjoy dishes always handmade of the best ingredients
              of the season.
              <div className="divider w-60 mx-auto mt-24 divider-primary opacity-100 bg-opacity-100 "></div>
            </p>
          </div>
        </div>
      </div>

      {/* swimming services */}
      <div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img
                style={{ height: "400px" }}
                src="https://i.ibb.co/fQVs2qF/swimingpool2.png"
                className="lg:pl-6 lg:h-screen w-80 h-80 lg:w-screen "
                alt="hotel-img"
              />
            </div>
            <div className="lg:pl-8 pb-6 lg:w-1/2">
              <div className="divider w-60 mx-auto mt-2 opacity-100 bg-opacity-100  text-orange-500 text-xl">
                ......
              </div>

              <h1 className="text-3xl my-12">
                Available swimming pool for our clients.
              </h1>
              <p className="py-4 leader-4">
                The modern designed swimming pool adds glam to the luxurious
                set-up and classy ambience. There are two swimming pools and a
                spacious swimming pool deck. With a wooden designer chaise, the
                sky smiles when you dive into the pool. While you are away from
                home and town, your habitual routine shall never suffer with us.
                The pool’s water is clean and specially taken care of for the
                guests. Towel, swimming caps and swimming dresses are available
                at your service.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* spa services */}

      <div className="hero min-h-screen  bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:pl-8 pb-6 ">
            <div className="divider w-60 mx-auto mt-2 bg-opacity-100  text-orange-500 text-xl">
              ......
            </div>

            <h1 className="text-3xl my-12">The Spa. Refresh Yourself</h1>
            <p className="py-4 leader-4">
              Whether you are in search of a well-appointed gym or a pampering
              moment on the massage table and inside the warm saunas, you can
              always find a place for yourself at our spa.
            </p>
          </div>
          <div>
            <img
              style={{ height: "400px" }}
              src="https://i.ibb.co/BwMMRQF/spa.jpg"
              className="lg:pl-6 lg:h-screen w-80 h-80 lg:w-screen"
              alt="hotel-img"
            />
          </div>
        </div>
      </div>

      {/* meeting room */}

      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              style={{ height: "400px" }}
              src="https://i.ibb.co/9WpnjQD/meeting.jpg"
              className="lg:pl-6 lg:h-screen w-80 h-80 lg:w-screen"
              alt="hotel-img"
            />
          </div>
          <div className="lg:pl-8 pb-6 lg:w-1/2">
            <div className="divider w-60 mx-auto mt-2 opacity-100 bg-opacity-100  text-orange-500 text-xl">
              ......
            </div>

            <h1 className="text-3xl my-12">Business meeting attend here.</h1>
            <p className="py-4 leader-4">
              Travel is a core part of many corporate workers, hence work on the
              move is difficult. But at Luxury Suites we create a business space
              for every corporate traveler to ensure that they work smoothly.
              Latest-model computers, fax machines, telecom services and other
              corporate facilities are available with our business centre. While
              you are away from your office we assure you of the best working
              environment for your career growth. An attentive receptionist is
              available 24 hours a day.
            </p>
          </div>
        </div>
      </div>

      {/* fitness services */}

      <div className="hero min-h-screen  bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:pl-8 pb-6 lg:w-1/2">
            <div className="divider w-60 mx-auto mt-2 bg-opacity-100  text-orange-500 text-xl">
              ......
            </div>

            <h1 className="text-3xl my-12">Fitness Center for Yourself</h1>
            <p className="py-4 leader-4">
              While we, at Luxury Suites, believe that health is the ultimate
              wealth and our guests must not miss on their health. A dedicated
              gym is available for the guests to indulge in fitness. With all
              the training equipment available, the gym offers a wide range of
              fitness activities for fitness freaks. The latest cardiovascular
              equipment is available in the fully equipped gymnasium.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              style={{ height: "400px" }}
              src="https://i.ibb.co/5WpybKz/fitness.jpg"
              className="lg:pl-6 lg:h-screen w-80 h-80 lg:w-screen"
              alt="hotel-img"
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-center my-6">
        <p className="cursor-pointer p-2  text-2xl">
          <FontAwesomeIcon icon={faArrowLeft} /> <Link to="/"> Go Home</Link>
        </p>
      </div>
    </div>
  );
};

export default About;
