import React from "react";
import "./mineral.css";
import Cont from "../cont-service/Cont";

function Mineral() {
  return (
    <>
      <div className="mineral">
        <div className="top">
          <h6>Our Services</h6>
          <h5>MINERAL PROSPECTING & RESOURCE MAPPING</h5>
        </div>
        <div className="bottom">
          <div className="upper">
            <div className="one">
              <img src="./image/mineral.webp" />
            </div>
            <div className="two">
              <h6>
                We're East Africa's Premier Mineral Prospecting and Resource
                Mapping Experts, Transforming Prospects into Valuable Assets.
              </h6>
              <p>
                Our mineral prospecting and resource mapping services ensure
                effective utilization and sustainable management of mineral
                resources, securing valuable assets for various industries. Our
                expertise spans the following spectrum:
              </p>
              <ul>
                <li>
                  <img src="./icon/checked.png" />
                  Industrial minerals and rocks; construction rocks quarry
                  assessments and valuation.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Hydrocarbons; geothermal vents.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Heavy Metals such as gold, copper, etc.
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Rare Earth Elements (REEs).
                </li>
                <li>
                  <img src="./icon/checked.png" />
                  Strategic Minerals.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Cont />
    </>
  );
}

export default Mineral;
