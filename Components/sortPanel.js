import React from 'react';

const SortPanel = ({ sortOption, setSortOption }) => {
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <select onChange={handleSortChange}>
      <option value="price">Price</option>
      <option value="rating">Rating</option>
      <option value="discount">Discount</option>
    </select>
  );
};

export default SortPanel;
