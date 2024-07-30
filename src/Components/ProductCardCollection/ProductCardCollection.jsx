import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCardCollection.css'; 
import Image12 from '../../Asset/images/img12.png';
import Image13 from '../../Asset/images/img13.png';
import Image14 from '../../Asset/images/img14.png';
import Image15 from '../../Asset/images/img15.png';
import Image16 from '../../Asset/images/img16.png';
import Image17 from '../../Asset/images/img17.png';
import Image18 from '../../Asset/images/img18.png';

const ProductCardCollection = () => {
  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      title: 'Google AI Essentials',
      imgSrc: Image12,
      altText: 'Google AI Essentials',
      link: 'https://www.youtube.com/@WebXLearner',
      level: 'Beginner',
      type: 'Course'
    },
    {
      title: 'Python For Essential',
      imgSrc: Image13,
      altText: 'Python For Essential',
      link: 'https://www.youtube.com/@WebXLearner',
      level: 'Beginner',
      type: 'Specialization'
    },
    {
      title: 'Prompt Engineering',
      imgSrc: Image14,
      altText: 'Prompt Engineering',
      link: 'https://www.youtube.com/@WebXLearner',
      level: 'Beginner',
      type: 'To Expert'
    },
    {
      title: 'IBM Data Science',
      imgSrc: Image15,
      altText: 'IBM Data Science',
      link: 'https://www.youtube.com/@WebXLearner',
      level: 'Beginner',
      type: 'Professional Certificate'
    },
    {
      title: 'Navigation Generated AI',
      imgSrc: Image16,
      altText: 'Navigation Generated AI',
      link: 'https://www.youtube.com/@WebXLearner',
      level: 'Beginner',
      type: 'To Expert'
    },
    {
      title: 'Excel Skill For Business',
      imgSrc: Image17,
      altText: 'Excel Skill For Business',
      link: 'https://www.youtube.com/@WebXLearner',
      level: 'Beginner',
      type: 'Friendly',
    },
    {
      title: 'Google IT Support',
      imgSrc: Image18,
      altText: 'Google IT Support',
      link: 'https://www.youtube.com/@WebXLearner',
      level: 'Beginner',
      type: 'Professional Certificate',
    },
    // Add more card data here
  ];

  const visibleCards = showAll ? cards : cards.slice(0, 4);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4 mt-4">See what you can learn with Coursera Plus</h2>
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
        <div className="col-12 text-center ">
          {!showAll && (
            <button 
              className="btn btn-secondary mt-5"
              onClick={() => setShowAll(true)}
            >
              Show more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCardCollection;
