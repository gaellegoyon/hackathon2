import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Header from "@components/Header";
import Navbar from "@components/Navbar";
import "leaflet/dist/leaflet.css";
import Geolocalisation from "@components/Geolocalisation";
import geo from "@assets/geo.svg";
import L from "leaflet";
import FilterMap from "@components/FilterMap";
import Rayon from "@components/Rayon";

const location = [45.764043, 4.835659];
const zoom = 12;

function Map() {
  const [geoAct, setGeoAct] = useState(false);
  const [layerGroup] = useState(L.layerGroup()); // ajout calque map

  const handleGeo = () => {
    layerGroup.clearLayers();
    setGeoAct(!geoAct);
  };

  return (
    <div>
      <Header />
      <MapContainer
        center={location}
        zoom={zoom}
        scrollWheelZoom
        className="custom-popup"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        <Geolocalisation
          handleGeo={handleGeo}
          layerGroup={layerGroup}
          geoAct={geoAct}
        />
      </MapContainer>
      <FilterMap />
      <div className="absolute bottom-[38rem] ml-4 w-[20%]">
        <Rayon />
      </div>
      <button
        type="button"
        onClick={handleGeo}
        className=" absolute bottom-[44rem] left-[20rem] bg-white w-12 h-12 rounded-full flex justify-center items-center border-2 border-[#890000]"
      >
        <img src={geo} alt="" className="w-7 h-7" />
      </button>
      <Navbar />
    </div>
  );
}

export default Map;
