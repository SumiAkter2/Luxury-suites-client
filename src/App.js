import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import LogIn from "./Components/LogIn/LogIn";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import AllSuites from "./Components/AllSuites/AllSuites";
import SignUp from "./Components/SignUp/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Dashboard/Profile";
import AddSuites from "./Components/Dashboard/AddSuites";
import Admin from "./Components/Dashboard/Admin";
import AddReview from "./Components/Dashboard/AddReview";
import ManageSuites from "./Components/Dashboard/ManageSuites";
import FAQ from "./Components/MoreInfo/FAQ";
import Teams from "./Components/MoreInfo/Teams";
import Feature from "./Components/MoreInfo/Feature";
import BookingList from "./Components/Dashboard/Booking";
import Booking from "./Components/Booking/Booking";
import { useState } from "react";

function App() {
  // ..
  AOS.init();
  const [suites, setSuites] = useState([]);
  const [booked, setBooked] = useState(null);
  const [bookingSuite, setBookingSuite] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const startDate = e.target.startDate.value;
    const endDate = e.target.endDate.value;
    const adult = e.target.guest.value;
    const children = e.target.children.value;
    const guests = parseInt(adult) + parseInt(children);
    const bookingSuite = { startDate, endDate, guests, adult, children };

    console.log(bookingSuite);
    setBookingSuite(bookingSuite);
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
    <div className="font-serif mx-auto">
      <Header> </Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/allSuites"
          element={
            <AllSuites
              handleSubmit={handleSubmit}
              bookingSuite={bookingSuite}
              suites={suites}
              setBooked={setBooked}
            />
          }
        ></Route>
        {booked && (
          <Route
            path="/booking"
            element={<Booking bookingSuite={bookingSuite} booked={booked} />}
          ></Route>
        )}

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<BookingList />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="review" element={<AddReview />}></Route>
          <Route path="addSuites" element={<AddSuites />}></Route>
          <Route path="manageSuites" element={<ManageSuites />}></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>

        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
        <Route path="/feature" element={<Feature />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
