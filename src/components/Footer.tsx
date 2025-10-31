import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Scale } from 'lucide-react';
import { contactInfo } from '../data/content';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const practiceAreaLinks = [
    { label: 'Bankruptcy Law', href: '/bankruptcy-law-cincinnati-oh/' },
    { label: 'Traffic Law', href: '/traffic-law-cincinnati-oh/' },
    { label: 'Divorce Law', href: '/divorce-law-cincinnati-oh/' },
    { label: 'Business Law', href: '/contact-us-cincinnati-oh/' }
  ];

  const quickLinks = [
    { label: 'Meet the Attorneys', href: '#attorneys' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Request Consultation', href: '#contact' },
    { label: 'Blog', href: '/blog/' }
  ];

  const credentials = [
    {
      name: 'Avvo',
      url: 'https://www.avvo.com/attorneys/45236-oh-harry-hewitt-601634.html',
      logo: '🏆'
    },
    {
      name: 'Justia',
      url: 'https://lawyers.justia.com/lawyer/h-leon-hewitt-1502217',
      logo: '⚖️'
    },
    {
      name: 'Cincinnati Black Lawyers Association',
      url: 'https://cincyblac.org/profile.lasso?id=192',
      logo: '🤝'
    },
    {
      name: 'FindLaw',
      url: 'https://pview.findlaw.com/view/4677704_1',
      logo: '🔍'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Scale className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-bold">Hewitt Foster Legal Group, LTD</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional legal representation in Cincinnati, OH. Specializing in bankruptcy, 
              traffic, and divorce law with years of experience and dedicated service.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5 mr-3" />
                {contactInfo.phone}
              </a>
              {contactInfo.alternatePhone && (
                <a 
                  href={`tel:${contactInfo.alternatePhone}`}
                  className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  {contactInfo.alternatePhone}
                </a>
              )}
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Mail className="w-5 h-5 mr-3" />
                {contactInfo.email}
              </a>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Practice areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Practice Areas</h4>
            <ul className="space-y-3">
              {practiceAreaLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional credentials */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Professional Credentials</h4>
            <div className="space-y-3">
              {credentials.map((credential) => (
                <a
                  key={credential.name}
                  href={credential.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <span className="mr-3 text-lg">{credential.logo}</span>
                  <span className="group-hover:underline">{credential.name}</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright © {currentYear} Hewitt Foster Legal Group, LTD. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Legal Notice
              </a>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-xs leading-relaxed">
              The information on this website is for general information purposes only. Nothing on this site 
              should be taken as legal advice for any individual case or situation. This information is not 
              intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;