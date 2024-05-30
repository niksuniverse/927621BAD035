import React, { useEffect, useContext, useState } from 'react';
import { ProductContext } from '../App';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import FilterPanel from '../components/FilterPanel';
import SortPanel from '../components/SortPanel';
import Pagination from '../components/Pagination';

const AllProductsPage = () => {
  const { products, setProducts, filters, setFilters } = useContext(ProductContext);
  const [sortOption, setSortOption] = useState('price');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      // Example API call, should be replaced with actual API calls
      const response = await api.getProducts('Company', 'Category');
      setProducts(response);
      setTotalPages(Math.ceil(response.length / 10)); // Example pagination logic
    };
    fetchProducts();
  }, [filters, sortOption, page]);

  const filteredAndSortedProducts = products
    .filter(product => {
      // Add filtering logic based on filters
      return true;
    })
    .sort((a, b) => {
      // Add sorting logic based on sortOption
      return a[sortOption] - b[sortOption];
    })
    .slice((page - 1) * 10, page * 10);

  return (
    <div>
      <FilterPanel filters={filters} setFilters={setFilters} />
      <SortPanel sortOption={sortOption} setSortOption={setSortOption} />
      <div>
        {filteredAndSortedProducts.map(product => (
          <ProductCard key={product.productName} product={product} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default AllProductsPage;
