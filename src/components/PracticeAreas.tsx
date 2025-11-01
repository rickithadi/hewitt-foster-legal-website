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
    <section className="bg-neutral-50 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            We Offer A Variety Of <span className="text-primary-700">Legal Aid</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Trust Hewitt Foster Legal Group with your legal needs. We have experience with 
            traffic, divorce and bankruptcy law in Cincinnati, OH.
          </p>
        </div>

        {/* Practice areas grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {practiceAreas.map((area) => {
            const IconComponent = iconComponents[area.icon as keyof typeof iconComponents];
            
            return (
              <div key={area.id} className="card hover:shadow-strong transition-all duration-300 group hover:-translate-y-1">
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary-700" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">{area.title}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{area.description}</p>
                  
                  {/* Services list */}
                  <ul className="space-y-2 mb-6">
                    {area.services.map((service, index) => (
                      <li key={index} className="flex items-center text-neutral-700">
                        <div className="w-2 h-2 bg-secondary-600 rounded-full mr-3 flex-shrink-0"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn more link */}
                  <a 
                    href={area.detailUrl}
                    className="inline-flex items-center text-primary-700 hover:text-primary-900 font-semibold group-hover:translate-x-1 transition-all duration-300"
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
        <div className="bg-primary-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-strong">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready To Get Started?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Request a consultation now to speak with our dedicated attorneys. 
            We can get started on your case right away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 shadow-medium hover:shadow-strong transform hover:-translate-y-0.5">
              Request Free Consultation
            </a>
            <a href="tel:(513) 382-6543" className="bg-transparent hover:bg-secondary-600 hover:border-secondary-600 text-secondary-400 hover:text-white font-semibold py-3 px-6 rounded-lg border border-secondary-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2">
              Call Now (513) 382-6543
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;