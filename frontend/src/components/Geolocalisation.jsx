/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import me from "@assets/me.svg";

const icon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [10, 41],
  popupAnchor: [8, -40],
  iconUrl: me,
});

function Geolocalisation({ handleGeo, layerGroup, geoAct }) {
  const map = useMap();

  layerGroup.clearLayers();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const [lng, lat] = [
          position.coords.latitude,
          position.coords.longitude,
        ];

        {
          geoAct ? new L.Marker([lng, lat], { icon }).addTo(layerGroup) : null;
        }
      },
      (err) => {
        console.error(err);
      }
    );
    map.addLayer(layerGroup);
  }, [handleGeo]);

  return <div />;
}

export default Geolocalisation;
