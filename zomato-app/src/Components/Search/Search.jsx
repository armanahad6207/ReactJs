import bgImage from "../../assets/shutterstock_348320018@2x.png";

function Search() {
  return (
    <>
      <div
        className="w-full h-[80vh] bg-slate-600 box-border   "
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
              className="grid grid-cols-1 sm:grid-cols-[40%_auto] sm:gap-[11px] gap-4   mx-auto sm:px-[50px] lg:px-[150px] "
            >
              <select
                className="text-[#636F88] outline-none px-[10px] py-[12px] text-[20px] mx-[40px] sm:mx-0  hover:bg-slate-100 bg-white "
                style={{ appearance: "none" }}
                defaultValue={0}
              >
                <option value={0} disabled defaultValue hidden>
                  Please Type a Location
                </option>
                <option value={1}>Sarjapur Road</option>
                <option value={2}>Bengaluru HSR Layout</option>
                <option value={3}>Bengaluru Kormangala</option>
                <option value={4}>Bengaluru Jay Nagar</option>
              </select>

              <select
                className="text-[#636F88] outline-none px-[10px] py-[12px] text-[20px] mx-[40px] sm:mx-0 hover:bg-slate-100 bg-white  "
                style={{ appearance: "none" }}
                defaultValue={0}
              >
                <option value={0} disabled hidden>
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
