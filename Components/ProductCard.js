import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { productName, company, category, price, rating, discount, availability } = product;
  const uniqueId = `${productName}-${company}-${category}`;

  return (
    <div>
      <h2>{productName}</h2>
      <p>Company: {company}</p>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      <p>Discount: {discount}%</p>
      <p>Availability: {availability}</p>
      <Link to={`/product/${uniqueId}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
