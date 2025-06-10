
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: "123 Gentleman's Avenue, Downtown District, City 12345"
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+1 (555) 123-4567"
    },
    {
      icon: "✉️",
      title: "Email",
      details: "info@ofiodanavalha.com"
    },
    {
      icon: "🕒",
      title: "Opening Hours",
      details: "Mon-Fri: 9AM-8PM | Sat: 9AM-6PM | Sun: 10AM-4PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-barbershop-black">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-barbershop-off-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-barbershop-off-white/80 max-w-3xl mx-auto">
            Ready for the ultimate barbering experience? Contact us to book your appointment or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-barbershop-gold mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="flex items-start space-x-4">
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <h4 className="text-barbershop-gold font-semibold mb-1">
                      {info.title}
                    </h4>
                    <p className="text-barbershop-off-white/80">
                      {info.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Placeholder */}
            <div className="bg-barbershop-charcoal rounded-lg p-8 text-center">
              <h4 className="text-barbershop-gold font-semibold mb-4">Find Us</h4>
              <div className="bg-barbershop-charcoal-light rounded-lg p-8">
                <p className="text-barbershop-off-white/60">
                  Interactive Google Maps will be integrated here
                </p>
                <p className="text-sm text-barbershop-off-white/40 mt-2">
                  123 Gentleman's Avenue, Downtown District
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-barbershop-gold font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-barbershop-charcoal border border-barbershop-gold/20 rounded-lg text-barbershop-off-white focus:border-barbershop-gold focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-barbershop-gold font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-barbershop-charcoal border border-barbershop-gold/20 rounded-lg text-barbershop-off-white focus:border-barbershop-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-barbershop-gold font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-barbershop-charcoal border border-barbershop-gold/20 rounded-lg text-barbershop-off-white focus:border-barbershop-gold focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-barbershop-gold font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-barbershop-charcoal border border-barbershop-gold/20 rounded-lg text-barbershop-off-white focus:border-barbershop-gold focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Book Appointment</option>
                    <option value="services">Services Inquiry</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-barbershop-gold font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-barbershop-charcoal border border-barbershop-gold/20 rounded-lg text-barbershop-off-white focus:border-barbershop-gold focus:outline-none transition-colors resize-vertical"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
