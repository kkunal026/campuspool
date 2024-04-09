import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Filters from '../../components/Filters/Filters';

const LookRide = ({theme, setTheme}) => {
  // This is just dummy data. Replace it with your actual data.
  const rides = [
    { startLocation: 'Location 1', endLocation: 'Location 2', date: '2022-01-01', numberOfPeople: 2, vehicle: 'Car',price: 100 },
    { startLocation: 'Location 1', endLocation: 'Location 2', date: '2022-01-01', numberOfPeople: 2, vehicle: 'Car',price: 100 },
    { startLocation: 'Location 1', endLocation: 'Location 2', date: '2022-01-01', numberOfPeople: 2, vehicle: 'Car',price: 100 },
    // Add more rides here...
  ];

  return (
    <>
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
    <Navbar theme={theme} setTheme={setTheme} />
    <div className={`flex flex-col md:flex-row m-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="hidden md:block md:w-1/3 p-4">
        <h2 className="mb-4 font-bold text-lg">Filters</h2>
        <Filters theme={theme} setTheme={setTheme} />
      </div>
      <div className="w-full md:w-2/3 p-4">
        <h2 className="mb-4 font-bold text-lg">Available Rides</h2>
        {rides.map((ride, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <h3 className="font-bold mb-2">{ride.startLocation} to {ride.endLocation}</h3>
            <p>Date: {ride.date}</p>
            <p>Number of people: {ride.numberOfPeople}</p>
            <p>Preferred Vehicle: {ride.vehicle}</p>
            <p>Price: {ride.price}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>   
    </div> 
    </>
  );
};

export default LookRide;
