import Breakfast from "../../assets/Breakfast.png";

export default function Quicksearch() {
  return (
    <div className="bg-slate-200">
      {" "}
      <section className="max-w-[1110px] mx-auto  py-[50px]">
        <h1 className="text-[30px] text-left font-bold text-[#192F60] sm:px-0 px-[20px] ">
          Quick Searches
        </h1>
        <h3 className="text-[18px] text-[#8C96AB] text-left sm:px-0 px-[20px] whitespace-nowrap">
          Discover restaurants by type of meal
        </h3>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 sm:px-[30px]  px-[20px]">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-2xl"
            >
              <div className="sm:flex ">
                <div className="md:flex-shrink-0">
                  <img
                    className=" w-full object-cover h-full md:w-48"
                    src={Breakfast}
                    alt="breakfast"
                  />
                </div>
                <div className="px-5 py-6">
                  <h2 className="text-2xl font-bold text-[#192F60]">
                    Breakfast
                  </h2>
                  <p className="mt-2 text-gray-600 leading-[18px]">
                    Start your day with exclusive breakfast options
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
