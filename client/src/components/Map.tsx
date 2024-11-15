import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import markers from "./Markers";

function MapElement() {
  const [content, setContent] = useState("");
  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "5px 10px",
            borderRadius: "5px",
            zIndex: 1,
          }}
        >
          {content}
        </div>
        <div
          style={{
            width: "800px",
            border: "solid",
          }}
        >
          <ComposableMap>
            <ZoomableGroup zoom={1}>
              <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json">
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        const { NAME } = geo.properties;
                        setContent(NAME);
                      }}
                      onMouseLeave={() => {
                        setContent("");
                      }}
                      style={{
                        default: {
                          fill: "GREY",
                          outline: "none",
                        },
                        hover: {
                          fill: "#A306B6",
                          outline: "none",
                        },
                        pressed: {
                          outline: "none",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>
              {markers.map(({ name, coordinates, markerOffSet }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle r={5} fill="#F00" stroke="#fff" strokeWidth={0.1} />
                  <text
                    textAnchor="middle"
                    y={markerOffSet}
                    style={{ fontFamily: "system-ui", fill: "black" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    </>
  );
}

export default MapElement;
