
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, User, Scissors } from 'lucide-react';
import { format } from 'date-fns';

interface Appointment {
  id: string;
  date: Date;
  time: string;
  clientName: string;
  service: string;
  barber: string;
  status: 'confirmed' | 'pending' | 'completed';
  price: number;
}

const AdminDashboard = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // Mock data - in real app this would come from your database
  const appointments: Appointment[] = [
    {
      id: '1',
      date: new Date(),
      time: '09:00',
      clientName: 'John Doe',
      service: 'Classic Haircut',
      barber: 'Carlos Silva',
      status: 'confirmed',
      price: 35
    },
    {
      id: '2',
      date: new Date(),
      time: '10:30',
      clientName: 'Mike Johnson',
      service: 'Beard Trim',
      barber: 'Miguel Santos',
      status: 'pending',
      price: 25
    },
    {
      id: '3',
      date: new Date(),
      time: '14:00',
      clientName: 'Robert Smith',
      service: 'Hair + Beard Combo',
      barber: 'João Pereira',
      status: 'confirmed',
      price: 55
    }
  ];

  const filteredAppointments = appointments.filter(
    apt => format(apt.date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
  );

  const stats = {
    todayAppointments: filteredAppointments.length,
    todayRevenue: filteredAppointments.reduce((sum, apt) => sum + apt.price, 0),
    confirmedToday: filteredAppointments.filter(apt => apt.status === 'confirmed').length,
    pendingToday: filteredAppointments.filter(apt => apt.status === 'pending').length
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'completed': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-barbershop-black py-20">
      <div className="section-container">
        <h1 className="text-4xl font-bold text-center mb-8 text-barbershop-off-white">
          Admin <span className="text-gradient">Dashboard</span>
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-barbershop-charcoal border-barbershop-gold/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-barbershop-gold text-sm">Today's Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-barbershop-off-white">{stats.todayAppointments}</div>
            </CardContent>
          </Card>

          <Card className="bg-barbershop-charcoal border-barbershop-gold/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-barbershop-gold text-sm">Today's Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-barbershop-off-white">${stats.todayRevenue}</div>
            </CardContent>
          </Card>

          <Card className="bg-barbershop-charcoal border-barbershop-gold/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-barbershop-gold text-sm">Confirmed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">{stats.confirmedToday}</div>
            </CardContent>
          </Card>

          <Card className="bg-barbershop-charcoal border-barbershop-gold/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-barbershop-gold text-sm">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-400">{stats.pendingToday}</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <Card className="bg-barbershop-charcoal border-barbershop-gold/20">
            <CardHeader>
              <CardTitle className="text-barbershop-gold flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                className="rounded-md border border-barbershop-gold/20"
              />
            </CardContent>
          </Card>

          {/* Appointments List */}
          <div className="lg:col-span-2">
            <Card className="bg-barbershop-charcoal border-barbershop-gold/20">
              <CardHeader>
                <CardTitle className="text-barbershop-gold">
                  Appointments for {format(selectedDate, 'PPP')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredAppointments.length === 0 ? (
                    <p className="text-barbershop-off-white/70 text-center py-8">
                      No appointments scheduled for this date.
                    </p>
                  ) : (
                    filteredAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="p-4 rounded-lg border border-barbershop-gold/10 hover:border-barbershop-gold/20 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 text-barbershop-off-white font-medium">
                              <Clock className="w-4 h-4" />
                              {appointment.time}
                            </div>
                            <Badge className={`${getStatusColor(appointment.status)} text-white`}>
                              {appointment.status}
                            </Badge>
                          </div>
                          <div className="text-barbershop-gold font-semibold">
                            ${appointment.price}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                          <div className="flex items-center gap-2 text-barbershop-off-white/80">
                            <User className="w-4 h-4" />
                            {appointment.clientName}
                          </div>
                          <div className="flex items-center gap-2 text-barbershop-off-white/80">
                            <Scissors className="w-4 h-4" />
                            {appointment.service}
                          </div>
                          <div className="text-barbershop-off-white/80">
                            Barber: {appointment.barber}
                          </div>
                        </div>

                        <div className="flex gap-2 mt-3">
                          {appointment.status === 'pending' && (
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                              Confirm
                            </Button>
                          )}
                          {appointment.status === 'confirmed' && (
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                              Complete
                            </Button>
                          )}
                          <Button size="sm" variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
