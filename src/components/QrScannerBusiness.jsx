import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader'; // Import the named export

const QrScannerBusiness = () => {
  const [data, setData] = useState('No result');

  const handleScan = (result) => {
    if (result) {
      setData(result?.text); // Access the scanned text
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">QR Code Scanner</h2>
      <div className="max-w-md mx-auto">
        <QrReader
          onResult={(result, error) => {
            if (result) handleScan(result);
            if (error) handleError(error);
          }}
          style={{ width: '100%' }}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Scanned Result:</h3>
        <p className="mt-2 p-2 bg-gray-100 rounded">{data}</p>
      </div>
    </div>
  );
};

export default QrScannerBusiness;
