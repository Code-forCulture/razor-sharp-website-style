
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { CalendarIcon, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface Barber {
  id: string;
  name: string;
  specialty: string;
}

interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
}

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedBarber, setSelectedBarber] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const { toast } = useToast();

  const barbers: Barber[] = [
    { id: '1', name: 'Carlos Silva', specialty: 'Classic Cuts & Beard Styling' },
    { id: '2', name: 'Miguel Santos', specialty: 'Modern Styles & Fades' },
    { id: '3', name: 'João Pereira', specialty: 'Traditional Shaves' }
  ];

  const services: Service[] = [
    { id: '1', name: 'Classic Haircut', duration: 45, price: 35 },
    { id: '2', name: 'Beard Trim', duration: 30, price: 25 },
    { id: '3', name: 'Traditional Shave', duration: 60, price: 40 },
    { id: '4', name: 'Hair + Beard Combo', duration: 75, price: 55 }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedBarber || !selectedService) {
      toast({
        title: "Incomplete Booking",
        description: "Please fill in all fields before booking.",
        variant: "destructive"
      });
      return;
    }

    const selectedServiceData = services.find(s => s.id === selectedService);
    const selectedBarberData = barbers.find(b => b.id === selectedBarber);

    // Here you would typically save to a database
    toast({
      title: "Booking Confirmed!",
      description: `Your appointment with ${selectedBarberData?.name} for ${selectedServiceData?.name} on ${format(selectedDate, 'PPP')} at ${selectedTime} has been confirmed.`,
    });

    // Reset form
    setSelectedDate(undefined);
    setSelectedTime('');
    setSelectedBarber('');
    setSelectedService('');
  };

  return (
    <div className="min-h-screen bg-barbershop-black py-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-barbershop-off-white">
            Book Your <span className="text-gradient">Appointment</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Date Selection */}
            <Card className="bg-barbershop-charcoal border-barbershop-gold/20">
              <CardHeader>
                <CardTitle className="text-barbershop-gold flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  Select Date
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className="rounded-md border border-barbershop-gold/20"
                />
              </CardContent>
            </Card>

            {/* Time & Details Selection */}
            <div className="space-y-6">
              {/* Time Selection */}
              <Card className="bg-barbershop-charcoal border-barbershop-gold/20">
                <CardHeader>
                  <CardTitle className="text-barbershop-gold flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Select Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                        className={selectedTime === time ? "bg-barbershop-gold text-barbershop-black" : "border-barbershop-gold/20 text-barbershop-off-white hover:bg-barbershop-gold/10"}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Barber Selection */}
              <Card className="bg-barbershop-charcoal border-barbershop-gold/20">
                <CardHeader>
                  <CardTitle className="text-barbershop-gold">Choose Your Barber</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedBarber} onValueChange={setSelectedBarber}>
                    {barbers.map((barber) => (
                      <div key={barber.id} className="flex items-center space-x-2 p-3 rounded-lg border border-barbershop-gold/10 hover:border-barbershop-gold/20">
                        <RadioGroupItem value={barber.id} id={barber.id} />
                        <Label htmlFor={barber.id} className="flex-1 cursor-pointer">
                          <div className="text-barbershop-off-white font-medium">{barber.name}</div>
                          <div className="text-barbershop-off-white/70 text-sm">{barber.specialty}</div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Service Selection */}
              <Card className="bg-barbershop-charcoal border-barbershop-gold/20">
                <CardHeader>
                  <CardTitle className="text-barbershop-gold">Select Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedService} onValueChange={setSelectedService}>
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center space-x-2 p-3 rounded-lg border border-barbershop-gold/10 hover:border-barbershop-gold/20">
                        <RadioGroupItem value={service.id} id={service.id} />
                        <Label htmlFor={service.id} className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-barbershop-off-white font-medium">{service.name}</div>
                              <div className="text-barbershop-off-white/70 text-sm">{service.duration} minutes</div>
                            </div>
                            <div className="text-barbershop-gold font-semibold">${service.price}</div>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Book Button */}
              <Button 
                onClick={handleBooking}
                className="w-full btn-primary text-lg py-6"
                disabled={!selectedDate || !selectedTime || !selectedBarber || !selectedService}
              >
                Confirm Booking
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
