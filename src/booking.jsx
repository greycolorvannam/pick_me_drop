import React, { useState } from 'react';
import { Car, MapPin, Clock, Phone, User, Navigation, CheckCircle, Truck, Users, Globe, Mail } from 'lucide-react';

export default function TaxiBooking() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    pickup: '',
    dropoff: '',
    time: '',
    vehicleType: 'sedan',
    tripType: 'oneway',
    distance: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const vehicles = {
    sedan: {
      name: 'Sedan',
      capacity: 'Normal Car',
      oneway: 14,
      twoway: 13,
      icon: Car
    },
    suv: {
      name: 'SUV',
      capacity: '7 Seater',
      oneway: 19,
      twoway: 18,
      icon: Users
    },
    tempo: {
      name: 'Tempo',
      capacity: '12 + 1',
      oneway: 23,
      twoway: 23,
      icon: Truck
    },
    innova: {
      name: 'Innova',
      capacity: '7 Seater',
      oneway: 19,
      twoway: 18,
      icon: Users
    }
  };

  const handleSubmit = () => {
    if (formData.name && formData.contact && formData.pickup && formData.dropoff && formData.time) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', contact: '', pickup: '', dropoff: '', time: '', vehicleType: 'sedan', tripType: 'oneway', distance: '' });
      }, 3000);
    }
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-red-50">
      {/* Hero Section with Split Layout on Desktop */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-yellow-500 text-white min-h-screen lg:min-h-[600px]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
            {/* Left Content */}
            <div className="text-center lg:text-left mb-8 lg:mb-0 lg:pt-12">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="relative">
                  <Car className="w-16 h-16 sm:w-20 sm:h-20 animate-bounce" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                Reliable One-Way<br />& Round Trip<br />
                <span className="text-yellow-300">Taxi Service</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl mb-6 text-red-100 max-w-xl mx-auto lg:mx-0">
                Affordable, transparent, and comfortable rides across <span className="text-yellow-300 font-semibold">Karnataka & Tamil Nadu</span>. Trusted by thousands for safe and timely journeys.
              </p>
              
              <a href="tel:+918904094174" className="inline-block mb-8">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                  Call for Quote: +91 89040 94174
                </button>
              </a>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 text-sm lg:text-base">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="font-semibold">No Hidden Charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="font-semibold">24/7 Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="font-semibold">Professional Drivers</span>
                </div>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:pt-0">
              <div className="bg-gray-900 rounded-t-2xl px-6 py-4">
                <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 text-center">
                  Quick Booking Form
                </h2>
              </div>
              
              <div className="bg-white rounded-b-3xl shadow-2xl p-6 space-y-4">
                {/* Name Input */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 text-sm">
                    <User className="w-4 h-4 text-red-500" />
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Vehicle Selection */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-sm">
                    Select Vehicle *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(vehicles).map(([key, vehicle]) => {
                      const IconComponent = vehicle.icon;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => handleChange('vehicleType', key)}
                          className={`p-3 rounded-lg border-2 font-semibold transition-all duration-300 flex flex-col items-center gap-2 ${
                            formData.vehicleType === key
                              ? 'border-red-500 bg-red-50 text-red-700 shadow-md'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-red-300'
                          }`}
                        >
                          <IconComponent className={`w-6 h-6 ${formData.vehicleType === key ? 'text-red-500' : 'text-gray-500'}`} />
                          <div className="text-center">
                            <p className="font-bold text-xs">{vehicle.name}</p>
                            <p className="text-xs opacity-75">₹{formData.tripType === 'oneway' ? vehicle.oneway : vehicle.twoway}/km</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Trip Type Dropdown */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    Trip Type *
                  </label>
                  <select
                    value={formData.tripType}
                    onChange={(e) => handleChange('tripType', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all duration-300"
                  >
                    <option value="oneway">One Way</option>
                    <option value="twoway">Round Trip</option>
                  </select>
                </div>

                {/* Pickup Location */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 text-sm">
                    <MapPin className="w-4 h-4 text-red-500" />
                    Pick-up Location *
                  </label>
                  <input
                    type="text"
                    value={formData.pickup}
                    onChange={(e) => handleChange('pickup', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                    placeholder="Enter a location"
                  />
                </div>

                {/* Drop Location */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 text-sm">
                    <MapPin className="w-4 h-4 text-yellow-500" />
                    Drop-up Location *
                  </label>
                  <input
                    type="text"
                    value={formData.dropoff}
                    onChange={(e) => handleChange('dropoff', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all duration-300"
                    placeholder="Enter a location"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 text-sm">
                    <Phone className="w-4 h-4 text-red-500" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.contact}
                    onChange={(e) => handleChange('contact', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Pickup Date */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 text-sm">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    Pick-up Date *
                  </label>
                  <input
                    type="date"
                    value={formData.time}
                    onChange={(e) => handleChange('time', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all duration-300"
                  />
                </div>

                {/* Pickup Time */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2 text-sm">
                    <Clock className="w-4 h-4 text-red-500" />
                    Pick-up Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold py-3 rounded-lg hover:from-red-600 hover:to-yellow-600 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book Now
                </button>

                <p className="text-center text-xs text-gray-600 mt-4">
                  Best prices guaranteed • 24/7 customer support • Verified drivers
                </p>

                {/* Success Message */}
                {submitted && (
                  <div className="mt-4 p-4 bg-green-100 border-2 border-green-500 rounded-lg flex items-center gap-3 animate-fade-in">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 font-semibold text-sm">
                      Booking confirmed! We'll contact you shortly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Quick Response</h3>
              <p className="text-gray-600">Get a ride within minutes</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Clean Vehicles</h3>
              <p className="text-gray-600">Well-maintained fleet</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Safe Journey</h3>
              <p className="text-gray-600">Experienced drivers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Column 1 - Brand */}
            <div>
              <h3 className="text-yellow-300 font-bold text-lg mb-4">Drops One Way Taxi</h3>
              <p className="text-sm leading-relaxed mb-4 text-red-100">
                Your trusted partner for reliable and affordable taxi services across Karnataka and Select Tamil Nadu Cities. Professional drivers, well-maintained vehicles, transparent pricing.
              </p>
              <a href="https://dropsonewaytaxi.in" className="text-yellow-300 hover:text-yellow-200 text-sm flex items-center gap-2 transition-colors">
                <Globe className="w-4 h-4" />
                dropsonewaytaxi.in
              </a>
            </div>

            {/* Column 2 - Services */}
            <div>
              <h3 className="text-yellow-300 font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-red-100">
                <li><a href="#" className="hover:text-yellow-300 transition-colors">One-Way Taxi</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Round Trips</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Corporate Travel</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Airport Transfers</a></li>
                <li><a href="#" className="hover:text-yellow-300 transition-colors">Outstation Cabs</a></li>
              </ul>
            </div>

            {/* Column 3 - Coverage Areas */}
            <div>
              <h3 className="text-yellow-300 font-bold text-lg mb-4">Coverage Areas</h3>
              <ul className="space-y-2 text-sm text-red-100">
                <li>Bengaluru • Mysuru</li>
                <li>Chennai • Coimbatore</li>
                <li>Mangalore • Hubli</li>
                <li>Salem • Trichy</li>
                <li>And 45+ more cities</li>
              </ul>
            </div>

            {/* Column 4 - Contact Us */}
            <div>
              <h3 className="text-yellow-300 font-bold text-lg mb-4">Contact Us</h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">8904094174</p>
                    <p className="text-xs text-red-100">24/7 Booking</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">dropsonewaytaxi@gmail.com</p>
                    <p className="text-xs text-red-100">Customer Support</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">24/7 Taxi Service</p>
                    <p className="text-xs text-red-100">Available Always</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Navigation className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Karnataka & Tamil Nadu</p>
                    <p className="text-xs text-red-100">Service Areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-red-500 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-red-100">
              <p>&copy; 2024 Drops One Way Taxi. All rights reserved.</p>
              <div className="flex gap-6 mt-4 sm:mt-0">
                <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-yellow-300 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
