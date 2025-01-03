import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { UseTheme } from "../services/ThemeContext";
import Markers from "./Markers";

function MapElement() {
  const navigate = useNavigate();
  const handlePointClick = (cityId: number) => {
    navigate(`/booking/${cityId}`);
  };
  const [content, setContent] = useState("");
  const [hoveredMarker, setHoveredMarker] = useState<number | null>(null);
  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";
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
                          fill: "#36736e",
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
                    r={hoveredMarker === id ? 8 : 4}
                    fill="#F00"
                    stroke="#fff"
                    strokeWidth={0.1}
                    onClick={() => handlePointClick(id)}
                    onKeyDown={() => handlePointClick(id)}
                    onMouseOver={() => setHoveredMarker(id)}
                    onFocus={() => setHoveredMarker(id)}
                    onMouseLeave={() => setHoveredMarker(null)}
                    className="marker"
                  />
                  <text
                    textAnchor="middle"
                    y={markerOffSet}
                    className={`card-cites ${theme}`}
                    style={{
                      fontFamily: "system-ui",
                      fill: theme === "dark" ? "white" : "black",
                      fontSize: 14,
                    }}
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
