import React from "react";
import "./geotechinical.css";
import Cont from "../cont-service/Cont";

function Geotechinical() {
  return (
    <>
      <div className="gis">
        <div className="top">
          <h6>Our Services</h6>
          <h5>GEOTECHNICAL STUDIES & GIS</h5>
        </div>
        <div className="bottom">
          <div className="upper">
            <div className="one">
              <img src="./image/gis.webp" />
            </div>
            <div className="two">
              <h6>
                We're East Africa's Premier Geotechnical Studies Experts,
                Turning Groundwork into Concrete Solutions
              </h6>
              <p>
                Our geotechnical studies deliver thorough analysis and insights
                into ground conditions, ensuring reliable foundations and
                infrastructure development. Our expertise extends across the
                following spectrum:
              </p>
              <ul>
                <li>
                  <img src="./icon/checked.png" />
                  Cave and void detection for heavy machinery.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Dam and levee inspection to locate points of leakage.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Overburden thickness for foundation setting investigations in
                  major construction projects.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Locating shear and fracture zones in the bedrock for
                  determination of more structurally fit zones for foundation
                  setting.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Locate zones best suited for horizontal drilling for
                  tunnelling.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Grounding surveys for power plants and cell phone towers.
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

export default Geotechinical;
