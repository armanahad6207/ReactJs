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
    <>
      <Producttable data={data} />
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
    </>
  );
}

function Producttable({ data }) {
  return (
    <div className="p-12">
      <table
        style={{
          width: "100%",
        }}
      >
        <thead>
          <tr className="font-bold text-xl">
            <td>id</td>
            <td>title</td>
            <td>price</td>
            <td>image</td>
          </tr>
        </thead>
        {data.map((item) => {
          return (
            <>
              <tbody>
                <tr className="text-[10px] mt-2 bg-yellow-400 border border-blue-400 overflow-hidden">
                  <td className="bg-black text-white text-center ">
                    {item.id}
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.images[0]}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default App;
