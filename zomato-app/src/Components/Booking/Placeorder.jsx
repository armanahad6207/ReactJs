import { useState } from "react";
import { useParams } from "react-router-dom";

function Placeorder(props) {
  const { restaurantName } = useParams();
  console.log(restaurantName);

  const [formData, setFormData] = useState({
    name: "arman",
    email: "armanahad@gmail.com",
    phone: "374636782",
    address: " piska nagri,ranchi",
    totalOrder: " 237", // Assuming you have a state for total order price
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="w-[1110px] container mx-auto py-4 px-4 md:px-8 lg:px-16 border border-blue-600 my-2">
      <h2 className="text-3xl text-white rounded-sm font-bold mb-4 bg-blue-600 px-2 py-4">
        Order for {restaurantName}
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div>
            <label
              className="block text-lg font-semibold mb-2 md:mb-0"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-blue-400 rounded"
            />
          </div>
          <div>
            <label
              className="block text-lg font-semibold mb-2 md:mb-0"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-blue-400 rounded"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div>
            <label
              className="block text-lg font-semibold mb-2 md:mb-0"
              htmlFor="phone"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-blue-400 rounded"
            />
          </div>
          <div className="gap-2">
            <label
              className="block text-lg font-semibold mb-2 md:mb-0"
              htmlFor="address"
            >
              Address:
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 border border-blue-400 rounded"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:px-4 gap-2 items-center">
          <p className="text-lg font-semibold">
            Total Order Price:{" "}
            <span className="font-bold">Rs/- {formData.totalOrder}</span>
          </p>
        </div>
        <div className="md:px-4">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default Placeorder;
