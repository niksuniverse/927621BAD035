import React from 'react';

const FilterPanel = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <input name="category" onChange={handleFilterChange} placeholder="Category" />
      <input name="company" onChange={handleFilterChange} placeholder="Company" />
      <input name="rating" type="number" onChange={handleFilterChange} placeholder="Rating" />
      <input name="priceRange" type="text" onChange={handleFilterChange} placeholder="Price Range" />
      <select name="availability" onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="yes">In Stock</option>
        <option value="no">Out of Stock</option>
      </select>
    </div>
  );
};

export default FilterPanel;
