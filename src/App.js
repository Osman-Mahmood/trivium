import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Home/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import SpecialitiesPage from "./Pages/SpecialitiesPage";
import TestimonialPage from "./Pages/TestimonialPage";
import ContactPage from "./Pages/ContactPage";
import MedicalBillingPage from "./Pages/MedicalBillingPage";
import ImageBillingPage from "./Pages/ImageBillingPage";
import HospitalPage from "./Pages/HospitalPage";
import RecoveryPage from "./Pages/RecoveryPage";
import Hepatology from "./Components/Hepatology";
import Laboratory from "./Components/Services/Laboratory";
import Covery from "./Components/Services/Covery";
import Surgery from "./Components/Services/Surgery";
import Workforce from "./Components/Services/Workforce";
import PhsicalBilling from "./Components/Services/PhsicalBilling";
import Order from "./Components/Order";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/medical" element={<MedicalBillingPage />} />
          <Route exact path="/imaging" element={<ImageBillingPage />} />
          <Route exact path="/hospital" element={<HospitalPage />} />
          <Route exact path="/sepcial" element={<SpecialitiesPage />} />
          <Route exact path="/sepcial/:title" element={<Hepatology />} />
          <Route exact path="/recovery" element={<RecoveryPage />} />
          <Route exact path="/physical" element={<PhsicalBilling />} />
          <Route exact path="/laboratory" element={<Laboratory />} />
          <Route exact path="/covery" element={<Covery />} />
          <Route exact path="/surgery" element={<Surgery />} />
          <Route exact path="/workforce" element={<Workforce />} />
          <Route exact path="/laboratory/census" element={<Order />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
