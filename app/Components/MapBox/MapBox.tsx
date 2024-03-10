"use client";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useGlobalContext } from "@/app/context/globalContext";

interface Coordinates {
  lat: number;
  lon: number;
}

function FlyToActiveCity({ activeCityCords }: { activeCityCords: Coordinates }) {
  const map = useMap();

  useEffect(() => {
    if (activeCityCords) {
      const zoomLev = 13;
      const flyToOptions = {
        duration: 1.5,
      };

      map.flyTo([activeCityCords.lat, activeCityCords.lon], zoomLev, flyToOptions);
    }
  }, [activeCityCords, map]);

  return null;
}

function Mapbox() {
  const { forecast } = useGlobalContext();

  const activeCityCords = forecast?.coord;

  if (!forecast ||!forecast.coord ||!activeCityCords) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  const position = [activeCityCords.lat, activeCityCords.lon] as [number, number];

  return (
    <div className="flex-1 basis-[50%] border rounded-lg">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "calc(100% - 2rem)", width: "calc(100% - 2rem)"}}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FlyToActiveCity activeCityCords={activeCityCords} />
      </MapContainer>
    </div>
  );
}

export default Mapbox;