import React from "react";
import "./surface.css";
import Cont from "../cont-service/Cont";

function Surface() {
  return (
    <>
      <div className="surface">
        <div className="top">
          <h6>Our Services</h6>
          <h5>GROUNDWATER MANAGEMENT & HYDROGEOLOGY</h5>
        </div>
        <div className="bottom">
          <div className="upper">
            <div className="one">
              <img src="./image/surface-water.webp" />
            </div>
            <div className="two">
              <h6>
                We're East Africa's Premier Surface Water Management
                Specialists, Turning Visions into Reality
              </h6>
              <p>
                Our surface water management services ensure efficient
                utilization and conservation of surface water resources,
                guaranteeing dependable water sources for domestic,
                agricultural, and industrial requirements. Our expertise extends
                across the following spectrum:
              </p>
              <ul>
                <li>
                  <img src="./icon/checked.png" />
                  Mine water management
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Agricultural water management
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Surface and soil water quality and monitoring assessments
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Water resource risk assessments
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Drainage & sediment studies.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Rainfall runoff & soil water modelling
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

export default Surface;
