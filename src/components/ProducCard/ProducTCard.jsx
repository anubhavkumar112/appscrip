/* eslint-disable react/prop-types */
import { useState } from 'react';
import heart from '../../images/heart.png';
import redHeart from '../../images/Red-Heart-PNG.png';
import './ProducTCard.css';

const ProductCard = ({ product, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(product); // Notify parent component about the toggle
  };

  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <span className="title">
        {product.desc}   
        <span className="heart-icon" onClick={toggleFavorite}>
          {isFavorite ? <img src={redHeart} alt="" /> : <img src={heart} alt="" />}
        </span>
      </span>
    </div>
  );
};

export default ProductCard;
