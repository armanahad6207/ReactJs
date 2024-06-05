import Product from "./Components/Product";
import React, { useEffect, useState } from "react";
import productData from "./productApi";
function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const listOfProducts = await productData();
      setData(listOfProducts.products);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className=" container bg-gray-200 p-5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((val) => {
        return (
          <Product
            key={val.id}
            title={val.title}
            price={val.price}
            image={val.images[0]}
          />
        );
      })}
    </div>
  );
}

export default App;
