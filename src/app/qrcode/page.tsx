"use client";
import React, { usehistory } from 'react';
import {QrScanner} from '@yudiel/react-qr-scanner';

const Page = () => {
    return (
        <QrScanner
            onDecode={(result) =>  window.location.href = result}
            onError={(error) => window.alert("oupsi")}
        />
    );
  }
  export default Page;