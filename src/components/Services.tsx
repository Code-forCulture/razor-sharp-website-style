
import React from 'react';

const Services = () => {
  const services = [
    {
      name: "Classic Haircut",
      price: "$70",
      description: "Traditional haircut with razor and scissors, impeccable finish with hot towel treatment.",
      features: ["Consultation", "Precision Cut", "Hot Towel", "Styling"]
    },
    {
      name: "Beard Styling",
      price: "$50",
      description: "Personalized beard design with hot towel and premium aftershave application.",
      features: ["Beard Trim", "Hot Towel", "Premium Oils", "Face Massage"]
    },
    {
      name: "The Full Experience",
      price: "$110",
      description: "Complete grooming package combining haircut and beard styling for the discerning gentleman.",
      features: ["Haircut", "Beard Styling", "Hot Towel", "Premium Products"]
    },
    {
      name: "Groom's Package",
      price: "$300",
      description: "Complete package for your special day, including haircut, beard trim, relaxation, and exclusive gift.",
      features: ["Premium Cut", "Beard Styling", "Face Treatment", "Relaxation Session", "Gift Package"]
    }
  ];

  const handleBookService = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-barbershop-charcoal">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-barbershop-off-white">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-barbershop-off-white/80 max-w-3xl mx-auto">
            Crafted with precision, delivered with passion. Each service is an experience in luxury grooming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="bg-barbershop-charcoal-light border border-barbershop-gold/20 rounded-lg p-6 hover:border-barbershop-gold/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-barbershop-off-white mb-2">
                  {service.name}
                </h3>
                <div className="text-3xl font-bold text-barbershop-gold mb-4">
                  {service.price}
                </div>
                <p className="text-barbershop-off-white/80 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-barbershop-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-barbershop-off-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleBookService}
                className="w-full bg-barbershop-gold/10 hover:bg-barbershop-gold hover:text-barbershop-black text-barbershop-gold font-semibold py-3 rounded-md transition-all duration-300"
              >
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
