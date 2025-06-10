
import React from 'react';
import Navigation from '@/components/Navigation';
import AdminDashboard from '@/components/AdminDashboard';
import Footer from '@/components/Footer';

const AdminDashboardPage = () => {
  return (
    <div className="min-h-screen bg-barbershop-black">
      <Navigation />
      <AdminDashboard />
      <Footer />
    </div>
  );
};

export default AdminDashboardPage;
