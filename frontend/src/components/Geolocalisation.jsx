/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import me from "@assets/me.svg";
import latlng from "latitude-longitude";
import { useCurrentUserContext } from "../contexts/userContext";

const icon = L.icon({
  iconSize: [35, 35],
  iconAnchor: [10, 41],
  popupAnchor: [8, -40],
  iconUrl: me,
});

function Geolocalisation({ handleGeo, layerGroup, geoAct }) {
  const { setDist } = useCurrentUserContext();

  const map = useMap();

  layerGroup.clearLayers();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const [lng, lat] = [
          position.coords.latitude,
          position.coords.longitude,
        ];

        setDist(
          Math.ceil(latlng.getDistance([lng, lat], [40.730601, 74.000447]))
        );

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
