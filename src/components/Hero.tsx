import React from 'react';
import { Phone, MessageSquare, Star } from 'lucide-react';
import { contactInfo } from '../data/content';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                You Deserve A{' '}
                <span className="text-gold-400">Fresh Start!</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-medium">
                Hewitt Foster Legal Group, LTD Can Help!
              </p>
            </div>
            
            <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
              Speak with our experienced traffic, divorce and bankruptcy lawyers in Cincinnati, OH today. 
              We're dedicated to helping you navigate your legal challenges with professional, 
              compassionate representation.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-lg transition-colors duration-200 text-lg shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now {contactInfo.phone}
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-primary-900 text-white font-bold rounded-lg transition-colors duration-200 text-lg"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Request Consultation
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-8 pt-4">
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <span className="text-blue-100 ml-2">Excellent Client Reviews</span>
              </div>
              <div className="text-blue-100">
                <span className="font-semibold">Free Consultations</span> • Years of Experience
              </div>
            </div>
          </div>

          {/* Contact card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6 border border-white/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gold-400 mb-2">Talk Now</h3>
              <p className="text-blue-100">Get immediate legal assistance</p>
            </div>
            
            <div className="space-y-4">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center justify-center w-full py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-lg transition-colors duration-200 text-xl"
              >
                <Phone className="w-6 h-6 mr-3" />
                {contactInfo.phone}
              </a>
              
              {contactInfo.alternatePhone && (
                <a 
                  href={`tel:${contactInfo.alternatePhone}`}
                  className="flex items-center justify-center w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {contactInfo.alternatePhone}
                </a>
              )}
              
              <div className="text-center pt-4 border-t border-white/20">
                <p className="text-blue-100 text-sm mb-2">Available by phone and email</p>
                <p className="text-blue-100 text-sm">Remote and in-person consultations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;