import {
  Route,BrowserRouter,Routes
} from "react-router-dom";
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/navbar';
import About from "./Component/About";
import { AboutUsPage } from "./Component/Aboutus";
import CaseStudy from "./Component/CaseStudy";
import ContactUs from "./Component/Contact";
import Safety from "./Component/Safety";
import Training from "./Component/Training";

function App() {
  return (
    <div className="">
       <BrowserRouter>
       <Navbar />
    <Routes>
    <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/about2" element={<AboutUsPage />}></Route>
      <Route path="/case" element={<CaseStudy />}></Route>
      <Route path="/contact" element={<ContactUs />}></Route>
      <Route path="/safety" element={<Safety />}></Route>
      <Route path="/training" element={<Training />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
