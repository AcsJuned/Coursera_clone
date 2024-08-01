import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

const ProductCard = ({ title, imgSrc, altText, link, level, type }) => {
  return (
    <div className="card">
      <img src={imgSrc} className="card-img-top imgsize " alt={altText} />
      <div className="card-body cardb justify-content-between">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Level: {level}</p>
        <p className="card-text">Type: {type}</p>
        <a href={link} className="btn btn-primary">Go to course</a>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ProductCard;
