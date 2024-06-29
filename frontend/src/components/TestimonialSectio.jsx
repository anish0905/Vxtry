import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Emanuel Kelton",
    title: "Planner",
    quote: "Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.",
    bgColor: "bg-blue-900"
  },
  {
    name: "Emanuel Kelton",
    title: "Planner",
    quote: "Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.",
    bgColor: "bg-red-600"
  },
  {
    name: "Emanuel Kelton",
    title: "Planner",
    quote: "Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.",
    bgColor: "bg-blue-900"
  }
];

const TestimonialSection = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold text-gray-500">OUR TESTIMONIAL</h2>
          <h3 className="text-5xl font-bold text-black mt-2">What People's Says About <span className="text-red-600">VXTRY</span></h3>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.</p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className={`p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ${testimonial.bgColor}`}>
                <FaQuoteLeft className="text-white text-3xl mb-4" />
                <p className="text-white mb-6">{testimonial.quote}</p>
                <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                <p className="text-white">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
