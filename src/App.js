import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Living from "./Components/Living/Living";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import LogIn from "./Components/LogIn/LogIn";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
      <Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/living" element={<Living />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
        </Routes>
        <Footer />
      </Header>

      {/*  */}
    </div>
  );
}

export default App;
