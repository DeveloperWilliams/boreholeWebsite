import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";

function Map({ apiKey }) {
  const Marker = ({ text }) => (
    <div
      className="marker"
      style={{ position: "relative", width: "30px", height: "30px" }}
    >
      <img
        src="./icon/placeholder.png" // Replace "marker.png" with the path to your marker image
        alt="Marker"
        style={{
          width: "100%", // Adjust width and height as needed
          height: "100%",
        }}
      />
      <div
        style={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          fontSize: "10px",
        }}
      >
        {text}
      </div>
    </div>
  );
  const markers = [
    {
      lat: -1.3923273360786719,
      lng: 36.67743705336718,
      text: "Geotruth Consult",
    },
  ];

  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={{ lat: -1.3923273360786719, lng: 36.67743705336718 }}
          defaultZoom={11}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              lat={marker.lat}
              lng={marker.lng}
              text={marker.text}
            />
          ))}
        </GoogleMapReact>
      </div>
    </>
  );
}

export default Map;
