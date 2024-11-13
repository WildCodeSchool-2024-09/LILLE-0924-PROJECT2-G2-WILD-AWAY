import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
interface MapInfo {
  name: string;
  coordinates: [number, number];
  markerOffSet: number;
}
const marker: MapInfo[] = [
  {
    markerOffSet: -15,
    name: "Lille",
    coordinates: [2.780298, 50.444228],
  },
  {
    markerOffSet: -15,
    name: "Rome",
    coordinates: [12.2912, 41.539],
  },
  {
    markerOffSet: -15,
    name: "New York",
    coordinates: [-73.935242, 40.73061],
  },
  {
    markerOffSet: -15,
    name: "Sydney",
    coordinates: [151.20699, -33.867487],
  },
  {
    markerOffSet: -15,
    name: "Vancouver",
    coordinates: [-123.065, 49.1539],
  },
  {
    markerOffSet: -15,
    name: "Seoul",
    coordinates: [127.73588949999998, 35.9016955],
  },
  {
    markerOffSet: -15,
    name: "Rio de Janeiro",
    coordinates: [-43.2075, -22.90278],
  },
  {
    markerOffSet: -15,
    name: "Rabat",
    coordinates: [-6.8498129, 33.9715904],
  },
  {
    markerOffSet: -15,
    name: "Libreville",
    coordinates: [11.598908999999992, -0.8280970000000001],
  },
  {
    markerOffSet: -15,
    name: "Qatar",
    coordinates: [51.19693000000001, 25.318832999999998],
  },
  {
    markerOffSet: -15,
    name: "Moscou",
    coordinates: [37.619183, 55.757425],
  },
  {
    markerOffSet: 20,
    name: "Tokyo",
    coordinates: [134.379711, 34.886306],
  },
  {
    markerOffSet: -15,
    name: "Manille",
    coordinates: [121.76654050000002, 12.8819585],
  },
  {
    markerOffSet: -15,
    name: "Caracas",
    coordinates: [-66.87919, 10.48801],
  },
  {
    markerOffSet: -15,
    name: "Oulan-Bator",
    coordinates: [106.917, 47.9167],
  },
];

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
              {marker.map(({ name, coordinates, markerOffSet }) => (
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
