import "../styles/card.scss";

import Button from "../components/Button";

const Card = ({ price, img, name, description, className }) => {
  return (
    <div className={`card ${className}`}>
      <div className="img-price-container">
        <div className="price">{price}</div>
        <img src={img} className="menu-img" width={20} height={20} />
      </div>
      <div className="description">
        <span className="menu-name">{name}</span>
        {description}
      </div>
      <Button url="/contact" content="Commander" blank="" />
    </div>
  );
};

export default Card;
