
import React from 'react';

const About = () => {
  const features = [
    {
      title: "Master Craftsmen",
      description: "Our barbers are artists with years of experience, dedicated to perfecting their craft.",
      icon: "✂️"
    },
    {
      title: "Premium Experience",
      description: "Every visit is designed to be a luxurious escape from the ordinary.",
      icon: "👑"
    },
    {
      title: "Traditional Techniques",
      description: "We honor classic barbering traditions while embracing modern innovations.",
      icon: "🪒"
    },
    {
      title: "Quality Products",
      description: "We use only the finest grooming products and tools for exceptional results.",
      icon: "⭐"
    }
  ];

  return (
    <section id="about" className="py-20 bg-barbershop-charcoal">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-barbershop-off-white">
              The Art of <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-lg text-barbershop-off-white/80 mb-8 leading-relaxed">
              At O Fio da Navalha, we believe that a haircut is more than just grooming—it's an art form. 
              Our master barbers combine traditional techniques with modern precision to create looks that 
              reflect your personality and enhance your confidence.
            </p>
            <p className="text-lg text-barbershop-off-white/80 mb-8 leading-relaxed">
              Since our founding, we've been dedicated to providing an unparalleled barbering experience 
              in an atmosphere of sophistication and relaxation. Every detail is crafted to ensure your 
              visit is nothing short of exceptional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-barbershop-gold font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-barbershop-off-white/70 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <img
              src= '/images/barberMaster.jpg'
              alt="Master barber at work"
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-barbershop-black/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
