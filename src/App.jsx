import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./app.css";
import Myhome from "./components/myhome/Myhome";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Contacts from "./components/contancts/Contacts";
import Groundwater from "./components/servicescomponent/groundwater/Groundwater";
import Surface from "./components/servicescomponent/surface/Surface";
import Geotechinical from "./components/servicescomponent/geotechnical/Geotechinical";
import Notfound from "./components/notfound/Notfound";
import Quote from "./components/quote/Quote";
import Top from "./components/top/Top";
import Mineral from "./components/servicescomponent/mineral/Mineral";
import Esia from "./components/servicescomponent/esia/Esia";
import Scroll from "./components/scroll/Scroll";

function App() {
  return (
    <>
      <Scroll />
      <Top />
      <Header />
      <Routes>
        <Route path="/" element={<Myhome />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/contanct-us" element={<Contacts />}></Route>
        <Route path="/get-a-free-qoute" element={<Quote />}></Route>

        {/* Services Routes */}
        <Route
          path="/ground-water-management-hydrogeology"
          element={<Groundwater />}
        ></Route>
        <Route path="/surface-water-mangemet" element={<Surface />}></Route>
        <Route
          path="/geotechinical-studies-gis"
          element={<Geotechinical />}
        ></Route>
        <Route
          path="/mineral-prospecting-resource-mapping"
          element={<Mineral />}
        ></Route>
        <Route path="/esia-and-renewable-energy" element={<Esia />}></Route>
        {/* Services Routes */}

        <Route path="/*" element={<Notfound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
