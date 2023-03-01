import React from "react";
import "./Suite.css";
const suite = ({ suite }) => {
  return (
    <div>
      <div class="gallery-image">
        <div class="img-box">
          <img src={suite.picture} alt="" />
          <div class="transparent-box">
            <div class="caption">
              <p>Library</p>
              <p class="opacity-low">Architect Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default suite;
