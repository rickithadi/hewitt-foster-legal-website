import React from 'react';
import { User, ExternalLink } from 'lucide-react';
import { attorneys } from '../data/content';

const Attorneys: React.FC = () => {
  return (
    <section id="attorneys" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Meet The <span className="text-primary-700">Attorneys</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced legal team is dedicated to providing you with the best possible representation 
            and achieving favorable outcomes for your case.
          </p>
        </div>

        {/* Attorneys grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {attorneys.map((attorney) => (
            <div key={attorney.id} className="card hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <div className="p-8">
                {/* Profile image placeholder */}
                <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mb-6 mx-auto shadow-soft">
                  <User className="w-16 h-16 text-primary-600" />
                </div>
                
                {/* Attorney info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{attorney.name}</h3>
                  {attorney.title && (
                    <p className="text-primary-700 font-semibold text-lg">{attorney.title}</p>
                  )}
                </div>
                
                {/* Bio */}
                <p className="text-neutral-600 leading-relaxed mb-6 text-center">
                  {attorney.bio}
                </p>
                
                {/* Learn more link */}
                {attorney.profileUrl && (
                  <div className="text-center">
                    <a 
                      href={attorney.profileUrl}
                      className="inline-flex items-center text-primary-700 hover:text-primary-900 font-semibold hover:translate-x-1 transition-all duration-300"
                    >
                      View Full Profile
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust factors */}
        <div className="bg-neutral-50 rounded-2xl p-8 md:p-12 shadow-soft">
          <h3 className="text-3xl font-bold text-neutral-900 text-center mb-8">
            3 Reasons To Trust Your Case To Hewitt Foster Legal Group
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <span className="text-2xl font-bold text-secondary-700">1</span>
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-3">Well-Qualified</h4>
              <p className="text-neutral-600 leading-relaxed">
                Our lead attorneys, H. Leon Hewitt and Mary T. Foster, have years of legal experience 
                in the field of divorce, traffic and bankruptcy law.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <span className="text-2xl font-bold text-secondary-700">2</span>
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-3">Versatile</h4>
              <p className="text-neutral-600 leading-relaxed">
                We work with clients on all kinds of cases, and we can work with you, too. 
                Our diverse experience allows us to handle complex legal matters.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <span className="text-2xl font-bold text-secondary-700">3</span>
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-3">Dedicated</h4>
              <p className="text-neutral-600 leading-relaxed">
                We know that legal problems can be frightening, and we work hard to get you 
                the best possible results with compassionate representation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attorneys;