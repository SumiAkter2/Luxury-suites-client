import React from "react";

const FAQ = () => {
  return (
    <div className="flex justify-start items-center">
      <div>
        <h1>Frequently Ask Question</h1>
      </div>

      <div className="ml-6">
        <ul className="steps steps-horizontal lg:steps-vertical">
          <li className="step step-primary text-start">
            IS THERE A SWIMMING POOL IN THE HOTEL?
            <br />
            {/* Yes, we provide swimming pool for our clients. Event we have
            personal swimming pool too. */}
          </li>
          <li className="step step-primary">
            HOW DO I GET TO THE HOTEL FROM THE AIRPORT?
          </li>

          <li className="step step-primary">
            HOW MANY PEOPLE CAN STAY IN ONE ROOM?
          </li>
          <li className="step">DOES THE INTERNET RATE INCLUDE BREAKFAST?</li>
          <li className="step">CAN I CONNECT MY LAPTOP IN THE ROOM?</li>
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
