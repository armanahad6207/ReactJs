// import { useState } from "react";
// import PropTypes from "prop-types";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

// function DisplayOrderedList({ orderList }) {
//   const [paymentProcessing, setPaymentProcessing] = useState(false);
//   const stripe = useStripe();
//   const elements = useElements();

//   const renderData = () => {
//     if (!Array.isArray(orderList)) {
//       return null;
//     }

//     return orderList.map((order) => (
//       <tr key={order.id}>
//         <td className="border px-4 py-2">{order.id}</td>
//         <td className="border px-4 py-2">{order.rest_name}</td>
//         <td className="border px-4 py-2">{order.name}</td>
//         <td className="border px-4 py-2">{order.email}</td>
//         <td className="border px-4 py-2">{order.phone}</td>
//         <td className="border px-4 py-2">{order.cost}</td>
//       </tr>
//     ));
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     setPaymentProcessing(true);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });

//     if (!error) {
//       const { id } = paymentMethod;

//       // Send paymentMethod.id to the backend
//       const response = await fetch("http://localhost:3000/api/payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           id,
//           amount: calculateTotalCost(orderList),
//         }),
//       });

//       const paymentResponse = await response.json();
//       setPaymentProcessing(false);

//       if (paymentResponse.success) {
//         console.log("Payment successful");
//         // Handle successful payment (e.g., show a success message, update UI)
//       } else {
//         console.log("Payment failed");
//         // Handle payment failure
//       }
//     } else {
//       setPaymentProcessing(false);
//       console.log(error);
//       // Handle error (e.g., show error message)
//     }
//   };

//   const calculateTotalCost = (orderList) => {
//     return orderList.reduce((acc, order) => acc + order.cost, 0) * 100; // Convert to cents
//   };

//   return (
//     <div className="overflow-x-auto">
//       <h2 className="text-xl font-bold mb-4">Ordered List</h2>
//       <table className="w-full mt-4">
//         <thead>
//           <tr>
//             <th className="bg-gray-200 text-left px-4 py-2">ID</th>
//             <th className="bg-gray-200 text-left px-4 py-2">Restaurant Name</th>
//             <th className="bg-gray-200 text-left px-4 py-2">Name</th>
//             <th className="bg-gray-200 text-left px-4 py-2">Email</th>
//             <th className="bg-gray-200 text-left px-4 py-2">Phone</th>
//             <th className="bg-gray-200 text-left px-4 py-2">Cost</th>
//           </tr>
//         </thead>
//         <tbody>{renderData()}</tbody>
//       </table>
//       <div className="mt-4">
//         <form onSubmit={handlePayment}>
//           <CardElement />
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
//             disabled={!stripe || paymentProcessing}
//           >
//             {paymentProcessing ? "Processing..." : "Proceed to Payment"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// DisplayOrderedList.propTypes = {
//   orderList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       rest_name: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//       phone: PropTypes.string.isRequired,
//       cost: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

// export default DisplayOrderedList;

import { useState } from "react";
import PropTypes from "prop-types";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

function DisplayOrderedList({ orderList }) {
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const renderData = () => {
    if (!Array.isArray(orderList)) {
      return null;
    }

    return orderList.map((order, i) => (
      <tr key={order.id}>
        <td key={i} className="border px-4 py-2">
          {order.id}
        </td>
        <td key={i} className="border px-4 py-2">
          {order.rest_name}
        </td>
        <td key={i} className="border px-4 py-2">
          {order.name}
        </td>
        <td key={i} className="border px-4 py-2">
          {order.email}
        </td>
        <td key={i} className="border px-4 py-2">
          {order.phone}
        </td>
        <td key={i} className="border px-4 py-2">
          {order.totalPrice}
        </td>
      </tr>
    ));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setPaymentProcessing(true);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (!error) {
        const { id } = paymentMethod;

        // Send paymentMethod.id to the backend
        const response = await axios.post("http://localhost:3000/api/payment", {
          id,
          amount: calculateTotalCost(orderList),
        });

        const paymentResponse = response.data;
        setPaymentProcessing(false);

        if (paymentResponse.success) {
          console.log("Payment successful");
          // Handle successful payment (e.g., show a success message, update UI)
        } else {
          console.log("Payment failed");
          // Handle payment failure
        }
      } else {
        setPaymentProcessing(false);
        console.log(error.message);
        // Handle error (e.g., show error message)
      }
    } catch (error) {
      setPaymentProcessing(false);
      console.error("Error processing payment:", error);
      // Handle exception (e.g., show error message)
    }
  };

  const calculateTotalCost = (orderList) => {
    return orderList.reduce((acc, order) => acc + order.cost, 0) * 100; // Convert to cents
  };

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Ordered List</h2>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="bg-gray-200 text-left px-4 py-2">ID</th>
            <th className="bg-gray-200 text-left px-4 py-2">Restaurant Name</th>
            <th className="bg-gray-200 text-left px-4 py-2">Name</th>
            <th className="bg-gray-200 text-left px-4 py-2">Email</th>
            <th className="bg-gray-200 text-left px-4 py-2">Phone</th>
            <th className="bg-gray-200 text-left px-4 py-2">Cost</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </table>
      <div className="mt-4 md:px-[100px] md:py-[50px]">
        <form
          onSubmit={handlePayment}
          className="border border-black px-[30px] py-[10px] rounded-md shadow-md"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Card Details
            </label>
            <CardElement className="mt-1 p-2 border border-gray-300 rounded-md" />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
            disabled={!stripe || paymentProcessing}
          >
            {paymentProcessing ? "Processing..." : "Proceed to Payment"}
          </button>
        </form>
      </div>
    </div>
  );
}

DisplayOrderedList.propTypes = {
  orderList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rest_name: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DisplayOrderedList;
