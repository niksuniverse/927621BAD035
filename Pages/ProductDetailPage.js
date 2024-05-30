import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      // Example API call, should be replaced with actual API calls
      const response = await api.getProductById(id);
      setProduct(response);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { productName, company, category, price, rating, discount, availability } = product;

  return (
    <div>
      <h1>{productName}</h1>
      <p>Company: {company}</p>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      <p>Discount: {discount}%</p>
      <p>Availability: {availability}</p>
    </div>
  );
};

export default ProductDetailPage;

