
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Home/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import SpecialitiesPage from './Pages/SpecialitiesPage';
import TestimonialPage from './Pages/TestimonialPage';
import ContactPage from './Pages/ContactPage';
import MedicalBillingPage from './Pages/MedicalBillingPage';
import ImageBillingPage from './Pages/ImageBillingPage';
import HospitalPage from './Pages/HospitalPage';
import RecoveryPage from './Pages/RecoveryPage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar />
       <Routes>
      
       <Route exact path="/" element={ <HomePage />} />
       <Route exact path="/about" element={ <AboutPage />} />
       <Route exact path="/medical" element={ <MedicalBillingPage />} />
       <Route exact path="/imaging" element={ <ImageBillingPage />} />
       <Route exact path="/hospital" element={ <HospitalPage />} />
       <Route exact path="/sepcial" element={ <SpecialitiesPage />} />
       <Route exact path="/recovery" element={ <RecoveryPage />} />
       {/* <Route exact path="/testi" element={ <TestimonialPage />} /> */}
       <Route exact path="/contact" element={ <ContactPage />} />
       </Routes>
       </BrowserRouter>
       
       
        <Footer />
    </div>
  );
}

export default App;
