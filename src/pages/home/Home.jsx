import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Intro from '../../components/intro/Intro';
import Category from '../../components/category/Category';
import Footer from '../../components/footer/Footer';

const Home = () => {
     const navigate = useNavigate();

  return (
    <div>
      <Navbar/>
      <Intro/>
      <Category/>
      <Footer/>
    </div>
  )
}

export default Home