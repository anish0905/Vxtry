// src/Articles.js
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/seo.jpg';
import img1 from '../assets/seo.jpg';
import img2 from '../assets/seo.jpg';

const articles = [
  {
    title: 'How To Increase Sales Through SEO Marketing?',
    date: 'April 7, 2023',
    image: img, // Replace with your image path
  },
  {
    title: 'Future Vision Makes Trending Hosting Impression',
    date: 'April 7, 2023',
    image: img1, // Replace with your image path
  },
  {
    title: 'What it’s like to be an interior innovative designer?',
    date: 'April 7, 2023',
    image: img2, // Replace with your image path
  },
];

const Articles = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">My Insights & <span className="text-red-500">Articles</span></h1>
        <p className="text-gray-500 mt-2">Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img className="w-full h-48 object-cover" src={article.image} alt={article.title} />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm">
                <span>Admin</span>
                <span className="mx-2">|</span>
                <span>{article.date}</span>
              </div>
              <h2 className="text-xl font-semibold mt-2">{article.title}</h2>
              <Link to="#" className="text-blue-500 hover:underline mt-2 block">EXPLORE MORE &rarr;</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
