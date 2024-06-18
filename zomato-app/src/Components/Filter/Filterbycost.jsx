function Filterbycost() {
  return (
    <div>
      <h3 className="my-[12px]">Cost For Two</h3>
      <div className="flex flex-row overflow-auto sm:flex-col sm:overflow-hidden ">
        <div className=" px-[6px] py-[4px] sm:px-0 sm:py-0 gap-4 sm:gap-0  whitespace-nowrap text-center flex justify-between shadow-sm mb-[10px] sm:mb-0   mr-12 border sm:border-none  sm:bg-transparent sm:shadow-none bg-white w-[220px]  ">
          <label htmlFor="Nindian"> Less Than 500</label>
          <input type="checkbox" id="Nindian" />
        </div>
        <div className=" px-[6px] py-[4px] sm:px-0 sm:py-0 gap-4 sm:gap-0  whitespace-nowrap text-center flex justify-between shadow-sm mb-[10px] sm:mb-0  mr-12 border sm:border-none sm:bg-transparent sm:shadow-none bg-white w-[220px]">
          <label htmlFor="Nindian">500 to 1000</label>
          <input type="checkbox" id="Nindian" />
        </div>
        <div className=" px-[6px] py-[4px] sm:px-0 sm:py-0 gap-4 sm:gap-0  whitespace-nowrap text-center flex justify-between shadow-sm  mb-[10px] sm:mb-0  mr-12 border sm:border-none sm:bg-transparent sm:shadow-none bg-white w-[220px]">
          <label htmlFor="Nindian" className="text-center">
            1000 to 1500
          </label>
          <input type="checkbox" id="Nindian" className="text-center" />
        </div>
        <div className=" px-[6px] py-[4px] sm:px-0 sm:py-0 gap-4 sm:gap-0  whitespace-nowrap text-center flex justify-between shadow-sm  mb-[10px] sm:mb-0  mr-12 border sm:border-none sm:bg-transparent sm:shadow-none bg-white w-[220px]">
          <label htmlFor="Nindian">1500 to 2000</label>
          <input type="checkbox" id="Nindian" />
        </div>
        <div className=" px-[6px] py-[4px] sm:px-0 sm:py-0 gap-4 sm:gap-0  whitespace-nowrap text-center flex justify-between shadow-sm  mb-[10px] sm:mb-0  mr-12 border border-black  sm:border-none sm:bg-transparent sm:shadow-none  bg-white  w-[220px]">
          <label htmlFor="Nindian">2000+</label>
          <input type="checkbox" id="Nindian" />
        </div>
      </div>
    </div>
  );
}

export default Filterbycost;
