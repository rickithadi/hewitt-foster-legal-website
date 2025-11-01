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
    <header className="bg-white shadow-soft sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center space-x-1 hover:text-primary-200 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center space-x-1 hover:text-primary-200 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="mt-1 sm:mt-0">
              <span className="text-primary-100 font-medium">Free Consultations Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-primary-900 hover:text-primary-700 transition-colors duration-200">
              Hewitt Foster Legal Group, LTD
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-neutral-700 hover:text-primary-900 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a 
              href="#contact" 
              className="hidden sm:inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 shadow-soft hover:shadow-medium"
            >
              Request Consultation
            </a>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-neutral-700 hover:text-primary-900 hover:bg-neutral-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200 shadow-soft">
          <nav className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-neutral-700 hover:text-primary-900 hover:bg-neutral-50 rounded-md font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="block mt-4 text-center bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 w-full shadow-soft"
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