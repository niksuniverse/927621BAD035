const generateUniqueId = (product) => {
    return `${product.productName}-${product.price}-${product.company}-${product.category}`;
  };
  
  export default generateUniqueId;
  