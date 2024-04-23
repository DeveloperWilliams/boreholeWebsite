import React from "react";
import "./groundwater.css";
import { Link } from "react-router-dom";
import Cont from "../cont-service/Cont";

function Groundwater() {
  return (
    <>
      <div className="ground">
        <div className="top">
          <h6>Our Services</h6>
          <h5>GROUNDWATER MANAGEMENT & HYDROGEOLOGY</h5>
        </div>
        <div className="bottom">
          <div className="upper">
            <div className="one">
              <img src="./image/groundwater2.webp" />
            </div>
            <div className="two">
              <h6>
                We're East Africa's Best Borehole Drealling Experts, We make
                Dreams Come to Life.
              </h6>
              <p>
                Our borehole drilling services provide efficient access to
                groundwater, ensuring reliable water sources for domestic,
                agricultural, and industrial needs. Our Expertise extend across
                the following spectrum;
              </p>
              <ul>
                <li>
                  <img src="./icon/checked.png" />
                  Borehole drilling contract management and supervision to meet
                  Kenyan and international standards.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Borehole design and construction in accordance with the Kenyan
                  and international standards.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Borehole testpumping supervision and data analysis and
                  interpretation.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Borehole camera analysis.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Borehole completion record reports.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Borehole request */}
        <div className="middle">
          <p>
            Searching for a sustainable water solution for your home, business,
            or industry?
          </p>
          <div>
            <div className="div">
              <Link to='/get-a-free-qoute'>Request a Quote</Link>
            </div>
          </div>
        </div>

        {/** Aquifer*/}

        <div className="bottom" id="bottom">
          <div className="upper">
            <div className="one">
              <img src="./image/ground.webp" />
            </div>
            <div className="two">
              <h6>
                Get Proffesional Groundwater Quality Analysis, from East
                Africa's Pro Hydrogeologists.
              </h6>
              <p>
                Our hydrogeological analysis provides efficient access to
                groundwater, ensuring reliable water sources for diverse needs.
                From aquifer characterization to comprehensive solutions, our
                expertise spans a wide spectrum;
              </p>
              <ul>
                <li>
                  <img src="./icon/checked.png" />
                  Aquifer characterisation: depth, thickness, yield and quality
                  assessment before drilling with a high degree of confidence.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Local and regional aquifer and water quality assessment and
                  modelling. This is a useful resource for land valuation for
                  prospective developers in regard to its groundwater potential.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Saline-fresh water delineation and monitoring of contamination in aquifers.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Design and construction of artificial aquifer recharge systems.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Mine dewatering design and implementation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Cont/>
    </>
  );
}

export default Groundwater;
