import React from 'react';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/content';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-blue-50 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See what our satisfied clients have to say 
            about their experience with Hewitt Foster Legal Group.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                {/* Quote icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>
                
                {/* Stars */}
                {testimonial.rating && (
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                )}
                
                {/* Testimonial text */}
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">Verified Client</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-1 mr-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">Excellent Reviews</span>
          </div>
          
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready To Experience Exceptional Legal Service?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients who have successfully resolved their legal matters 
            with our professional, dedicated representation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Schedule Your Free Consultation
            </a>
            <a 
              href="https://www.google.com/search?q=hewitt+foster+legal+cincinnati"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-6 rounded-lg border border-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Read More Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;