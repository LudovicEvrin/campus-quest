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

        if (!isGeolocationAvailable){
            return <div>Your browser does not support Geolocation</div>
        } else if (!isGeolocationEnabled){
            return <div>Geolocation is not enabled</div>
        } else if (coords){
            const targetLatitude = 49.200834;
            const targetLongitude = -0.35015;
            const earthRadius = 6371; // Rayon de la Terre en kilomètres
        
            // Convertir les coordonnées en radians
            const latitude1 = coords.latitude * (Math.PI / 180);
            const longitude1 = coords.longitude * (Math.PI / 180);
            const latitude2 = targetLatitude * (Math.PI / 180);
            const longitude2 = targetLongitude * (Math.PI / 180);
        
            // Calculer la différence de latitude et de longitude
            const deltaLat = latitude2 - latitude1;
            const deltaLon = longitude2 - longitude1;
        
            // Calculer la distance haversine
            const a =
                Math.sin(deltaLat / 2) ** 2 +
                Math.cos(latitude1) * Math.cos(latitude2) * Math.sin(deltaLon / 2) ** 2;
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = earthRadius * c * 1000; // En mètres
        
            if (distance <= 20) {
                return <div>Coordonnées à moins de 20 mètres du point cible</div>;
            } else {
                return <div>Coordonnées à plus de 20 mètres du point cible</div>;
            }
        } else {
            return <div>oups</div>
        }

};

export default Geoloc;