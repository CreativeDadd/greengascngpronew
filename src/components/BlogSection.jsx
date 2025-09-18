// export default BlogSection;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: "The Benefits of Converting Your Petrol Car to CNG",
    excerpt: "Discover how converting your petrol car to CNG can save you money and reduce your carbon footprint...",
    link: "/blogpost1"
  },
  {
    id: 2,
    title: "Step-by-Step Guide to Diesel Engine Dual Fuel Conversion",
    excerpt: "Learn the process of converting a diesel engine to a dual fuel system using CNG and diesel...",
    link: "/blogpost2"
  },
  {
    id: 3,
    title: "Top 5 Advantages of Using CNG in Commercial Vehicles",
    excerpt: "Explore the advantages of using CNG in commercial vehicles, from cost savings to environmental benefits...",
    link: "/blog/advantages-of-using-cng-in-commercial-vehicles"
  },
  {
    id: 4,
    title: "How CNG Conversion Can Extend the Life of Your Engine",
    excerpt: "Find out how CNG conversion can help extend the life of your engine and reduce maintenance costs...",
    link: "/blog/cng-conversion-extend-engine-life"
  },
  {
    id: 5,
    title: "Understanding the Cost Savings of CNG Conversion",
    excerpt: "Get a detailed analysis of the cost savings associated with converting your vehicle to CNG...",
    link: "/blog/cost-savings-cng-conversion"
  },
  
];

const BlogSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2 
            className="text-base text-green-600 font-semibold tracking-wide uppercase"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            Blog
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Latest Articles and Insights
          </motion.p>
          <motion.p 
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Stay updated with the latest news and insights on CNG conversions and technologies.
          </motion.p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <motion.div 
                key={blog.id} 
                className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-lg font-medium text-green-900">{blog.title}</h3>
                <p className="mt-2 text-gray-700">{blog.excerpt}</p>
                <Link to={blog.link} className="mt-4 text-green-600 hover:text-green-800 inline-block">Read more</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

