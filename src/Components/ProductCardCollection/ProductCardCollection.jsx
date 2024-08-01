import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCardCollection.css'; 

const ProductCardCollection = (props) => {
  const [showAll, setShowAll] = useState(false);

  const { heading, cards, button } = props.data.productCardCollection;

  const visibleCards = showAll ? cards : cards.slice(0, 4);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4 mt-4">{heading}</h2>
        </div>
      </div>
      <div className="row mt-4">
        {visibleCards.map((card, index) => (
          <ProductCard
            key={index}
            title={card.title}
            imgSrc={card.imgSrc}
            altText={card.altText}
            link={card.link}
            level={card.level}
            type={card.type}
          />
        ))}
      </div>
      <div className="row">
        <div className="col-12 text-center">
          {!showAll && (
            <button 
              className="btn btn-secondary mt-5"
              onClick={() => setShowAll(true)}
            >
              {button.text}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCardCollection;
