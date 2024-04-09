import React from 'react'

const YourRide = ({theme, setTheme}) => {

  const startLocation = "Start Location";
  const endLocation = "End Location";
  const date = "Date";
  const vehicle = "Vehicle";
  const price = "Price";
  const priceSplit = "Price Split";
  const peopleJoined = [
    {username: "User 1"},
    {username: "User 2"},
  ];

  return (
    <div>
      <div className="pl-4 md:pl-16 lg:pl-32 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src="/path-to-your-image.jpg" alt="Vehicle" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Journey Details</div>
            <p className="mt-2 text-gray-500">Start: {startLocation}, End: {endLocation}</p>
            <p className="mt-2 text-gray-500">Date: {date}</p>
            <p className="mt-2 text-gray-500">Vehicle: {vehicle}</p>
            <p className="mt-2 text-gray-500">Price: {price}</p>
            <p className="mt-2 text-gray-500">Price Split: {priceSplit}</p>
            <div className="mt-2 text-gray-500">People Joined: {peopleJoined.map(person => <p key={person.username}>{person.username}</p>)}</div>
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
