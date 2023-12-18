import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import "../../styles/menu.scss";

const Menu = () => {
  // Function handler for adding to cart (replace this with your actual addToCartHandler function)
  const addToCartHandler = (item) => {
    console.log(`Added ${item.title} to cart`);
  };

  return (
    <div id="menu">
      <h1>Explore Menu</h1>
      <div>
        {/* MenuCard for Cheese Burger */}
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />

        {/* MenuCard for Burger 2 */}
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={250}
          title="Burger 2"
          handler={addToCartHandler}
          delay={0.2}
        />

        {/* MenuCard for Burger 3 */}
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={300}
          title="Burger 3"
          handler={addToCartHandler}
          delay={0.3}
        />
      </div>
    </div>
  );
};

export default Menu;
