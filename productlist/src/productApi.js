const productData = () => {
  return fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => data);
};

export default productData;
