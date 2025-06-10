
import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: '/images/barber.jpg',
      alt: "Professional barber at work",
      category: "Barber"
    },
    {
      src: '/images/interior.jpg',
      alt: "Modern barbershop interior",
      category: "Interior"
    },
    {
      src: '/images/styling.jpg',
      alt: "Precision haircut styling",
      category: "Styling"
    },
    {
      src: '/images/tools.jpg',
      alt: "Classic barbershop tools",
      category: "Tools"
    },
    {
      src: '/images/elegante.jpg',
      alt: "Elegant barbershop atmosphere",
      category: "Atmosphere"
    },
    {
      src: '/images/craftBarber.jpg',
      alt: "Master barber craftsmanship",
      category: "Craftsmanship"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-barbershop-black">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-barbershop-off-white">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-barbershop-off-white/80 max-w-3xl mx-auto">
            Witness the artistry in every cut, the precision in every detail. Our gallery showcases the craftsmanship that defines us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-barbershop-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-barbershop-gold font-semibold text-sm uppercase tracking-wider">
                    {image.category}
                  </span>
                  <p className="text-barbershop-off-white mt-2 text-lg">
                    Click to enlarge
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-barbershop-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-barbershop-off-white hover:text-barbershop-gold text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
