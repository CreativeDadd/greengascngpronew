import React from 'react';
import { motion } from 'framer-motion';
import { Link } from'react-router-dom';
import cngHero3 from '../assets/images/cngHero3.jpg';
import cngDieselKit from '../assets/images/cngDieselKit.jpg';
import cngDieselGenset from '../assets/images/cngDieselGenset.jpg';
import cngTricycleKit from '../assets/images/cngTricycleKit.jpeg';
import cngkitImg1 from '../assets/images/cngkitImg1.jpg'

const ProductPage = () => {
  return (
    <div className="bg-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Products</h2>
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transforming Vehicles with GreenGas (CNG) Technologies
          </h1>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {/* Product Card 1: Petrol CNG Conversion Kit */}
          <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex-shrink-0">
              <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }} 
              transition={{duration: 2}}
              className="h-64 w-full object-cover" src={cngHero3} alt="Petrol CNG Conversion Kit" />
            </div>
            <div className="flex-1 bg-green-50 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">Petrol CNG Conversion Kit</h3>
                <p className="text-gray-600 leading-relaxed">
                  Convert your petrol vehicle to run on Compressed Natural Gas (CNG) efficiently and cost-effectively.
                  Maintenance: CNG systems can lead to lower maintenance costs due to cleaner combustion, which reduces engine wear and deposits.
Environmental Impact: CNG produces fewer emissions compared to petrol, contributing to lower environmental impact.
                </p>
              </div>
              <div className="mt-6">
        <Link to="/products/PetrolCNGEngine" className="text-green-600 hover:text-green-700 font-semibold">Learn More</Link>
      </div>
            </div>
          </div>

          {/* Product Card 2: Diesel CNG Conversion Kit */}
          <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-64 w-full object-cover" src={cngDieselKit} alt="Diesel CNG Conversion Kit" loading='lazy' />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">Diesel CNG Conversion Kit</h3>
                <p className="text-gray-600 leading-relaxed">
                  Retrofit diesel engines to operate on both Diesel and Compressed Natural Gas (CNG) for dual-fuel efficiency.
                </p>
              </div>
              <div className="mt-6">
                <Link to="/products/diesel-cng" className="text-green-600 hover:text-green-700 font-semibold">Learn More</Link>
              </div>
            </div>
          </div>

          {/* Product Card 3: Diesel Engine Power Generator Conversion Kit */}
          <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-64 w-full object-cover" src={cngDieselGenset} alt="Diesel Engine Power Generator Conversion Kit" />
            </div>
            <div className="flex-1 bg-green-50 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">Diesel Engine Power Generator Conversion Kit</h3>
                <p className="text-gray-600 leading-relaxed">
                  Convert diesel power generators to use Compressed Natural Gas (CNG), offering economical and cleaner energy solutions.
                </p>
              </div>
              <div className="mt-6">
        <Link to="/pages/DieselCngGenset" className="text-green-600 hover:text-green-700 font-semibold">Learn More</Link>
      </div>
            </div>
          </div>

          {/* Product Card 4: Daughter Stations */}
          {/*<div className="flex flex-col bg-green-50 shadow-lg rounded-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-64 w-full object-cover" src={daughterStation} alt="Daughter Stations" />
            </div>
            <div className="flex-1 bg-green-50 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">Daughter Stations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Develop and deploy Daughter Stations for efficient distribution and refueling of CNG across various locations.
                </p>
              </div>
              <div className="mt-6">
                <a href="/products/daughter-stations" className="text-green-600 hover:text-green-700 font-semibold">Learn More</a>
              </div>
            </div>
          </div>*/}
          {/* Product Card 4: CNG Tricycle Conversion Kit */}
          <div className="flex flex-col bg-green-50 shadow-lg rounded-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-64 w-full object-cover" src={cngTricycleKit} alt="Daughter Stations" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">CNG Tricycle Conversion Kit</h3>
                <p className="text-gray-600 leading-relaxed">
                  Develop and deploy Daughter Stations for efficient distribution and refueling of CNG across various locations.
                </p>
              </div>
              <div className="mt-6">
                <a href="/products/daughter-stations" className="text-green-600 hover:text-green-700 font-semibold">Learn More</a>
              </div>
            </div>
          </div>
          {/* Product Card 5: Mobile CNG Dispensing Stations */}
           { /* <div className="flex flex-col bg-green-50 shadow-lg rounded-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-64 w-full object-cover" src={CNGMobileStation} alt="Daughter Stations" />
            </div>
            <div className="flex-1 bg-green-50 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">Mobile CNG Refueling Unit</h3>
                <p className="text-gray-600 leading-relaxed">
                  Develop CNG Cylinder cascade mounting them behind a truck and move them to any location for efficient distribution and refueling of CNG across various locations.
                </p>
              </div>
              <div className="mt-6">
                <a href="/products/daughter-stations" className="text-green-600 hover:text-green-700 font-semibold">Learn More</a>
              </div>
            </div> 
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
