import React, { useState } from "react";
import logo from '../assets/images/logo.png';


function CNGCalculator() {
  const [cylinders, setCylinders] = useState("");
  const [kilometers, setKilometers] = useState("");
  const [cngPrice, setCngPrice] = useState("");
  const [petrolPrice, setPetrolPrice] = useState("");
  const [conversionCost, setConversionCost] = useState("");
  const [results, setResults] = useState(null);

  const calculateROI = () => {
    if (!cylinders || !kilometers || !cngPrice || !petrolPrice || !conversionCost) {
      alert("Please fill out all fields.");
      return;
    }

    const cylinderNum = parseInt(cylinders);
    const kmNum = parseInt(kilometers);
    const cngPriceNum = parseFloat(cngPrice);
    const petrolPriceNum = parseFloat(petrolPrice);
    const conversionCostNum = parseFloat(conversionCost);

    const petrolEfficiency = 10; // km per liter
    const cngEfficiency = 16; // km per scm
    const fuelIncreaseFactor = cylinderNum / 4;

    const petrolUsedPerMonth = (kmNum / petrolEfficiency) * fuelIncreaseFactor;
    const petrolCostPerMonth = petrolUsedPerMonth * petrolPriceNum;

    const cngUsedPerMonth = (kmNum / cngEfficiency) * fuelIncreaseFactor;
    const cngCostPerMonth = cngUsedPerMonth * cngPriceNum;

    const petrolTotalCost6Months = petrolCostPerMonth * 6;
    const cngTotalCost6Months = cngCostPerMonth * 6;

    const savings = petrolTotalCost6Months - cngTotalCost6Months;
    const roi = savings - conversionCostNum;

    const savingsPerMonth = petrolCostPerMonth - cngCostPerMonth;
    const savingsPerWeek = savingsPerMonth / 4;
    const savingsPerDay = savingsPerMonth / 30;

    const breakevenTime = conversionCostNum / savingsPerMonth;

    setResults({
      roi: roi.toFixed(2),
      savingsPerDay: savingsPerDay.toFixed(2),
      savingsPerWeek: savingsPerWeek.toFixed(2),
      savingsPerMonth: savingsPerMonth.toFixed(2),
      breakevenTime: breakevenTime.toFixed(2),
    });
  };

  return (
    <div className="bg-green-100 flex justify-center items-center min-h-screen mt-10">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center">
          <img src={logo} alt="Company Logo" className="w-24 mx-auto mb-4" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">CNG ROI Calculator For Petrol Engine</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Number of Cylinders</label>
            <input
              type="number"
              value={cylinders}
              onChange={(e) => setCylinders(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="4 or 6"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Kilometers Per Month</label>
            <input
              type="number"
              value={kilometers}
              onChange={(e) => setKilometers(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="8500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">CNG Price (NGN per scm)</label>
            <input
              type="number"
              value={cngPrice}
              onChange={(e) => setCngPrice(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="380"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Petrol Price (NGN per liter)</label>
            <input
              type="number"
              value={petrolPrice}
              onChange={(e) => setPetrolPrice(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="860"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Conversion Cost (NGN)</label>
            <input
              type="number"
              value={conversionCost}
              onChange={(e) => setConversionCost(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Conversion cost"
            />
          </div>

          <button
            type="button"
            onClick={calculateROI}
            className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition"
          >
            Calculate ROI
          </button>
        </form>

        {results && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md shadow">
            <h2 className="text-xl font-bold mb-4">Results</h2>
            <p><strong>ROI after 6 months: </strong> NGN {results.roi}</p>
            <p><strong>Savings per day: </strong> NGN {results.savingsPerDay}</p>
            <p><strong>Savings per week: </strong> NGN {results.savingsPerWeek}</p>
            <p><strong>Savings per month: </strong> NGN {results.savingsPerMonth}</p>
            <p><strong>Breakeven Time: </strong> {results.breakevenTime} months</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CNGCalculator;
