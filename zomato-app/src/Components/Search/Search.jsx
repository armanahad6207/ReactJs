import bgImage from "../../assets/shutterstock_348320018@2x.png";
function Search() {
  return (
    <>
      <div className="container relative max-w-full h-[80vh] overflow-hidden">
        <img src={bgImage} className="w-full h-full object-cover" />
        <div className="absolute top-1/2 sm:top-1/2 sm:left-1/3 flex flex-col  gap-6">
          <p className="text-xl sm:text-2xl  font-semibold text-white text-center">
            Find the best restaurants, cafés, and bars
          </p>
          <div className="flex flex-col sm:flex-row justify-start gap-5 px-6 ">
            <select className=" hover:bg-gray-200 bg-white rounded-sm text-sm px-3 py-4 text-gray-500 w-full sm:w-52 appearance-none outline-none  ">
              <option className="">Please type a location</option>
              <option>option1</option>
              <option>option1</option>
              <option>option1</option>
            </select>
            <select className=" hover:bg-gray-200 bg-white rounded-sm text-sm  text-gray-500 px-3 py-4 w-full appearance-none outline-none ">
              <option>Search for restaurant</option>
              <option>result</option>
              <option>result</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
