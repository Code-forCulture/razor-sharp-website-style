
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop"
          alt="Premium barbershop interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-barbershop-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-container">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-barbershop-off-white">
            Where Style
            <span className="block text-gradient">Meets Tradition</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-barbershop-off-white/90 max-w-3xl mx-auto">
            Experience the art of traditional barbering with modern sophistication. 
            Every cut is a masterpiece, every visit an experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-10 py-4">
              Book Your Experience
            </button>
            <a
              href="#services"
              className="text-barbershop-gold hover:text-barbershop-gold-dark transition-colors font-medium text-lg border-b border-barbershop-gold/50 hover:border-barbershop-gold"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-barbershop-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
