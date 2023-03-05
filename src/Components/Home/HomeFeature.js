import React from "react";
import {
  faAirFreshener,
  faBowlFood,
  faCarAlt,
  faGifts,
  faSpa,
  faSwimmingPool,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeFeature = () => {
  return (
    <div>
      <div className="my-12">
        <h1 className="my-6 text-3xl lg:text-5xl text-center">Why Choose Us</h1>
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

export default HomeFeature;
