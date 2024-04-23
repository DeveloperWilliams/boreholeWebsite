import React from "react";
import "./esia.css";
import Cont from "../cont-service/Cont";

function Esia() {
  return (
    <>
      <div className="esia">
        <div className="top">
          <h6>Our Services</h6>
          <h5>ESIA & RENEWABLE ENERGY</h5>
        </div>
        <div className="bottom">
          <div className="upper">
            <div className="one">
              <img src="./image/local.webp" />
            </div>
            <div className="two">
              <h6>
                We're East Africa's Foremost Environmental and Social Impact
                Assessment (ESIA) Specialists, Transforming Environmental
                Insights into Sustainable Energy Solutions
              </h6>
              <p>
                Our Environmental and Social Impact Assessment (ESIA) and
                Renewable Energy Services ensure sustainable utilization and
                management of natural resources, securing valuable assets for
                diverse industries and advancing renewable energy initiatives.
                Our expertise encompasses the following spectrum
              </p>
              <ul>
                <li>
                  <img src="./icon/checked.png" />
                  ESIA studies for proposed groundwater and development
                  projects.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Energy Audits.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Solar Systems design and installation: Pumping solutions;
                  domestic off-grid and hybrid systems.
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

export default Esia;
