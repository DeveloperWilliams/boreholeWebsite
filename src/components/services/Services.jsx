import React from "react";
import "./services.css";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <div className="services-div">
        <div className="top">
          <h5>Our Services</h5>
          <h4>Our Expertise</h4>
        </div>
        <div className="bottom">
          <div className="cards">
            <div className="upper">
              <img src="./image/ground.webp" />
            </div>
            <div className="lower">
              <h6>Groundwater Management & Hydrogeology</h6>
              <p>
                Aquifer characterisation: depth, thickness, yield and quality
                assessment before drilling with a high degree of confidence.
              </p>
              <Link to='/ground-water-management-hydrogeology'>Learn More</Link>
            </div>
          </div>
          <div className="cards">
            <div className="upper">
              <img src="./image/surface.webp" />
            </div>
            <div className="lower">
              <h6>Surface Water Management and Hydrology</h6>
              <p>
                Mine water management,Agricultural water management, Surface and
                soil water quality and monitoring assessments,Water resource ris
              </p>
              <Link to='/surface-water-mangemet'>Learn More</Link>
            </div>
          </div>
          <div className="cards">
            <div className="upper">
              <img src="./image/gis.webp" />
            </div>
            <div className="lower">
              <h6>Geotechnical Studies & GIS</h6>
              <p>
                Cave and void detection for heavy machinery,Dam and levee
                inspection to locate points of leakage, Overburden thickness for
                foundation
              </p>
              <Link to='/geotechinical-studies-gis'>Learn More</Link>
            </div>
          </div>
          <div className="cards">
            <div className="upper">
              <img src="./image/mineral.webp" />
            </div>
            <div className="lower">
              <h6>Mineral Prospecting & Resource Mapping</h6>
              <p>
                Industrial minerals and rocks; construction rocks quarry,
                assessments and valuation, Hydrocarbons; geothermal vents
              </p>
              <Link to='/mineral-prospecting-resource-mapping'>Learn More</Link>
            </div>
          </div>
          <div className="cards">
            <div className="upper">
              <img src="./image/esia.webp" />
            </div>
            <div className="lower">
              <h6>ESIA and Renewable Energy</h6>
              <p>
                ESIA studies for proposed groundwater and development projects,
                Energy Audits, Solar Systems design and installation:
              </p>
              <Link to='/esia-and-renewable-energy'>Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      {/** Why Choose Us Section */}

      <div className="why">
        <div className="top">
          <h4>Why Choose GeoTruth?</h4>
        </div>
        <div className="bottom">
          <div className="cards">
            <img src="./icon/247.png" />
            <h6>24/7 Support</h6>
            <p></p>
          </div>
          <div className="cards">
            <img src="./icon/free.png" />
            <h6>Free Consultation</h6>
            <p></p>
          </div>
          <div className="cards">
            <img src="./icon/affordable.png" />
            <h6>Affordable Prices</h6>
            <p></p>
          </div>
          <div className="cards">
            <img src="./icon/medal.png" />
            <h6>Track Record</h6>
            <p></p>
          </div>
          <div className="cards">
            <img src="./icon/geographer.png" />
            <h6>Expert Team</h6>
            <p></p>
          </div>
          <div className="cards">
            <img src="./icon/customer.png" />
            <h6>Exprienced Team</h6>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
