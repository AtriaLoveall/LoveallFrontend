import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import OTPSent from "./pages/OTPSent";
import Offer from "./pages/Offer";
import SingleOffer from "./pages/singleOffer";
import Redeem from "./pages/Redeem";
import About from "./pages/About";
import Charity from "./pages/Charity";
import Donation from "./pages/Donation";
import Volunteer from "./pages/Volunteer";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import EditPersonalInfo from "./pages/EditPersonalInfo";
import EditAddress from "./pages/EditAddress";
import Security from "./pages/Security";
import CustomerSupport from "./pages/CustomerSupport";
import LoyaltyCardProfile from "./pages/LoyaltyCardProfile";
import PaymentPage from "./pages/PaymentPage";
import Transaction from "./pages/Transaction";
import Business from "./pages/Business/Business";
import BusinessDashboard from "./pages/Business/Dashboard";
import BusinessProfile from "./pages/Business/BusinessProfile";
import YourOffers from "./pages/Business/YourOffer";
import Analytics from "./pages/Business/Analytics";
import Feedback from "./pages/Business/Feedback";
import BusinessTransaction from "./pages/Business/Transaction";
import QrCodeBusiness from "./components/QrCodeBusiness";
// import QrScannerBusiness from "./components/QrScannerBusiness";
import AdminLayout from "./pages/Admin/AdminLayout";
import DashboardAdmin from "./pages/Admin/DashboardAdmin";
import TransactionsAdmin from "./pages/Admin/TransactionsAdmin";
import AccountsAdmin from "./pages/Admin/AccountsAdmin";
import ServicesAdmin from "./pages/Admin/ServicesAdmin";
import PrivilegesAdmin from "./pages/Admin/PrivilegesAdmin";
import SettingsAdmin from "./pages/Admin/SettingsAdmin";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/business" element={<Business />}>
        <Route path="summary" element={<BusinessDashboard />} />
        <Route path="profile" element={<BusinessProfile />} />
        <Route path="offers" element={<YourOffers />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="transactions" element={<BusinessTransaction />} />
        <Route path="qr-code/:offerId" element={<QrCodeBusiness />} />
        {/* <Route path="qr-scanner" element={<QrScannerBusiness />} /> */}
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp-sent" element={<OTPSent />} />
      <Route path="/stores" element={<Offer />} />
      <Route path="/offer/:offer_id" element={<SingleOffer />} />
      <Route path="/redeem/:offerId" element={<Redeem />} />
      <Route path="/about" element={<About />} />
      <Route path="/charity" element={<Charity />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/volunteer" element={<Volunteer />} />

      <Route path="/loyalty-card-profile" element={<LoyaltyCardProfile />} />

      {/* Payment Gateway */}
      <Route path="/payment-gateway" element={<PaymentPage />} />

      {/* Profile and its sub-routes */}
      <Route path="/profile" element={<Profile />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="account" element={<Account />} />
        <Route path="transaction" element={<Transaction />} />
        <Route
          path="account/edit-personal-info"
          element={<EditPersonalInfo />}
        />
        <Route path="account/edit-address" element={<EditAddress />} />
        <Route path="security" element={<Security />} />
        <Route path="support" element={<CustomerSupport />} />
      </Route>

      {/* Admin routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardAdmin />} />
        <Route path="dashboard" element={<DashboardAdmin />} />
        <Route path="transactions" element={<TransactionsAdmin />} />
        <Route path="accounts" element={<AccountsAdmin />} />
        <Route path="services" element={<ServicesAdmin />} />
        <Route path="privileges" element={<PrivilegesAdmin />} />
        <Route path="settings" element={<SettingsAdmin />} />
      </Route>

      {/* 404 - Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;

