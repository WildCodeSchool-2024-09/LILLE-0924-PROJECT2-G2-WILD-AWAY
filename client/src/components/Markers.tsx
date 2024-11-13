interface MapInfo {
  name: string;
  coordinates: [number, number];
  markerOffSet: number;
}
const markers: MapInfo[] = [
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

export default markers;
