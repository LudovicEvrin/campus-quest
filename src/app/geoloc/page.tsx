"use client";
import React from "react";
import { useGeolocated } from "react-geolocated";

const Geoloc = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: Infinity,
            },
            watchPosition: true,
            userDecisionTimeout: 5000,
            suppressLocationOnMount: false,
            isOptimisticGeolocationEnabled: true,
        });
    if (coords){
            return <div>GG : {coords.latitude} {coords.longitude}</div> ;
        } else {
            return <div>oups</div>
        }

};

export default Geoloc;