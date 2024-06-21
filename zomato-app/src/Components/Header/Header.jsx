import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import LoginPopUp from "../Auth/Login";
import RegistrationPopUp from "../Auth/Register";

let url = "http://localhost:4000/api/auth/userInfo";
function Header() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [userData, setUserData] = useState();
  const [showRegistrationPopUp, setShowRegistrationPopUp] = useState(false);

  // const conditionalHeader = () => {
  //   if (userData.name) {
  //     let data = userData;
  //     sessionStorage.setItem("loginStatus", "loggedIn");
  //     sessionStorage.setItem("userInfo", JSON.stringify(data));
  //     return (
  //       <>
  //         <div className="mr-[20px] sm:mr-[40px] space-x-3 sm:space-x-6 text-white">
  //           <Link
  //             to="#"
  //             className=" border border-white px-[12px] py-[4px] text-center rounded-sm hover:text-slate-200  "
  //           >
  //             Hi,{data.name}
  //           </Link>
  //           <Link
  //             to="#"
  //             className=" bg-slate-600 text-white border border-white px-[12px] py-[4px] text-center rounded-sm hover:text-slate-200   "
  //           >
  //             Logout
  //           </Link>
  //         </div>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <div className="mr-[20px] sm:mr-[40px] space-x-3 sm:space-x-6 text-white">
  //           <Link
  //             to="#"
  //             className=" border border-white px-[12px] py-[4px] text-center rounded-sm hover:text-slate-200  "
  //           >
  //             Login
  //           </Link>
  //           <Link
  //             to="#"
  //             className="border border-white px-[12px] py-[4px] text-center rounded-sm hover:text-slate-200   "
  //           >
  //             SignUP
  //           </Link>
  //         </div>
  //       </>
  //     );
  //   }
  // };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }, []);

  return (
    <div className="w-full">
      <header className={` w-full bg-transparent fixed hidden sm:block  p-1  `}>
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
          {/* <div>{conditionalHeader()}</div> */}

          <div className="mr-[20px] sm:mr-[40px] space-x-3 sm:space-x-6 text-white">
            <Link
              onClick={() => setShowPopUp(true)}
              // to="/login"
              className=" border border-white px-[12px] py-[4px] text-center rounded-sm hover:text-slate-200  "
            >
              Login
            </Link>
            {showPopUp && <LoginPopUp closePopUp={() => setShowPopUp(false)} />}
            <Link
              onClick={() => setShowRegistrationPopUp(true)}
              // to="/register"
              className="border border-white px-[12px] py-[4px] text-center rounded-sm hover:text-slate-200   "
            >
              SignUP
            </Link>
            {showRegistrationPopUp && (
              <RegistrationPopUp
                closePopUp={() => setShowRegistrationPopUp(false)}
              />
            )}
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
