import React from 'react';
import { Scale, Car, Heart, ArrowRight } from 'lucide-react';
import { practiceAreas } from '../data/content';

const iconComponents = {
  Scale,
  Car,
  Heart
};

const PracticeAreas: React.FC = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We Offer A Variety Of <span className="text-primary-600">Legal Aid</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trust Hewitt Foster Legal Group with your legal needs. We have experience with 
            traffic, divorce and bankruptcy law in Cincinnati, OH.
          </p>
        </div>

        {/* Practice areas grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {practiceAreas.map((area) => {
            const IconComponent = iconComponents[area.icon as keyof typeof iconComponents];
            
            return (
              <div key={area.id} className="card hover:shadow-xl transition-shadow duration-300 group">
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                  
                  {/* Services list */}
                  <ul className="space-y-2 mb-6">
                    {area.services.map((service, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn more link */}
                  <a 
                    href={area.detailUrl}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="bg-primary-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready To Get Started?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Request a consultation now to speak with our dedicated attorneys. 
            We can get started on your case right away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary bg-gold-500 hover:bg-gold-600">
              Request Free Consultation
            </a>
            <a href="tel:(513) 382-6543" className="btn-secondary">
              Call (513) 382-6543
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;