// import { useEffect, useState } from "react";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import Header from "../Header/Header";
// import DisplayOrderedList from "./Displayorderdlist";

// const stripePromise = loadStripe("your-publishable-key-here");
// const url = "http://localhost:3000/orders";

// function Orderdmenu() {
//   let sessionData = sessionStorage.getItem("userInfo");
//   let userData = JSON.parse(sessionData);
//   console.log("userinfo", userData.email);
//   let [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const ordersDetail = async () => {
//       let resp = await fetch(`${url}?email=${userData.email}`);
//       let data = await resp.json();
//       setOrders(data);
//       console.log("data is w.r.t mail", data);
//     };
//     ordersDetail();
//   }, []);

//   console.log("my order", orders);

//   return (
//     <div className="flex flex-col gap-[100px]">
//       <Header />
//       <Elements stripe={stripePromise}>
//         <DisplayOrderedList orderList={orders} />
//       </Elements>
//     </div>
//   );
// }

// export default Orderdmenu;

import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Header from "../Header/Header";
import DisplayOrderedList from "./Displayorderdlist";

const stripePromise = loadStripe(
  "pk_test_51PUpG402Ca2xbOBVTrgeh2jcb6O5GmaHsmG6P1Uh4vQI9r2iuwt9YUWKZR8t4eO0WFoPcHjg1gDcVUqxBPXHUJTA00EiUQ1o6j"
);
const url = "http://localhost:3000/orders";

function Orderdmenu() {
  const sessionData = sessionStorage.getItem("userInfo");
  const userData = JSON.parse(sessionData);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${url}?email=${userData.email}`);
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, [userData.email]);

  return (
    <div className="flex flex-col gap-4">
      <Header />
      <div className="max-w-4xl mx-auto">
        <Elements stripe={stripePromise}>
          <DisplayOrderedList orderList={orders} />
        </Elements>
      </div>
    </div>
  );
}

export default Orderdmenu;
