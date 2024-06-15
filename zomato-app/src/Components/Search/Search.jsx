import bgImage from "../../assets/shutterstock_348320018@2x.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Search() {
  return (
    <>
      <div
        className="w-full h-[80vh] bg-slate-600   "
        style={{
          background: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1110px] mx-auto text-center text-white sm:py-[200px] py-[100px]  ">
          <h2 className="text-[40px] font-extrabold text-red-100 whitespace-nowrap  sm:hidden ">
            Zomato-app
          </h2>
          <h3 className="text-[30px] font-bold leading-[30px] px-[5px] sm:px-1">
            Find the best restaurants, cafés, and bars
          </h3>
          <div className="mt-[40px]">
            <form
              action=""
              className="grid grid-cols-1 gap-[20px] min-w-[200px]"
            >
              <select
                className="text-[#636F88] outline-none px-[10px] py-[15px] text-[20px] "
                style={{ appearance: "none" }}
              >
                <option disabled hidden>
                  Please Type a Location
                </option>
                <option>Sarjapur Road</option>
                <option>Bengaluru HSR Layout</option>
                <option>Bengaluru Kormangala</option>
                <option>Bengaluru Jay Nagar</option>
              </select>

              <select
                className="text-[#636F88] outline-none px-[10px] py-[15px] text-[20px] "
                style={{ appearance: "none" }}
              >
                <option disabled hidden>
                  Search for restaurants
                </option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
