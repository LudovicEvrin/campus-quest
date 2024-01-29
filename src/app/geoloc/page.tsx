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
        
        if (!isGeolocationEnabled){
            return <div>Geolocation is not enabled</div>
        } else if (coords && coords.latitude > 49.1900000 && coords.latitude < 49.2000000 && coords.longitude > -0.3600000 && coords.longitude < -0.3500000){
            return <div>GG : {coords.latitude} {coords.longitude}</div> ;
        } else {
            return <div>oups</div>
        }

};

export default Geoloc;