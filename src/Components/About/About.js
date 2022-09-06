import React from "react";

const About = () => {
  return (
    <div className="font-serif">
      {/* about background */}
      <div
        className="hero h-56"
        style={{ backgroundImage: "url(https://i.ibb.co/7gJMvks/room.png)" }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-serif">About Us</h1>
            <p className="mb-5 text-xl font-serif">
              Luxury Suites Like yours own home .
            </p>
          </div>
        </div>
      </div>

      {/*  About services */}

      <div className=" text-center py-12">
        <h1 className=" text-3xl font-serif">Visit Our Famous Facilities</h1>
        <p className="mb-5 mt-4 font-serif">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </p>
      </div>
      <div>
        {/*       {/* restaurant services */}
        <div className="hero min-h-screen  bg-yellow-100 my-0">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className=" flex ">
              <div className="flex gap-x-4 z-20">
                <img
                  src="https://i.ibb.co/YNVPKmj/servent3.jpg"
                  className="max-w-sm  lg:w-48 mt-12 mr-[-40px] w-32 h-48 rounded-lg shadow-2xl"
                  alt="servant-img"
                />
              </div>
              <div className="z-30">
                <img
                  src="https://i.ibb.co/s2rtCq9/food2.jpg"
                  className="max-w-sm mt-[-50px] lg:w-48 w-32 h-48 rounded-lg shadow-2xl"
                  alt="servant-img"
                />
              </div>
            </div>

            <div className="mb-24 ">
              <div className="divider w-60 mx-auto mb-24 opacity-100 bg-opacity-100 "></div>
              <h1 className="text-4xl ">
                We provide always fresh and healthy food for our clients.
              </h1>
              <p className="py-6">
                All our suites are fabulous, they are destinations unto
                themselves. We have crossed the globe to bring you only the
                best. A brasserie inspired by French cuisine, a fresh and modern
                place to visit and enjoy dishes always handmade of the best
                ingredients of the season.
                <div className="divider w-60 mx-auto mt-24 opacity-100 bg-opacity-100 "></div>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* swimming services */}
      <div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="">
              <img
                style={{ height: "400px" }}
                src="https://i.ibb.co/fQVs2qF/swimingpool2.png"
                className="lg:pl-6 lg:w-screen rounded-lg shadow-2xl"
                alt="hotel-img"
              />
            </div>
            <div className="lg:pl-8 pb-6 ">
              <div className="divider w-60 mx-auto mt-2 opacity-100 bg-opacity-100  text-orange-500 text-xl">
                ......
              </div>

              <h1 className="text-3xl ">
                Available swimming pool for our clients.
              </h1>
              <p className="py-4 text-sm">
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
    </div>
  );
};

export default About;
