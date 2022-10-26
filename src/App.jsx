import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import CookieConsent from "react-cookie-consent";

import { useState, useEffect } from "react"
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Register } from "./components/register";
import { Services } from "./components/services";
import { Quote } from "./components/quote";
import { Cookies } from "./components/cookies";
import { Testimonials } from "./components/testimonials";
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
    <>
      <CookieConsent>This website uses cookies to enhance the user experience</CookieConsent>
      <BrowserRouter >
          <Routes>
            <Route path="" element={
              <React.Fragment>
                <Navigation />
                <Header data={landingPageData.Header} />
                <About data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <Quote />
                <Testimonials data={landingPageData.Testimonials} />
                <Contact data={landingPageData.Contact} />
            </React.Fragment>
            } />
            <Route path="/register" element={ 
              <React.Fragment>
                <Register />
              </React.Fragment>
            } />
            <Route path="/cookies" element={ 
              <React.Fragment>
                <Cookies />
              </React.Fragment>
            } />
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
