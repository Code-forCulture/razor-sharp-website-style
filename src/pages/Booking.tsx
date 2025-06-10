
import React from 'react';
import Navigation from '@/components/Navigation';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

const Booking = () => {
  return (
    <div className="min-h-screen bg-barbershop-black">
      <Navigation />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Booking;
