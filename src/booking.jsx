import React, { useState } from 'react';
import { Car, MapPin, Clock, Phone, User, Navigation, CheckCircle } from 'lucide-react';

export default function TaxiBooking() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    pickup: '',
    dropoff: '',
    time: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.contact && formData.pickup && formData.dropoff && formData.time) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', contact: '', pickup: '', dropoff: '', time: '' });
      }, 3000);
    }
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-yellow-500 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-black transform rotate-12 scale-150"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Car className="w-16 h-16 sm:w-20 sm:h-20 animate-bounce" />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Ride in <span className="text-yellow-300">Style</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 text-red-100 max-w-2xl mx-auto">
              Your premium taxi service for a comfortable journey
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 text-sm sm:text-base">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                <span>24/7 Service</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5" />
                <span>Anywhere</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span>Safe & Secure</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(254, 242, 242)"/>
          </svg>
        </div>
      </div>

      {/* Contact Us Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <a 
          href="tel:+917358160847"
          className="block w-full sm:w-auto mx-auto max-w-md"
        >
          <button className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold py-4 px-8 rounded-full hover:from-yellow-600 hover:to-red-600 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 text-lg">
            <Phone className="w-6 h-6 animate-pulse" />
            Contact Us - Call Now
          </button>
        </a>
      </div>

      {/* Booking Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          <div className="bg-gradient-to-r from-red-500 to-yellow-500 px-6 sm:px-8 py-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center flex items-center justify-center gap-3">
              <Navigation className="w-6 h-6 sm:w-8 sm:h-8" />
              Book Your Ride
            </h2>
          </div>

          <div className="p-6 sm:p-8 md:p-10 space-y-6">
            {/* Name Field */}
            <div className="group">
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                <User className="w-5 h-5 text-red-500" />
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>

            {/* Contact Field */}
            <div className="group">
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                <Phone className="w-5 h-5 text-yellow-500" />
                Contact Number
              </label>
              <input
                type="tel"
                value={formData.contact}
                onChange={(e) => handleChange('contact', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Location Fields */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group">
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <MapPin className="w-5 h-5 text-red-500" />
                  Pickup Location
                </label>
                <input
                  type="text"
                  value={formData.pickup}
                  onChange={(e) => handleChange('pickup', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all duration-300"
                  placeholder="From where?"
                />
              </div>

              <div className="group">
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <Navigation className="w-5 h-5 text-yellow-500" />
                  Drop Location
                </label>
                <input
                  type="text"
                  value={formData.dropoff}
                  onChange={(e) => handleChange('dropoff', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                  placeholder="To where?"
                />
              </div>
            </div>

            {/* Time Field */}
            <div className="group">
              <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                <Clock className="w-5 h-5 text-red-500" />
                Pickup Time
              </label>
              <input
                type="datetime-local"
                value={formData.time}
                onChange={(e) => handleChange('time', e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all duration-300"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold py-4 rounded-xl hover:from-red-600 hover:to-yellow-600 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Car className="w-5 h-5" />
              Book Now
            </button>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mx-6 sm:mx-8 md:mx-10 mb-6 sm:mb-8 md:mb-10 p-4 bg-green-100 border-2 border-green-500 rounded-xl flex items-center gap-3 animate-fade-in">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <p className="text-green-800 font-semibold">
                Booking confirmed! We'll contact you shortly.
              </p>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Quick Response</h3>
            <p className="text-gray-600 text-sm">Get a ride within minutes</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Clean Vehicles</h3>
            <p className="text-gray-600 text-sm">Well-maintained fleet</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Safe Journey</h3>
            <p className="text-gray-600 text-sm">Experienced drivers</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}