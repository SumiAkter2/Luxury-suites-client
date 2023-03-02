import {
  faAirFreshener,
  faBowlFood,
  faCarAlt,
  faGift,
  faGifts,
  faPersonDress,
  faRefresh,
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
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-4xl font-serif">
              Features Of Luxury Suites
            </h1>
            <p>We provide the best services for our clients</p>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-12 px-12">
        <h1 className=" text-4xl font-serif text-center">Features</h1>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          itaque aliquid hic neque voluptas ipsum quis non nulla, veniam
          molestiae voluptate praesentium maxime perferendis culpa alias cum
          obcaecati dolore. Culpa?
        </p>
      </div>
      <div className="my-6">
        <h1 className="text-3xl font-bold text-center my-6">DROPCAPS STYLES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="px-12   ">
            <p className="bg-secondary rounded-3xl py-2 h-12 mx-auto w-12 text-center my-4">
              <FontAwesomeIcon icon={faBowlFood}></FontAwesomeIcon>
            </p>

            <h1 className="text-center">
              We provide Best food for clients. Ad maiores modi corrupti tenetur
              iusto id. Distinctio nesciunt rem laudantium fuga exercitationem.
              Ex, veritatis. Veritatis est rem praesentium quisquam! Incidunt,
              optio.
            </h1>
          </div>
          <div className="px-12   ">
            <p className="bg-secondary rounded-3xl py-2 h-12 mx-auto w-12 text-center my-4">
              <FontAwesomeIcon icon={faSwimmingPool}></FontAwesomeIcon>
            </p>
            <h1 className="text-center">
              We provide Best Swimming pool for clients. Ad maiores modi
              corrupti tenetur iusto id. Distinctio nesciunt rem laudantium fuga
              exercitationem. Ex, veritatis. Veritatis est rem praesentium
              quisquam! Incidunt, optio.
            </h1>
          </div>
          <div className="px-12   ">
            <p className="bg-secondary rounded-3xl py-2 h-12 mx-auto w-12 text-center my-4">
              <FontAwesomeIcon icon={faSpa}></FontAwesomeIcon>
            </p>
            <h1 className="text-center">
              We provide Best Spa for clients. Ad maiores modi corrupti tenetur
              iusto id. Distinctio nesciunt rem laudantium fuga exercitationem.
              Ex, veritatis. Veritatis est rem praesentium quisquam! Incidunt,
              optio.
            </h1>
          </div>
          <div className="px-12   ">
            <p className="bg-secondary rounded-3xl py-2 h-12 mx-auto w-12 text-center my-4">
              <FontAwesomeIcon icon={faCarAlt}></FontAwesomeIcon>
            </p>
            <h1 className="text-center">
              We provide Best Car for clients Journey. Ad maiores modi corrupti
              tenetur iusto id. Distinctio nesciunt rem laudantium fuga
              exercitationem. Ex, veritatis. Veritatis est rem praesentium
              quisquam! Incidunt, optio.
            </h1>
          </div>
          <div className="px-12   ">
            <p className="bg-secondary rounded-3xl py-2 h-12 mx-auto w-12 text-center my-4">
              <FontAwesomeIcon icon={faAirFreshener}></FontAwesomeIcon>
            </p>
            <h1 className="text-center">
              We give best AirFreshener in every suites. Ad maiores modi
              corrupti tenetur iusto id. Distinctio nesciunt rem laudantium fuga
              exercitationem. Ex, veritatis. Veritatis est rem praesentium
              quisquam! Incidunt, optio.
            </h1>
          </div>
          <div className="px-12   ">
            <p className="bg-secondary rounded-3xl py-2 h-12 mx-auto w-12 text-center my-4">
              <FontAwesomeIcon icon={faGifts}></FontAwesomeIcon>
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
