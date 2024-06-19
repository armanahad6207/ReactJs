import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function Header({ bgColor }) {
  return (
    <div className="w-full">
      <header
        className={` w-full bg-transparent fixed hidden sm:block ${bgColor} p-1 bg-red-700 `}
      >
        <nav className=" container mx-auto flex justify-between items-center w-full">
          <div className="flex justify-center items-center  gap-3 ">
            <h2 className="text-[40px] font-extrabold text-[#2f1212] whitespace-nowrap ">
              Zomato-app
            </h2>
            <Link
              className="text-sm mt-[15px]  px-[20px] py-[2px] bg-red-600 hover:bg-red-700 text-white rounded-sm  "
              to="/"
            >
              Home
            </Link>
          </div>

          <div className="mr-[20px] sm:mr-[40px] space-x-3 sm:space-x-6 text-white">
            <Link
              to="#"
              className=" border border-white px-[12px] py-[4px] text-center rounded-sm hover:text-slate-200  "
            >
              Login
            </Link>
            <Link
              to="#"
              className="border border-white px-[12px] py-[4px] text-center rounded-sm hover:text-slate-200   "
            >
              SignUP
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
Header.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

export default Header;
