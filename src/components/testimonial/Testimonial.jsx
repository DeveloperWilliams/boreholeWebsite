import React from "react";
import "./testimonial.css";

function Testimonial() {
  return (
    <>
      <div className="testimonial">
        <div className="top">
          <h5>Testimonials</h5>
          <h4>Our Client's Say</h4>
        </div>
        <div className="bottom">
          <div className="cards">
            <img src="./image/one.jfif" />
            <p>
              "Geotech Solutions' meticulous geotechnical studies were pivotal
              for our project's success. Their expert insights guided informed
              decisions, significantly enhancing safety and efficiency. Highly
              recommended"
            </p>
            <h6>Michael Wanjala </h6>
          </div>
          <div className="cards">
            <img src="./image/one.jfif" />
            <p>
              "Choosing GeoTruth Consult Borehole Experts was the best decision
              for our water needs. Their professional team delivered a seamless
              drilling process, ensuring reliable water access. Highly recommend
              AquaDrill for any borehole project!"
            </p>
            <h6>Henry Kipkelel</h6>
          </div>
          <div className="cards">
            <img src="./image/one.jfif" />
            <p>
              "Grateful to DEF Borehole Drilling for outstanding service.
              Personalized guidance, tireless effort, and exceptional results.
              Trustworthy choice for borehole drilling needs"
            </p>
            <h6>Mercyline Kendi</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
