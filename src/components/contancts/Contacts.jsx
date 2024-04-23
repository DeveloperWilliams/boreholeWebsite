import React from "react";
import "./contanct.css";
import Map from "../map/Map";
import { Link } from "react-router-dom";

function Contacts() {
  const apiKey = "AIzaSyApU1tmaJU41X1lr2r_Ur0nmup3zu7IzDs";

  return (
    <>
      <div className="contanct-div">
        <div className="top">
          <h6>Contanct Us</h6>
          <h5>Get In Touch</h5>
        </div>
        <div className="bottom">
          <div className="left">
            <h6>Send Us a Message</h6>
            <form>
              <input type="text" placeholder="Kefa Ouma" />
              <div>
                <input type="text" placeholder="+254723985556" />
                <input type="email" placeholder="geotruthconsult@gmail.com" />
              </div>
              <textarea
                placeholder="Your Message"
                spellCheck="true"
                name="message"
              ></textarea>
              <div className="btn">
                <button>Send a Message</button>
              </div>
            </form>
          </div>
          <div className="right" id="right">
            <Map apiKey={apiKey} />
          </div>
        </div>
      {/* Lower */}

        <div className="lower">
          <div className="cards">
            <Link>
              <div>
                <img src="./icon/phone-cal.png" />
              </div>
              <p>+254 723 985 556</p>
            </Link>
          </div>
          <div className="cards">
            <Link>
              <div>
                <img src="./icon/whatsapp.png" />
              </div>
              <p>+254 723 985 556</p>
            </Link>
          </div>
          <div className="cards">
            <Link>
              <div>
                <img src="./icon/email.png" />
              </div>
              <p>info@geotruthconsult.org</p>
            </Link>
          </div>
          <div className="cards">
            <Link>
              <div>
                <img src="./icon/placeholder.png" />
              </div>
              <p>Acacia Shopping Complex, Ongata Rongai</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
