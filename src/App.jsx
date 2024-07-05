import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services/Services";
import { WhereToBuy } from "./components/WhereToBuy/WhereToBuy";
import { AppBanner } from "./components/AppBanner/AppBanner";
import {Footer} from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden fixed w-screen h-screen overflow-y-scroll">
        <Hero />
        <Services/>
        <WhereToBuy/>
        <AppBanner/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
