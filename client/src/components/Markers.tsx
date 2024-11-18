interface MapInfo {
  id: number;
  name: string;
  coordinates: [number, number];
  markerOffSet: number;
}
const Markers: MapInfo[] = [
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

export default Markers;
