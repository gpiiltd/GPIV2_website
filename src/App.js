import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Nav/Navbar";
import AboutUs from "./Pages/AboutUs/AboutUs";
import OurProducts from "./Pages/Products/OurProducts";
import HomePageContents from "./Pages/HomePage/HomePageContents";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // let navigate = useNavigate();

  return (
    <>
      <ToastContainer
        position="top-center"
        className="w-full"
        style={{ width: "600px" }}
      />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageContents />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<OurProducts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
