import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'

const YourRide = ({theme, setTheme}) => {
  return (
    <div>
      <Navbar/>
      <div className="pl-4 ">
      <Card/>
      </div>
      <Footer/>
    </div>
  )
}

export default YourRide
