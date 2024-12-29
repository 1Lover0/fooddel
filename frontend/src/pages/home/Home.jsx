import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/header/Header'
import ExploreMenu from '../../component/exploreMenu/ExploreMenu'
import FoodDisplay from '../../component/foodDisplay/FoodDisplay'
import Footer from '../../component/footer/Footer'
import AppDownload from '../../component/appDownload/AppDownload'

const Home = () => {

  const[category,setCategory] = useState("all");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home