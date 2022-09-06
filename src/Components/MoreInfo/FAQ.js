import React from "react";

const FAQ = () => {
  return (
    <div>
      {/* background img */}
      <div
        className="hero h-56"
        style={{ backgroundImage: "url(https://i.ibb.co/7gJMvks/room.png)" }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-serif">Have Any Question?</h1>
            <p className="mb-5 text-xl font-serif">Please check the answer</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center px-12">
        <div>
          <h1 className="text-3xl">
            Frequently <br />
            Ask Question
          </h1>
        </div>

        <div className="ml-12 my-12">
          <ul className="steps steps-horizontal lg:steps-vertical">
            <li className="step step-primary text-start">
              {/* <!-- The button to open modal --> */}
              <label
                htmlFor="my-modal-3"
                className="btn btn-outline border-0 mt-4 btn-primary modal-button"
              >
                IS THERE A SWIMMING POOL IN THE HOTEL?
              </label>
              {/* <!-- Put this part before </body> tag --> */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-primary btn-circle absolute right-2 top-2 bg-yellow-300"
                  >
                    ✕
                  </label>

                  <p className="py-4">
                    Yes, we provide swimming pool for our clients. Event we have
                    personal swimming pool too.
                  </p>
                </div>
              </div>
            </li>
            {/* 2.qs */}
            <li className="step step-primary">
              <label
                htmlFor="qs-2"
                className="btn btn-outline border-0 mt-4 btn-primary modal-button"
              >
                HOW DO I GET TO THE HOTEL FROM THE AIRPORT?
              </label>

              <input type="checkbox" id="qs-2" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="qs-2"
                    className="btn btn-sm btn-primary btn-circle absolute right-2 top-2 bg-yellow-300"
                  >
                    ✕
                  </label>

                  <p className="py-4">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia.
                  </p>
                </div>
              </div>
            </li>
            {/* 3.qs */}
            <li className="step step-primary">
              {/* <!-- The button to open modal --> */}
              <label
                htmlFor="my-3"
                className="btn btn-outline mt-4 border-0 btn-primary modal-button"
              >
                HOW MANY PEOPLE CAN STAY IN ONE ROOM?
              </label>
              {/* <!-- Put this part before </body> tag --> */}
              <input type="checkbox" id="my-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-3"
                    className="btn btn-sm btn-primary btn-circle absolute right-2 top-2 bg-yellow-300"
                  >
                    ✕
                  </label>

                  <p className="py-4">
                    Luxury suites there live the blind texts. Separated they
                    live in Bookmarksgrove right at the coast of the Semantics,
                    a large language ocean. A small river named Duden flows by
                    their place and supplies it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </li>
            {/* 4.qs */}
            <li className="step">
              {/* <!-- The button to open modal --> */}
              <label
                htmlFor="modal-3"
                className="btn btn-outline mt-4 border-0 btn-primary modal-button"
              >
                DOES THE INTERNET RATE INCLUDE BREAKFAST?
              </label>
              {/* <!-- Put this part before </body> tag --> */}
              <input type="checkbox" id="modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="modal-3"
                    className="btn btn-sm btn-primary btn-circle absolute right-2 top-2 bg-yellow-300"
                  >
                    ✕
                  </label>

                  <p className="py-4">
                    There live the blind texts. Separated they live in
                    Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean. A small river named Duden flows by their
                    place and supplies it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </li>
            {/* 5.qs */}
            <li className="step">
              {/* <!-- The button to open modal --> */}
              <label
                htmlFor="my-modal"
                className="btn btn-outline border-0 mt-4 btn-primary modal-button"
              >
                CAN I CONNECT MY LAPTOP IN THE ROOM?
              </label>
              {/* <!-- Put this part before </body> tag --> */}
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal"
                    className="btn btn-sm btn-primary btn-circle absolute right-2 top-2 bg-yellow-300"
                  >
                    ✕
                  </label>

                  <p className="py-4">
                    Behind the word mountains, far from the countries Vokalia
                    and Consonantia, there live the blind texts. Separated they
                    live in Bookmarksgrove right at the coast of the Semantics,
                    a large language ocean. A small river named Duden flows by
                    their place and supplies it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
