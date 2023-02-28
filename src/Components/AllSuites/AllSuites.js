import { useState } from "react";
import BookingSuite from "../BookingModal/BookingSuite";
import useSuites from "../Hooks/useSuites";
import AllSuite from "./AllSuite";
import DatePicker from "react-datepicker";

const AllSuites = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [suites, setSuites] = useState([]);
  const [booked, setBooked] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const startDate = e.target.startDate.value;
    const endDate = e.target.endDate.value;
    const adult = e.target.guest.value;
    const children = e.target.children.value;
    const guests = parseInt(adult) + parseInt(children);

    const bookingSuite = { startDate, endDate, guests, adult, children };
    console.log(bookingSuite);

    fetch("http://localhost:5000/suites")
      .then((res) => res.json())
      .then((data) => {
        const suites = data.filter(
          (suite) => parseInt(suite.guest) === bookingSuite.guests
        );
        console.log(suites);
        setSuites(suites);
      });
  };
  return (
    <div>
      <div
        className="hero h-56"
        style={{ backgroundImage: "url(https://i.ibb.co/V91JZpN/coridor.png)" }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 lg:text-5xl font-serif text-3xl">
              Search Luxury Suites
            </h1>
          </div>
        </div>
      </div>
      <div className=" lg:flex grid justify-around items-start px-6 my-12">
        <div className="w-60 my-12 lg:sticky top-14">
          <h1 className="text-2xl font-bold mb-12">Check Availability</h1>

          <form onSubmit={handleSubmit}>
            <div className=" font-bold  rounded-lg my-2">
              <h1 className="mb-2"> Check In</h1>

              <DatePicker
                className="bg-yellow-200 rounded-md p-1 w-52"
                selected={startDate}
                name="startDate"
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className=" font-bold  rounded-lg my-2">
              <h1 className="mb-2"> Check Out</h1>
              <DatePicker
                name="endDate"
                className="bg-yellow-200 rounded-md p-1 w-52"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </div>

            <div className="flex justify-start  font-bold rounded-lg my-2">
              <div>
                <h1> Adult</h1>
                <select
                  name="guest"
                  className="w-24 bg-yellow-200 rounded-md p-1"
                  type="number"
                  placeholder="1"
                >
                  <option value="1 Adult">1 Adult</option>

                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>4 Adults</option>
                </select>
              </div>
              <div className="ml-4">
                <h1>Children</h1>
                <select
                  name="children"
                  className="w-24 bg-yellow-200 rounded-md p-1"
                  type="number"
                  placeholder="1"
                >
                  <option value="0 Children">0 Children</option>
                  <option>1 Children </option>
                  <option>2 Children </option>
                  <option>3 Children</option>
                </select>
              </div>
            </div>
            <button className="btn bg-yellow-200 btn-primary w-52">
              Search
            </button>
          </form>
        </div>

        <div className="lg:gap-12 grid">
          <h1 className="text-xl text-center">
            Available Suites :{suites.length >= 3 ? "dddd" : "sorry"}
          </h1>
          {suites.map((suite) => (
            <AllSuite
              key={suite._id}
              suite={suite}
              setBooked={setBooked}
            ></AllSuite>
          ))}
        </div>
        {booked && <BookingSuite booked={booked}></BookingSuite>}
      </div>
    </div>
  );
};

export default AllSuites;
