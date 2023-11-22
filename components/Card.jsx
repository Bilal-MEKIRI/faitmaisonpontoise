import "../styles/card.scss";

import Image from "next/image";
import Button from "../components/Button";

const Card = () => {
  return (
    <div className="card">
      <div className="img-price-container">
        <div className="price">10€</div>
        <img
          src="/assets/images/hamburger 1.jpg"
          className="menu-img"
          width={20}
          height={20}
        />
      </div>
      <div className="description">
        <span className="menu-name">CHEESE BURGER</span>
        (1 steak, cheddar) + frites et boisson 33cl
      </div>
      <Button url="/contact" content="Commander" blank="" />
    </div>
  );
};

export default Card;
