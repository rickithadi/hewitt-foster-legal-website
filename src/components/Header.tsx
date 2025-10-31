import React, { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { contactInfo } from '../data/content';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'Meet the Attorneys', href: '#attorneys' },
    { label: 'Bankruptcy Law', href: '#bankruptcy' },
    { label: 'Traffic Law', href: '#traffic' },
    { label: 'Divorce Law', href: '#divorce' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center space-x-1 hover:text-gold-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center space-x-1 hover:text-gold-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="mt-1 sm:mt-0">
              <span className="text-gold-300 font-medium">Free Consultations Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-primary-900">
              Hewitt Foster Legal Group, LTD
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a 
              href="#contact" 
              className="hidden sm:inline-block btn-primary"
            >
              Request Consultation
            </a>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="block mt-4 text-center btn-primary w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;