"use client";
import React from "react";
import { useGeolocated } from "react-geolocated";
import {isWithin20Meters} from "./fonction";
import {QrScanner} from '@yudiel/react-qr-scanner';

const Demo = () => {
    const { coords, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            watchPosition : true,
            userDecisionTimeout: 5000,
        }); 
        const userLocation = coords
  ? {
      latitude: coords.latitude ?? 0,
      longitude: coords.longitude ?? 0,
    }
  : {
      latitude: 0,
      longitude: 0,
    };
          
          const targetLocation = {
            latitude: 49.200834,
            longitude: -0.35015,
          };

          const isWithin20MetersResult =  isWithin20Meters(userLocation, targetLocation);

    if(!isGeolocationEnabled){
 
         return (<div>Geolocation n'est pas activée </div>)
        
    }else if (isWithin20MetersResult){
        return (
            <QrScanner
                onDecode={(result) => console.log(result)}
                onError={(error) => console.log(error?.message)}
            />
        ); 
    }else {
        return (<div> tu dois être à l'école !</div>)
    }
};

export default Demo; 