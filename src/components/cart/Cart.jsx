import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import "../../styles/cart.scss";
import PropTypes from 'prop-types';


const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [cartItems, setCartItems] = useState({
    1: { title: "Cheese Burger", img: burger1, value: 0 },
    2: { title: "Veg Cheese Burger", img: burger2, value: 0 },
    3: { title: "Cheese burger with French Fries", img: burger3, value: 0 },
  });

  const increment = (itemId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemId]: { ...prevItems[itemId], value: prevItems[itemId].value + 1 },
    }));
  };

  const decrement = (itemId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemId]: { ...prevItems[itemId], value: Math.max(0, prevItems[itemId].value - 1) },
    }));
  };

  return (
    <section className="cart">
      <main>
        {Object.entries(cartItems).map(([itemId, item]) => (
          <CartItem
            key={itemId}
            title={item.title}
            img={item.img}
            value={item.value}
            increment={() => increment(itemId)}
            decrement={() => decrement(itemId)}
          />
        ))}
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};
CartItem.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};
export default Cart;
