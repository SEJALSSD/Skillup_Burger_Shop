// home.jsx
import React from 'react';
import { motion } from "framer-motion";



const Home = () => {
 
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
  return (
    <motion.div className='home'variants={animationOptions} initial='initial' animate='whileInView'>
      <div>
      <h1>BURGER SHOP</h1>
      <p>Get yourself a tasty burger</p>
      </div>
   
    <a href='#'>Explore Menu</a>
 
    </motion.div>
  );
};

export default Home;




