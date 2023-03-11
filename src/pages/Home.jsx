import React from 'react'
import Announcement from '../components/header/Announcement';
import Category from '../components/category/Category';
import Navbar from '../components/header/Navbar';
import Slider from '../components/Slider';
import Products from '../components/product/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Category/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home