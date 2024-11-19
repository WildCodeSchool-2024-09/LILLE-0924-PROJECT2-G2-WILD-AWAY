import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import Markers from "./Markers";

function MapElement() {
  const navigate = useNavigate();
  const handlePointClick = (cityId: number) => {
    navigate(`/booking/${cityId}`);
  };
  const [content, setContent] = useState("");
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            
            borderRadius: "5px",
            zIndex: 1,
          }}
        >
          {content}
        </div>
        <div style={{ width: "900px" }}>
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
              {Markers.map(({ name, coordinates, markerOffSet, id }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle
                    r={5}
                    fill="#F00"
                    stroke="#fff"
                    strokeWidth={0.1}
                    onClick={() => handlePointClick(id)}
                    onKeyDown={() => handlePointClick(id)}
                  />
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
