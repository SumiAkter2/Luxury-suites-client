import { useState } from "react";
import BookingSuite from "../BookingModal/BookingSuite";
import useSuites from "../Hooks/useSuites";
import AllSuite from "./AllSuite";
import DatePicker from "react-datepicker";

const AllSuites = ({ handleSubmit, suites, bookingSuite, setBooked }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const [suites, setSuites] = useState([]);
  // // const [booked, setBooked] = useState(null);
  // const [bookingSuite, setBookingSuite] = useState({});

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const startDate = e.target.startDate.value;
  //   const endDate = e.target.endDate.value;
  //   const adult = e.target.guest.value;
  //   const children = e.target.children.value;
  //   const guests = parseInt(adult) + parseInt(children);
  //   const bookingSuite = { startDate, endDate, guests, adult, children };

  //   console.log(bookingSuite);
  //   setBookingSuite(bookingSuite);
  //   fetch("https://luxury-suites-server-production.up.railway.app/suites")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const suites = data.filter(
  //         (suite) => parseInt(suite.guest) === bookingSuite.guests
  //       );
  //       console.log(suites);
  //       setSuites(suites);
  //     });
  // };
  // console.log(bookingSuite);
  return (
    <div>
      <div
        className="hero h-56"
        style={{ backgroundImage: "url(https://i.ibb.co/7gJMvks/room.png)" }}
      >
        <div className="hero-overlay bg-black bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 lg:text-5xl font-serif text-3xl text-white">
              Search Luxury Suites
            </h1>
          </div>
        </div>
      </div>
      <div className=" lg:flex grid justify-evenly items-start px-6 my-12">
        <div className="w-60 my-12 lg:sticky top-14 mx-auto lg:mx-0">
          <h1 className="text-2xl font-bold mb-12 text-primary">
            Check Availability
          </h1>

          <form onSubmit={handleSubmit} className="bg-orange-200 p-4 rounded-md">
            <div className=" font-bold  rounded-lg my-2">
              <h1 className="mb-2"> Check In</h1>

              <DatePicker
                className="bg-primary rounded-md p-1 w-52"
                selected={startDate}
                name="startDate"
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className=" font-bold  rounded-lg my-2">
              <h1 className="mb-2"> Check Out</h1>
              <DatePicker
                name="endDate"
                className="bg-primary rounded-md p-1 w-52"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </div>

            <div className="flex justify-start  font-bold rounded-lg my-2">
              <div>
                <h1 className="mb-2"> Adult</h1>
                <select
                  name="guest"
                  className="w-24 bg-primary rounded-md p-1"
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
                <h1 className="mb-2">Children</h1>
                <select
                  name="children"
                  className="w-24 bg-primary rounded-md p-1"
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
            <button className="btn btn-primary w-52 mt-6">Search</button>
          </form>
        </div>

        <div className="lg:gap-12 grid">
          <h1 className="text-xl text-center mb-6 lg:mb-0 text-primary">
            Available Suites : {suites.length}
          </h1>
          <div className=" p-6 rounded-2xl">
            {suites.map((suite) => (
              <AllSuite
                key={suite._id}
                suite={suite}
                setBooked={setBooked}
                bookingSuite={bookingSuite}
              ></AllSuite>
            ))}
          </div>
        </div>
        {/* {booked && (
          <BookingSuite
            bookingSuite={bookingSuite}
            booked={booked}
          ></BookingSuite>
        )} */}
      </div>
    </div>
  );
};

export default AllSuites;
