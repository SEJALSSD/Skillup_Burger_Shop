// Write all the code here
import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import DropdownMenu from './DropdownMenu';
import '../../styles/header.scss'; // Import the styles

const Header = () => {
  const animationOptions = {
    initial: { x: "-100%" },
    whileInView: { x: 0 },
  };

  return (
    <nav className="header"> 
      <motion.div variants={animationOptions} initial="initial" animate="whileInView">
        <IoFastFoodOutline />
      </motion.div>

      <div className="navbar-content"> 
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>
        <DropdownMenu />
      </div>
    </nav>
  );
};

export default Header;
