import React from 'react';
import { User, ExternalLink } from 'lucide-react';
import { attorneys } from '../data/content';

const Attorneys: React.FC = () => {
  return (
    <section id="attorneys" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet The <span className="text-blue-600">Attorneys</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced legal team is dedicated to providing you with the best possible representation 
            and achieving favorable outcomes for your case.
          </p>
        </div>

        {/* Attorneys grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {attorneys.map((attorney) => (
            <div key={attorney.id} className="card hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                {/* Profile image placeholder */}
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <User className="w-16 h-16 text-blue-600" />
                </div>
                
                {/* Attorney info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{attorney.name}</h3>
                  {attorney.title && (
                    <p className="text-blue-600 font-semibold text-lg">{attorney.title}</p>
                  )}
                </div>
                
                {/* Bio */}
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {attorney.bio}
                </p>
                
                {/* Learn more link */}
                {attorney.profileUrl && (
                  <div className="text-center">
                    <a 
                      href={attorney.profileUrl}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold hover:translate-x-1 transition-transform duration-300"
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
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            3 Reasons To Trust Your Case To Hewitt Foster Legal Group
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Well-Qualified</h4>
              <p className="text-gray-600 leading-relaxed">
                Our lead attorneys, H. Leon Hewitt and Mary T. Foster, have years of legal experience 
                in the field of divorce, traffic and bankruptcy law.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Versatile</h4>
              <p className="text-gray-600 leading-relaxed">
                We work with clients on all kinds of cases, and we can work with you, too. 
                Our diverse experience allows us to handle complex legal matters.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Dedicated</h4>
              <p className="text-gray-600 leading-relaxed">
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