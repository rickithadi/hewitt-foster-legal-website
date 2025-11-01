import React from 'react';
import { AlertCircle, Shield, Phone, Mail } from 'lucide-react';
import { covidStatement, contactInfo } from '../data/content';

const CovidStatement: React.FC = () => {
  return (
    <section className="bg-neutral-50 border-t-4 border-primary-600 section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="card">
          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Shield className="w-8 h-8 text-primary-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                {covidStatement.title}
              </h2>
              <div className="w-24 h-1 bg-primary-700 mx-auto"></div>
            </div>

            {/* Content */}
            <div className="prose prose-lg mx-auto text-neutral-700 leading-relaxed">
              {covidStatement.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-8 p-6 bg-neutral-100 rounded-lg border border-neutral-200 shadow-soft">
              <div className="text-center">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  Call or Email for Consultation
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center text-primary-700 hover:text-primary-900 font-semibold transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Phone: {contactInfo.phone}
                  </a>
                  <div className="hidden sm:block text-neutral-400">|</div>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center text-primary-700 hover:text-primary-900 font-semibold transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email: {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Safety highlights */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200 shadow-soft">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Safe Operations</h4>
                <p className="text-sm text-neutral-600">Following all federal, state, and local COVID-19 directives</p>
              </div>
              
              <div className="text-center p-4 bg-neutral-50 rounded-lg border border-neutral-200 shadow-soft">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-primary-700" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Remote Services</h4>
                <p className="text-sm text-neutral-600">Full legal support available by phone and email</p>
              </div>
              
              <div className="text-center p-4 bg-neutral-50 rounded-lg border border-neutral-200 shadow-soft">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertCircle className="w-6 h-6 text-secondary-700" />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Updated Services</h4>
                <p className="text-sm text-neutral-600">Keeping clients informed about court schedules and hearings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CovidStatement;