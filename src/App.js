import {
  Route,BrowserRouter,Routes
} from "react-router-dom";
import './App.css';
import { Home} from './Component/Home';
import Navbar from './Component/navbar';
import About from "./Component/About";
import { AboutUsPage } from "./Component/Aboutus";
import CaseStudy from "./Component/CaseStudy";
import ContactUs from "./Component/Contact";
import Safety from "./Component/Safety";
import Training from "./Component/Training";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/Scroll";
import FAQAccordion from "./Component/Faq";
import IngredientsSection from "./Component/Product";
import ClinicalAnalysis from "./Component/File";
import ProductPage from "./Component/Product2";
import CaseStudiesPage from "./Component/Case2";
import TrainingComingSoon from "./Component/Training";
import FAQPage from "./Component/Faq2";
import ContactPage from "./Component/Contactus";

function App() {
  return (
    <div className="">
     {/* <Navbar /> */}
     {/* <Home />
     <ProductPage />
     <AboutUsPage />
     <CaseStudiesPage />
     <FAQPage />
     <TrainingComingSoon />
     <ContactPage /> */}
       <BrowserRouter>
       <Navbar />
       <ScrollToTop />
    <Routes>
    <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/about2" element={<AboutUsPage />}></Route>
      <Route path="/case" element={<CaseStudiesPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/safety" element={<Safety />}></Route>
      <Route path="/training" element={<TrainingComingSoon />}></Route>
      <Route path="/faq" element={<FAQPage />}></Route>
      <Route path="/products" element={<ProductPage />}></Route>
      <Route path="/file" element={<ClinicalAnalysis />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
