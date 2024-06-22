// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { useEffect, useState } from "react";

// let url = "http://localhost:9000/api/auth/userInfo";
// function Header() {
//   const [userData, setUserData] = useState("");

//   useEffect(() => {
//     fetch(url, {
//       method: "GET",
//       headers: {
//         "x-access-token": sessionStorage.getItem("itk"),
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setUserData(data);
//       });
//   }, []);

//   const conditionalHandler = () => {
//     if (userData.name) {
//       sessionStorage.setItem("loginstatus", "logedIn");
//       sessionStorage.setItem("userInfo", JSON.stringify(userData));
//       return (
//         <>
//           <div className="mr-[20px] sm:mr-[40px] space-x-3 sm:space-x-6 text-white">
//             <Link
//               to="/login"
//               className=" border border-white px-[12px] py-[4px] text-center rounded-sm hover:text-slate-200  "
//             >
//               Hi,{userData.name}
//             </Link>

//             <button className="text-xl bg-red-400 px-2 py-1 rounded-sm">
//               logOut
//             </button>
//           </div>
//         </>
//       );
//     } else {
//       return (
//         <>
//           <div className="mr-[20px] sm:mr-[40px] space-x-3 sm:space-x-6 text-white">
//             <Link
//               to="/login"
//               className=" border border-white px-[12px] py-[4px] text-center rounded-sm hover:text-slate-200  "
//             >
//               Login
//             </Link>

//             <Link
//               to="/register"
//               className="border border-white px-[12px] py-[4px] text-center rounded-sm hover:text-slate-200   "
//             >
//               SignUP
//             </Link>
//           </div>
//         </>
//       );
//     }
//   };
//   return (
//     <div className="w-full">
//       <header className={` w-full bg-transparent fixed hidden sm:block  p-1  `}>
//         <nav className=" container mx-auto flex justify-between items-center w-full">
//           <div className="flex justify-center items-center  gap-3 ">
//             <h2 className="text-[40px] font-extrabold text-[#2f1212] whitespace-nowrap ">
//               Zomato-app
//             </h2>
//             <Link
//               className="text-sm mt-[15px]  px-[20px] py-[2px] bg-red-600 hover:bg-red-700 text-white rounded-sm  "
//               to="/"
//             >
//               Home
//             </Link>
//           </div>

//           {conditionalHandler()}
//         </nav>
//       </header>
//     </div>
//   );
// }
// Header.propTypes = {
//   bgColor: PropTypes.string.isRequired,
// };

// export default Header;
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const url = "http://localhost:9000/api/auth/userInfo";

function Header() {
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("ltk");

    if (!token) {
      console.error("No authentication token found");
      navigate("/login");
      return;
    }

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 403) {
            console.error("Access forbidden: invalid or missing token");
            navigate("/login");
          }
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user info:", error.message);
      });
  }, [navigate]);

  const conditionalHandler = () => {
    if (userData.name) {
      sessionStorage.setItem("loginstatus", "loggedIn");
      sessionStorage.setItem("userInfo", JSON.stringify(userData));
      return (
        <div className="mr-[20px] sm:mr-[40px] space-x-3 sm:space-x-6 text-white">
          <Link
            to="/login"
            className="border border-white px-[12px] py-[4px] text-center rounded-sm hover:text-slate-200"
          >
            Hi, {userData.name}
          </Link>
          <button className="text-xl bg-red-400 px-2 py-1 rounded-sm">
            logOut
          </button>
        </div>
      );
    } else {
      return (
        <div className="mr-[20px] sm:mr-[40px] space-x-3 sm:space-x-6 text-white">
          <Link
            to="/login"
            className="border border-white px-[12px] py-[4px] text-center rounded-sm hover:text-slate-200"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="border border-white px-[12px] py-[4px] text-center rounded-sm hover:text-slate-200"
          >
            SignUp
          </Link>
        </div>
      );
    }
  };

  return (
    <div className="w-full">
      <header className="w-full bg-transparent fixed hidden sm:block p-1">
        <nav className="container mx-auto flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-3">
            <h2 className="text-[40px] font-extrabold text-[#2f1212] whitespace-nowrap">
              Zomato-app
            </h2>
            <Link
              className="text-sm mt-[15px] px-[20px] py-[2px] bg-red-600 hover:bg-red-700 text-white rounded-sm"
              to="/"
            >
              Home
            </Link>
          </div>
          {conditionalHandler()}
        </nav>
      </header>
    </div>
  );
}

Header.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

export default Header;
