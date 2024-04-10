import React from 'react'
import CabGirl from "../../assets/19197650.jpg"
import { BsFillPersonFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { BsFillCarFrontFill } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";
import { BsWindowSplit } from "react-icons/bs";

const YourRide = ({theme, setTheme}) => {
  // Define your data here
  const startLocation = "Start Location";
  const endLocation = "End Location";
  const date = "Date";
  const vehicle = "Vehicle";
  const price = "Price";
  const priceSplit = "Price Split";
  const peopleJoined = [
    {username: "User 1"},
    {username: "User 2"},
    // Add more users as needed
  ];

  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-500';

  return (
    <div className={`${bgColor}`}>
      <div className="pl-4 md:pl-16 lg:pl-32 max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 mb-4">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-full w-full object-cover md:w-48" src={CabGirl} alt="Vehicle" />
          </div>
          <div className="p-8">
            <div className={`uppercase tracking-wide text-sm font-bold ${textColor}`}>Journey Details</div>
            <p className={`mt-2 flex items-center gap-4  ${textColor}`}><FaMapMarkedAlt /> Start: {startLocation}, End: {endLocation}</p>
            <p className={`mt-2 flex items-center gap-4 ${textColor}`}> <BsCalendar2DateFill /> Date: {date}</p>
            <p className={`mt-2 flex items-center gap-4 ${textColor}`}> <BsFillCarFrontFill /> Vehicle: {vehicle}</p>
            <p className={`mt-2 flex items-center gap-4 ${textColor}`}> <ImPriceTags /> Price: {price}</p>
            <p className={`mt-2 flex items-center gap-4 ${textColor}`}> <BsWindowSplit /> Price Split: {priceSplit}</p>
            <div className={`mt-2 flex items-center gap-4 ${textColor}`}> <BsFillPersonFill /> People Joined: {peopleJoined.map(person => <p key={person.username}>{person.username}</p>)}</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-4">
                Start Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourRide

