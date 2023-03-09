import {
  faAirFreshener,
  faBowlFood,
  faCarAlt,
  faGifts,
  faSpa,
  faSwimmingPool,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Feature = () => {
  return (
    <div>
      <div
        className="hero h-56"
        style={{ backgroundImage: "url(https://i.ibb.co/LhpgD4N/room10.png)" }}
      >
        <div className="hero-overlay bg-black bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-4xl font-serif">
              Features Of Luxury Suites
            </h1>
            <p>We provide the best services for our clients</p>
          </div>
        </div>
      </div>
      <div className=" py-12 lg:px-12  px-6  ">
        <h1 className=" text-4xl font-serif text-center text-primary mb-6">
          Features
        </h1>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          itaque aliquid hic neque voluptas ipsum quis non nulla, veniam
          molestiae voluptate praesentium maxime perferendis culpa alias cum
          obcaecati dolore. Culpa?
        </p>
      </div>
      <div className="my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:px-12  px-6     ">
            <p className=" rounded-3xl p-2  text-center my-4">
              <FontAwesomeIcon
                icon={faBowlFood}
                className="lg:text-3xl"
                color="#a87932"
                size="35px"
              ></FontAwesomeIcon>
            </p>

            <h1 className="text-center">
              We provide Best food for clients. Ad maiores modi corrupti tenetur
              iusto id. Distinctio nesciunt rem laudantium fuga exercitationem.
              Ex, veritatis. Veritatis est rem praesentium quisquam! Incidunt,
              optio.
            </h1>
          </div>
          <div className="lg:px-12  px-6 ">
            <p className=" rounded-3xl p-2  text-center my-4">
              <FontAwesomeIcon
                icon={faSwimmingPool}
                className="lg:text-3xl"
                color="#a87932"
              ></FontAwesomeIcon>
            </p>
            <h1 className="text-center">
              We provide Best Swimming pool for clients. Ad maiores modi
              corrupti tenetur iusto id. Distinctio nesciunt rem laudantium fuga
              exercitationem. Ex, veritatis. Veritatis est rem praesentium
              quisquam! Incidunt, optio.
            </h1>
          </div>
          <div className="lg:px-12  px-6     ">
            <p className=" rounded-3xl p-2  text-center my-4">
              <FontAwesomeIcon
                icon={faSpa}
                className="lg:text-3xl"
                color="#a87932"
                size="35px"
              ></FontAwesomeIcon>
            </p>
            <h1 className="text-center">
              We provide Best Spa for clients. Ad maiores modi corrupti tenetur
              iusto id. Distinctio nesciunt rem laudantium fuga exercitationem.
              Ex, veritatis. Veritatis est rem praesentium quisquam! Incidunt,
              optio.
            </h1>
          </div>
          <div className="lg:px-12  px-6     ">
            <p className=" rounded-3xl p-2  text-center my-4">
              <FontAwesomeIcon
                icon={faCarAlt}
                className="lg:text-3xl"
                color="#a87932"
                size="35px"
              ></FontAwesomeIcon>
            </p>
            <h1 className="text-center">
              We provide Best Car for clients Journey. Ad maiores modi corrupti
              tenetur iusto id. Distinctio nesciunt rem laudantium fuga
              exercitationem. Ex, veritatis. Veritatis est rem praesentium
              quisquam! Incidunt, optio.
            </h1>
          </div>
          <div className="lg:px-12  px-6     ">
            <p className=" rounded-3xl p-2  text-center my-4">
              <FontAwesomeIcon
                icon={faAirFreshener}
                className="lg:text-3xl"
                color="#a87932"
                size="35px"
              ></FontAwesomeIcon>
            </p>
            <h1 className="text-center">
              We give best AirFreshener in every suites. Ad maiores modi
              corrupti tenetur iusto id. Distinctio nesciunt rem laudantium fuga
              exercitationem. Ex, veritatis. Veritatis est rem praesentium
              quisquam! Incidunt, optio.
            </h1>
          </div>
          <div className="lg:px-12  px-6     ">
            <p className=" rounded-3xl p-2  text-center my-4">
              <FontAwesomeIcon
                icon={faGifts}
                className="lg:text-3xl"
                color="#a87932"
                size="35px"
              ></FontAwesomeIcon>
            </p>
            <h1 className="text-center">
              We provide Best Gift for clients in any occasion. Ad maiores modi
              corrupti tenetur iusto id. Distinctio nesciunt rem laudantium fuga
              exercitationem. Ex, veritatis. Veritatis est rem praesentium
              quisquam! Incidunt, optio.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
