import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'
import { BsFillPersonFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { RiSearchEyeFill } from "react-icons/ri";
import { BsFillCarFrontFill } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";

const YourRide = ({theme, setTheme}) => {
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <div className="pl-4 ">
      <Card theme={theme} setTheme={setTheme}/>
      </div>
      <Footer theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default YourRide
