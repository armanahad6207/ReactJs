import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import Filterbycuisine from "../Components/Filter/Filterbycuisine";
import Filterbycost from "../Components/Filter/Filterbycost";

function Listingpage() {
  const murl = "http://localhost:3000/restaurant?mealId=";
  const [restaurant, setRestaurant] = useState([]);

  const { mealId } = useParams();

  //   get Restaurant w.r.t mealtype
  useEffect(() => {
    console.log("mealid", mealId);
    sessionStorage.setItem("mealId", mealId);

    fetch(`${murl}${mealId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRestaurant(data);
      });
  }, []);

  return (
    <div className="">
      <Header bgColor="bg-red-500" />

      <div className="container mx-auto sm:py-[100px] py-0 ">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {/* Left side - Filter */}
          <div className="col-span-1 sm:h-full  bg-gray-100 px-6 py-3 rounded">
            <h2 className="text-xl font-bold mb-4 text-[#192F60]">Filters</h2>
            <div>
              <h3 className="text-[14px] text-[#192F60] mb-[7px]">
                Select Location
              </h3>
              <select
                defaultValue={0}
                className="w-[208px] h-[35px] text-[#8C96AB] outline-none shadow-sm"
              >
                <option value={0} disabled hidden>
                  Select Location
                </option>
                <option>ranc</option>
              </select>
            </div>
            {/* filter by cuisine */}
            <Filterbycuisine />

            {/* filter by cost */}
            <Filterbycost />
          </div>

          {/* Right side - Products */}
        </div>
      </div>
    </div>
  );
}

export default Listingpage;
