import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Filters from '../../components/Filters/Filters';
import { BsFillPersonFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { RiSearchEyeFill } from "react-icons/ri";
import { BsFillCarFrontFill } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";

const LookRide = ({theme, setTheme}) => {
  // This is just dummy data. Replace it with your actual data.
  const rides = [
    { email:"User1", startLocation: 'Location 1', endLocation: 'Location 2', date: '2022-01-01', numberOfPeople: 2, vehicle: 'Car',price: 100 },
    { email:"User1", startLocation: 'Location 1', endLocation: 'Location 2', date: '2022-01-01', numberOfPeople: 2, vehicle: 'Car',price: 100 },
    { email:"User1", startLocation: 'Location 1', endLocation: 'Location 2', date: '2022-01-01', numberOfPeople: 2, vehicle: 'Car',price: 100 },
    // Add more rides here...
  ];

  return (
    <>
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
    <Navbar theme={theme} setTheme={setTheme} />
    <div className={`flex flex-col md:flex-row gap-2 m-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="hidden md:block md:w-1/3 p-4 border rounded shadow-md items-center mb-4">
        <h2 className="mb-4 font-bold text-lg">Filters</h2>
        <Filters theme={theme} setTheme={setTheme} />
      </div>
      <div className="w-full md:w-2/3 p-4 border rounded shadow-md items-center mb-4">
        <h2 className="mb-4 font-bold text-lg">Available Rides</h2>
        {rides.map((ride, index) => (
          <div className="flex justify-between border rounded shadow-md items-center mb-4">
            <div key={index} className="mb-4 p-4 ">
              <h2 className="flex items-center gap-4 font-bold mb-2"><BsFillPersonFill />{ride.email}</h2>
              <h3 className="flex items-center gap-4  mb-2"> <FaMapMarkedAlt /> From: <p className='font-bold'>{ride.startLocation}</p> to <p className='font-bold'>{ride.endLocation}</p></h3>
              <p className="flex items-center gap-4 mb-2"> <BsCalendar2DateFill /> Date: {ride.date}</p>
              <p className="flex items-center gap-4 mb-2"> <RiSearchEyeFill /> Number of people: {ride.numberOfPeople}</p>
              <p className="flex items-center gap-4 mb-2"> <BsFillCarFrontFill /> Preferred Vehicle: {ride.vehicle}</p>
              <p className="flex items-center gap-4 mb-2"> <ImPriceTags /> Price: {ride.price}</p>
            </div>
            <div className="pr-4 md:pr-16 lg:pr-32">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-4">
                  Join This Ride
              </button>
            </div>
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
