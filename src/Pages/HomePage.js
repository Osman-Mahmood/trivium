import React from 'react'
import Header from '../Components/Home/Header/Header'
import Choose from '../Components/Home/Choose/Choose'
import Demo from '../Components/Home/Demo/Demo'
import Revenue from '../Components/Home/Revenue/Revenue'
import Complaint from '../Components/Home/Complaint/Complaint'
import Specialist from '../Components/Home/Specialist/Specialist'
const HomePage = () => {
  return (
    <div>
       <Header />
        <Choose />
        <Demo />
        <Revenue />
        <Complaint />
        <Specialist />
    </div>
  )
}

export default HomePage
