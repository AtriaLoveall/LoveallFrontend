import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const Redeem = () => {
  const staticQRCodeData = JSON.stringify({
    offer_id: 148,
    offer_type: "Flat Discount",
    description: "15% off on all books",
    user_name: "Midhun Mohan"
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Your Redemption QR Code</h1>
        <div className="mb-4">
          <QRCodeSVG value={staticQRCodeData} size={256} />
        </div>
        <p className="text-center text-gray-600 mb-4">
          Show this QR code to the store to redeem your offer.
        </p>
        <div className="text-sm text-gray-500">
          <p><strong>Offer ID:</strong> 148</p>
          <p><strong>Offer Type:</strong> Flat Discount</p>
          <p><strong>Description:</strong> 15% off on all books</p>
          <p><strong>User Name:</strong> Midhun Mohan</p>
        </div>
      </div>
    </div>
  );
};

export default Redeem;

