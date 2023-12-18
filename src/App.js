import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";
// Add module imports for CART

// Add module imports for Shipping

import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
// Add module imports for MY ORDERS

import OrderDetails from "./components/myOrders/OrderDetails";
import About from "./components/about/About";


import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/about.scss";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      
        <Route path="/" element={<Home />} />
       
      
       

        
      </Routes>
      <Footer />
     
    </Router>
  );
}

export default App;
