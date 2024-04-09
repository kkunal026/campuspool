import React from 'react'

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
      <div className="pl-4 md:pl-16 lg:pl-32 max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src="/path-to-your-image.jpg" alt="Vehicle" />
          </div>
          <div className="p-8">
            <div className={`uppercase tracking-wide text-sm font-semibold ${textColor}`}>Journey Details</div>
            <p className={`mt-2 ${textColor}`}>Start: {startLocation}, End: {endLocation}</p>
            <p className={`mt-2 ${textColor}`}>Date: {date}</p>
            <p className={`mt-2 ${textColor}`}>Vehicle: {vehicle}</p>
            <p className={`mt-2 ${textColor}`}>Price: {price}</p>
            <p className={`mt-2 ${textColor}`}>Price Split: {priceSplit}</p>
            <div className={`mt-2 ${textColor}`}>People Joined: {peopleJoined.map(person => <p key={person.username}>{person.username}</p>)}</div>
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

