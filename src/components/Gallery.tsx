
import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop",
      alt: "Professional barber at work",
      category: "Barber"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      alt: "Modern barbershop interior",
      category: "Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2076&auto=format&fit=crop",
      alt: "Precision haircut styling",
      category: "Styling"
    },
    {
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop",
      alt: "Classic barbershop tools",
      category: "Tools"
    },
    {
      src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=1999&auto=format&fit=crop",
      alt: "Elegant barbershop atmosphere",
      category: "Atmosphere"
    },
    {
      src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070&auto=format&fit=crop",
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
