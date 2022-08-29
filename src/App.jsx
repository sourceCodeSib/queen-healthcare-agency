import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import { useState, useEffect } from "react"
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Register } from "./components/register";
import { Services } from "./components/services";
import { Quote } from "./components/quote";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Navigation />
              <Header data={landingPageData.Header} />
              <About data={landingPageData.About} />
              <Services data={landingPageData.Services} />
              <Testimonials data={landingPageData.Testimonials} />
              <Quote />
              <Team data={landingPageData.Team} />
              <Contact data={landingPageData.Contact} />
          </React.Fragment>
          } />
          <Route path="/contact" element={ <h1>Contact</h1>} />
          <Route path="/register" element={ 
            <React.Fragment>
              <Register />
            </React.Fragment>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
