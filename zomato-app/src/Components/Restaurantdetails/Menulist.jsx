import PropTypes from "prop-types";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Menulist({ menu }) {
  const [order, setOrder] = useState([]);

  // Function to add item to order
  const addToOrder = (item) => {
    setOrder([...order, item]);
  };
  // Function to remove item from order
  const removeFromOrder = (index) => {
    const newOrder = [...order];
    newOrder.splice(index, 1);
    setOrder(newOrder);
  };

  // Calculate total number of items in order
  const totalItems = order.length;
  console.log(order);

  return (
    <div className="container mx-auto py-4">
      <div className="mt-4">
        <p className="text-3xl">
          Total items added: <span className="font-bold">{totalItems}</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Display each menu item */}
        {menu.map((item) => (
          <div
            key={item.menu_id}
            className="shadow-lg rounded-lg p-4 grid grid-cols-[40%_auto] md:grid-cols-1 gap-4"
          >
            <div>
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="rounded-lg mb-2 h-full object-cover md:w-full md:h-50"
              />
            </div>
            <div>
              <div className="mb-2">
                <h3 className="text-lg font-semibold">{item.menu_name}</h3>
                <p className="text-gray-800 font-bold">
                  Rs/- {item.menu_price}
                </p>
                <p className="my-2">
                  <span className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded">
                    {item.menu_type}
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <button
                  onClick={() => addToOrder(item)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromOrder(item)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

Menulist.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      menu_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      menu_price: PropTypes.number.isRequired,
      menu_type: PropTypes.string.isRequired,
      menu_image: PropTypes.string.isRequired,
      menu_id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Menulist;
