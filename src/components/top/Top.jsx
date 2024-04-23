import React from "react";
import { Link } from "react-router-dom";
import "./top.css";

function Top() {
  return (
    <>
      <div className="top-div">
        <div className="right">
          <ul>
            <Link to="tel:254723985556">
              <img className="calltop" src="./icon/call-icon.png" />
              <p>+254 723 985 556</p>
            </Link>
            <Link target="_blank" to="https://wa.link/i5l9rl">
              <img src="./icon/whatsappicon.png" />
              <p>+254 723 985 556</p>
            </Link>
            <Link target="_blank" to="mailto:info@geotruthconsult.org">
              <img src="./icon/email-icon.png" />
              <p>info@geotruthconsult.org</p>
            </Link>
            <Link
              to="https://maps.app.goo.gl/6YcEHrNPqWqNtALn6"
              target="_blank"
            >
              <img src="./icon/pin-icon.png" />
              <p>Acacia Shopping Complex, Ongata Rongai</p>
            </Link>
          </ul>
        </div>
        <div className="left">
          <ul>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/geotruth-consult-5052371a5/?originalSubdomain=ke"
            >
              <img src="./icon/linkedin-icon.png" />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/geotruthconsult1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <img src="./icon/instagram-icon.png" />
            </Link>
            <Link
              to="https://web.facebook.com/GeoTruthConsult/?rc=p&_rdc=1&_rdr"
              target="_blank"
            >
              <img src="./icon/facebook-icon.png" />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Top;
