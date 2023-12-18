// home.jsx

import { motion } from "framer-motion";
import React, { useState } from 'react';

import Menu from './Menu';



const Home = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const animationOptions = {
    initial: {
      x: '-100%',
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  const handleExploreMenuClick = () => {
    setMenuVisible(!isMenuVisible); // Toggle menu visibility
  };
  return (
    <motion.div className='home'variants={animationOptions} initial='initial' animate='whileInView'>
      <div>
      <h1>BURGER SHOP</h1>
      <p>Get yourself a tasty burger</p>
      </div>
   
      <a href='#' onClick={handleExploreMenuClick}>
        Explore Menu
      </a>
      {isMenuVisible && <Menu />}
    </motion.div>
  );
};

export default Home;




