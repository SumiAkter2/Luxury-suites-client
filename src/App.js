import "./App.css";
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

function App() {
  return (
    <div className="font-serif mx-auto">
      <Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<BookingList />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="review" element={<AddReview />}></Route>
            <Route path="addSuites" element={<AddSuites />}></Route>
            <Route path="manageSuites" element={<ManageSuites />}></Route>
            <Route path="admin" element={<Admin />}></Route>
          </Route>
          <Route path="/allSuites" element={<AllSuites />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
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
      </Header>
    </div>
  );
}

export default App;
