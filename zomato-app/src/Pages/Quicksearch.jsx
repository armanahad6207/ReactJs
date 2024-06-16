function Quicksearch() {
  return (
    <div className="bg-slate-200">
      <section className="max-w-[1110px] mx-auto  py-[50px]">
        <h1 className="text-[30px] text-left font-bold text-[#192F60] ">
          Quick Searches
        </h1>
        <h3 className="text-[18px] text-[#8C96AB] text-left">
          Discover restaurants by type of meal
        </h3>
        <div>
          <div>
            <div>
              <img
                src="../assets/shutterstock_1154073754.png"
                alt="breakfast"
              />
            </div>
            <div>
              <h2>Breakfast</h2>
              <p>Start your day with exclusive breakfast options</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Quicksearch;
