import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useTheme } from "../../../context/ThemeContext";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const locations = [
  { name: "New York", coordinates: [-74.006, 40.7128], value: 72 },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749], value: 59 },
  { name: "Sydney", coordinates: [151.2093, -33.8688], value: 25 },
  { name: "Singapore", coordinates: [103.8198, 1.3521], value: 61 },
];

export default function RevenueByLocation() {
  const { theme } = useTheme();
  const mapBg = theme === "dark" ? "#23232e" : "#E9EBF6";
  const markerFill = theme === "dark" ? "#fff" : "#000";
  const textClass = theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <div className="p-4">
      <div className="mb-4">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 80 }}
          width={600}
          height={300}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={mapBg}
                  stroke="#fff"
                  strokeWidth={0.5}
                />
              ))
            }
          </Geographies>
          {locations.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={6} fill={markerFill} stroke="#fff" strokeWidth={2} />
            </Marker>
          ))}
        </ComposableMap>
      </div>
      <div className={`space-y-4 text-sm ${textClass}`}>
        {locations.map(({ name, value }) => (
          <div key={name} className="flex flex-col">
            <div className="flex justify-between font-semibold mb-1">
              <span>{name}</span>
              <span>{value}K</span>
            </div>
            <div className="w-full h-2 rounded bg-gray-200">
              <div
                className="h-2 rounded bg-blue-400"
                style={{ width: `${value}%`, maxWidth: "100%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
