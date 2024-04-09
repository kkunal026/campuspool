import React, { useState } from 'react';

const Filters = () => {
  const [filters, setFilters] = useState({
    numberOfPeople: '',
    vehicleType: '',
    price: '',
    date: ''
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full md:w-1/3 p-4">
      <h2 className="mb-4 font-bold text-lg">Filters</h2>
      <form>
        <label className="block mb-2" htmlFor="numberOfPeople">Number of People</label>
        <input className="w-full mb-4 p-2 border rounded" type="number" name="numberOfPeople" onChange={handleChange} />

        <label className="block mb-2" htmlFor="vehicleType">Vehicle Type</label>
        <select className="w-full mb-4 p-2 border rounded" name="vehicleType" onChange={handleChange}>
          <option value="">Select a vehicle type</option>
          <option value="car">Car</option>
          <option value="van">Van</option>
          {/* Add more options as needed */}
        </select>

        <label className="block mb-2" htmlFor="price">Price</label>
        <input className="w-full mb-4 p-2 border rounded" type="number" name="price" onChange={handleChange} />

        <label className="block mb-2" htmlFor="date">Date</label>
        <input className="w-full mb-4 p-2 border rounded" type="date" name="date" onChange={handleChange} />
      </form>
    </div>
  );
};

export default Filters;
