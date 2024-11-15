import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
interface MapInfo {
  id: number;
  name: string;
  coordinates: [number, number];
  markerOffSet: number;
}
const marker: MapInfo[] = [
  {
    id: 1,
    markerOffSet: -15,
    name: "Lille",
    coordinates: [2.780298, 50.444228],
  },
  {
    id: 2,
    markerOffSet: -15,
    name: "Rome",
    coordinates: [12.2912, 41.539],
  },
  {
    id: 3,
    markerOffSet: -15,
    name: "New York",
    coordinates: [-73.935242, 40.73061],
  },
  {
    id: 4,
    markerOffSet: -15,
    name: "Sydney",
    coordinates: [151.20699, -33.867487],
  },
  {
    id: 5,
    markerOffSet: -15,
    name: "Vancouver",
    coordinates: [-123.065, 49.1539],
  },
  {
    id: 6,
    markerOffSet: -15,
    name: "Seoul",
    coordinates: [127.73588949999998, 35.9016955],
  },
  {
    id: 7,
    markerOffSet: -15,
    name: "Rio de Janeiro",
    coordinates: [-43.2075, -22.90278],
  },
  {
    id: 8,
    markerOffSet: -15,
    name: "Rabat",
    coordinates: [-6.8498129, 33.9715904],
  },
  {
    id: 9,
    markerOffSet: -15,
    name: "Libreville",
    coordinates: [11.598908999999992, -0.8280970000000001],
  },
  {
    id: 10,
    markerOffSet: -15,
    name: "Qatar",
    coordinates: [51.19693000000001, 25.318832999999998],
  },
  {
    id: 11,
    markerOffSet: -15,
    name: "Moscou",
    coordinates: [37.619183, 55.757425],
  },
  {
    id: 12,
    markerOffSet: 20,
    name: "Tokyo",
    coordinates: [134.379711, 34.886306],
  },
  {
    id: 13,
    markerOffSet: -15,
    name: "Manille",
    coordinates: [121.76654050000002, 12.8819585],
  },
  {
    id: 14,
    markerOffSet: -15,
    name: "Caracas",
    coordinates: [-66.87919, 10.48801],
  },
  {
    id: 15,
    markerOffSet: -15,
    name: "Oulan-Bator",
    coordinates: [106.917, 47.9167],
  },
];
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
            padding: "5px 10px",
            borderRadius: "5px",
            zIndex: 1,
          }}
        >
          {content}
        </div>
        <div style={{ width: "800px", border: "solid" }}>
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
              {marker.map(({ name, coordinates, markerOffSet, id }) => (
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
