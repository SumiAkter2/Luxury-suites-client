import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFacebook, faSoap } from "@fortawesome/free-solid-svg-icons";
const Teams = () => {
  return (
    <div>
      <div
        className="hero h-56"
        style={{ backgroundImage: "url(https://i.ibb.co/7gJMvks/room.png)" }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-4xl font-serif">
              Introducing Our Team Members.
            </h1>
          </div>
        </div>
      </div>
      {/* card for team member */}
      <div>
        <div>
          <img src="https://i.ibb.co/LY9tW3s/man1.jpg" alt="man-img" />
          <h1>Alisha zaman</h1>
          <p>{/* <FontAwesomeIcon icon={faFaceBook}></FontAwesomeIcon> */}</p>
        </div>
        <div>
          <img src="https://i.ibb.co/KhtfYz6/women1.jpg" alt="" />
          <h1>Alisha zaman</h1>
          <p>{/* <FontAwesomeIcon icon={faFaceBook}></FontAwesomeIcon> */}</p>
        </div>
        <div>
          <img src="" alt="" />
          <h1>Alisha zaman</h1>
          <p>{/* <FontAwesomeIcon icon={faFaceBook}></FontAwesomeIcon> */}</p>
        </div>
        <div>
          <img src="" alt="" />
          <h1>Alisha zaman</h1>
          <p>{/* <FontAwesomeIcon icon={faFaceBook}></FontAwesomeIcon> */}</p>
        </div>
        <div>
          <img src="" alt="" />
          <h1>Alisha zaman</h1>
          <p>{/* <FontAwesomeIcon icon={faFaceBook}></FontAwesomeIcon> */}</p>
        </div>
        <div>
          <img src="" alt="" />
          <h1>Alisha zaman</h1>

          <p>
            <FontAwesomeIcon icon={faSoap}></FontAwesomeIcon>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teams;
