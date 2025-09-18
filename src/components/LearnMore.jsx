import React from 'react';
import { Link } from 'react-router-dom';
import sustainability from '../assets/images/sustainability.jpg';
const LearnMore = () => {
  return (
    <div className="bg-white mt-14">
      <header className="bg-green-800 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-center font-bold">Learn More About GreenGas Technologies Limited</h1>
        </div>
      </header>
      <main className="mt-10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-700 sm:w-2/4 px-2">
            At GreenGas Technologies Limited, our mission is to deliver clean and reliable Compressed Natural Gas (CNG) solutions that drive significant fuel cost savings—up to 50%. We are committed to reducing carbon emissions and offering greener alternatives to traditional fuels, empowering our customers to make smart, eco-friendly choices. By converting vehicles and generators to CNG, we ensure engines run cleaner, last longer, and contribute to a healthier environment. Our goal is simple: to help you save big while making a positive impact on the planet.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-green-800 shadow-lg px-2 rounded-full">CNG Conversion Kits & Installation</h3>
                <p className="mt-2 text-gray-700">
                We focus on converting vehicles to use CNG, providing high-quality conversion kits and doing expert installations. We make sure the switch from traditional fuel to CNG is smooth and reliable. With top standards in quality, our team ensures every conversion is done carefully and just right for your needs. You can count on us for results you can trust.
                </p><br />
                <Link to="/roi" className='py-1 px-4 text-white bg-green-800 rounded-full mt-2 font-semibold shadow-sm'>Check Your ROI...</Link>
              </div>
              {/* <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-green-800">CNG Fueling Stations</h3>
                <p className="mt-2 text-gray-700">
                  Our network of CNG fueling stations is expanding rapidly, providing convenient refueling options for CNG-powered vehicles.
                </p>
              </div> */}
              <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-green-800">Maintenance and Support</h3>
                <p className="mt-2 text-gray-700">
                  We offer comprehensive maintenance and support services to ensure the longevity and performance of CNG systems.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Why Choose Us</h2>
            <div className="mt-6 flex flex-col lg:flex-row">
              <div className="lg:w-1/2 lg:pr-8">
                <p className="mt-2 text-gray-700">
                Our services: At GreenGas Technologies Limited, we specialize in converting fleets of petrol and diesel engine vehicles and generators to Compressed Natural Gas (CNG). Our expert team has successfully helped many businesses make this important switch, ensuring a smooth and efficient conversion process. By using high-quality CNG conversion kits, we help our clients achieve a significant return on investment (ROI) and boost overall profitability. With lower fuel costs—up to 50% savings—our clients enjoy reduced operational expenses and increased revenue. Our commitment to top-notch service and precise installations guarantees reliable performance and longevity for every vehicle in your fleet. Choose GreenGas Technologies for a cost-effective, eco-friendly solution that drives your business forward and maximizes your profits.
                </p>
                <Link to="/contactlist" className='py-1 px-4 text-green-500 border-1 border-solid rounded-full mt-2 font-semibold'>Contact Us...</Link>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <img
                  className="mt-4 lg:mt-0 w-full h-64 object-cover rounded-lg shadow-lg"
                  src={sustainability}
                  alt="CNG fuel"
                />
              </div>
            </div>
          </section>

          <section className="text-center mt-16">
            <h2 className="text-2xl font-bold text-gray-900">Get Started with GreenGas Technologies Today!</h2>
            <p className="mt-4 text-gray-700">
              Ready to make the switch to cleaner energy? Contact us today to learn more about our CNG solutions and how we can help you transition to a more sustainable future.
            </p>
            <div className="mt-8">
              <Link
                to="/contactlist"
                className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LearnMore;
