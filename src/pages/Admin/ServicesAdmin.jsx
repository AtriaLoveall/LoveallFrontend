import React from "react";

const ServicesAdmin = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Services Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Payment Processing</h2>
          <p className="text-gray-600 mb-4">Manage payment gateway integrations and transactions</p>
          <button className="bg-[#971132] text-white px-4 py-2 rounded">Configure</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">User Management</h2>
          <p className="text-gray-600 mb-4">Handle user accounts and permissions</p>
          <button className="bg-[#971132] text-white px-4 py-2 rounded">Configure</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Analytics</h2>
          <p className="text-gray-600 mb-4">View and manage system analytics</p>
          <button className="bg-[#971132] text-white px-4 py-2 rounded">Configure</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesAdmin;

