// src/Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h2 className="text-2xl font-bold mb-4">Vxtry</h2>
            <p className="mb-4">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
            </p>
            <p>
              Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <ul>
              <li><Link to="/shared-hosting" className="hover:underline">Shared Hosting</Link></li>
              <li><Link to="/web-hosting" className="hover:underline">Web Hosting</Link></li>
              <li><Link to="/vps-hosting" className="hover:underline">VPS Hosting</Link></li>
              <li><Link to="/wordpress-hosting" className="hover:underline">WordPress Hosting</Link></li>
              <li><Link to="/dedicated-hosting" className="hover:underline">Dedicated Hosting</Link></li>
              <li><Link to="/domain-name" className="hover:underline">Domain Name</Link></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/support-ticket" className="hover:underline">Support Ticket</Link></li>
              <li><Link to="/news-articles" className="hover:underline">News & Articles</Link></li>
              <li><Link to="/policies" className="hover:underline">Policies</Link></li>
              <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              <i className="fas fa-phone-alt mr-2"></i>
              91-9911315499
            </p>
            <p className="mb-4">
              <i className="fas fa-envelope mr-2"></i>
              Info@vxtry.Com
            </p>
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999684201974!2d2.2944813156733244!3d48.85837007928744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdbf1c9242f%3A0xb9c5b1b2fda4d104!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1618263984621!5m2!1sen!2sfr"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Vxtry Location"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 mt-6 text-center">
          <p>Subscribe To Our Newsletter To Receive News And Updates</p>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              className="px-4 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none"
              placeholder="Email Address"
            />
            <button className="px-4 py-2 rounded-r-md bg-red-600 text-white hover:bg-red-700 focus:outline-none">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
