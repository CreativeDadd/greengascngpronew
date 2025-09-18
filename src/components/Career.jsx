
  

import React from 'react';
import { Link } from 'react-router-dom';
import jobOpenings from '../data/jobOpenings'; // Ensure this file contains the job data
import logo from '../assets/images/logo.png';

const Careers = () => {
  return (
    <div className="container mx-auto py-16 px-4 bg-green-50">
      <div className="flex items-center justify-center mb-1">
            <img
              className="h-24 w-auto sm:h-32 lg:h-40"
              src={logo}
              alt="Green landscape"
            />
          </div>
      <h1 className="text-4xl font-bold text-center mb-12 text-green-800">Careers at GreenGas (CNG) Technologies Limited</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobOpenings.map(job => (
          <div key={job.id} className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2 text-green-600">{job.title}</h2>
            <p className="text-gray-700 mb-2"><strong>Location:</strong> {job.location}</p>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <Link to={`/careers/${job.id}`} className="text-green-800 hover:text-green-600 hover:underline">
              View Details & Apply
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;

 