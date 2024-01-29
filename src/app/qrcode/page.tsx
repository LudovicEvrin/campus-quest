"use client";
import React from 'react';
import {QrScanner} from '@yudiel/react-qr-scanner';

const Page = () => {
    return (
        <QrScanner
            onDecode={(result) => console.log(result)}
            onError={(error) => console.log(error?.message)}
        />
    );
  }
  export default Page;