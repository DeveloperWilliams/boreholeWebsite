import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="card about">
            <h6>About Us</h6>
            <div className="abt">
              <p>
                We specialize in groundwater and environmental investigations,
                geotechnical services, drilling management, borehole design,
                construction, and completion reporting for various clients.
              </p>
            </div>
            <p className="follow">Follow Us</p>
            <div className="social">
              <div>
                <Link
                  to="https://web.facebook.com/GeoTruthConsult/?rc=p&_rdc=1&_rdr"
                  target="_blank"
                >
                  <img src="./icon/facebook.png" />
                </Link>
              </div>
              <div>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/geotruth-consult-5052371a5/?originalSubdomain=ke"
                >
                  <img src="./icon/linkedin.png" />
                </Link>
              </div>
              <div>
                <Link
                  target="_blank"
                  to="https://www.instagram.com/geotruthconsult1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                >
                  <img src="./icon/instagram.png" />
                </Link>
              </div>
            </div>
          </div>
          <div className="card link">
            <h6>Links</h6>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about-us">About</Link>
              <Link to="/">Our Services</Link>
              <Link to="/contanct-us">Contact Us</Link>
              <Link to="/get-a-free-qoute">Get Free Quote</Link>
            </ul>
          </div>
          <div className="card services">
            <h6>Services</h6>
            <ul>
              <Link to="/ground-water-management-hydrogeology">
                Ground Water Management and Hydrogeology
              </Link>
              <Link to="/surface-water-mangemet">
                Surface Water Management Hydrology
              </Link>
              <Link to="/geotechinical-studies-gis">
                Geotechinical Studies & GIS
              </Link>
              <Link to="/mineral-prospecting-resource-mapping">
                Mineral Prospecting & Resource Mapping
              </Link>
              <Link to="/esia-and-renewable-energy">
                ESIA & Renewale Energy
              </Link>
            </ul>
          </div>
          <div className="card contancts">
            <h6>Contanct Info</h6>
            <ul>
              <Link target="_blank" to="tel:+254723985556">
                <img src="./icon/phone-cal.png" />
                +254 723 985 556
              </Link>
              <Link target="_blank" to="https://wa.link/i5l9rl">
                <img src="./icon/whatsapp.png" />
                +254 723 985 556
              </Link>
              <Link target="_blank" to="mailto:info@geotruthconsult.org">
                <img src="./icon/email.png" />
                info@geotruthconsult.org
              </Link>
              <Link
                to="https://maps.app.goo.gl/6YcEHrNPqWqNtALn6"
                target="_blank"
              >
                <img src="./icon/placeholder.png" />
                Acacia Shopping Complex Off Magadi Road, Ongata Rongai
              </Link>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <hr />
          <p>
            Copyright @ 2024 GeoTruth Consult. <br /> Designed by{" "}
            <Link to="tel:+254708966189">William Achuchi</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
