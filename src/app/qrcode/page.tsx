"use client";
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