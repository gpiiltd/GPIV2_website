import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Nav/Navbar";
import AboutUs from "./Pages/AboutUs/AboutUs";
import OurProducts from "./Pages/Products/OurProducts";
import HomePageContents from "./Pages/HomePage/HomePageContents";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  // let navigate = useNavigate();

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePageContents />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<OurProducts />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
