import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home">
        <h2>
          East Africa's Number One, <br /> <em>Geological Company</em>
        </h2>
        <p>
          We specialize in groundwater and environmental investigations, geotechnical
          services, drilling management, borehole design, construction, and
          completion reporting for various clients.
        </p>
        <div>
          <Link className="home-get" to='/get-a-free-qoute'>Request a Quote</Link>
          <Link className="home-about" to='/about-us'>Read More</Link>
        </div>
        <div className="home-fixed">
          <Link to="https://wa.link/i5l9rl" target="_blank">
             <img src="./icon/whatsapp.png" className="call-fixed" />
          </Link>
        </div>
      </div>


      {/* Lower */}
    
        

      {/* Lower */}
    </>
  );
}

export default Home;
