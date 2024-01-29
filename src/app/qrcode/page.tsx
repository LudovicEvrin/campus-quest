"use client";
import React from 'react';
import {QrScanner} from '@yudiel/react-qr-scanner';

const Page = () => {
    return (
        <QrScanner
            onDecode={(result) => window.alert("yahou")}
            onResult={(result) => window.alert("wahou")}
            onError={(error) => window.alert("oupsi")}
        />
    );
  }
  export default Page;