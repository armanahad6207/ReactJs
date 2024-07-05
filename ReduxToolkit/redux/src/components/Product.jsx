import { useEffect, useState } from "react";

function Product() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const productList = async () => {
      try {
        await fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => setData(data));
      } catch (error) {
        console.log(error.message);
      }
    };
    productList();
  }, []);

  console.log("data", data);

  return (
    <>
      <div className="container max-w-[1200px] mx-auto bg-slate-400">
        {data.map((val) => (
          <>
            <div></div>
          </>
        ))}
      </div>
    </>
  );
}
// https://fakestoreapi.com/products
export default Product;
