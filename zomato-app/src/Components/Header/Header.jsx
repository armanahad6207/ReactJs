import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header className=" fixed w-full flex justify-between items-center bg-fuchsia-400 px-3 py-4 bg-transparent">
        <nav className="flex justify-between w-full">
          <div className="w-1/5 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-[#C84444]">Zomato-app</h2>
            <Link className="text-sm border border-black px-2 py-1" to="/">
              Home
            </Link>
          </div>

          <div className="space-x-5">
            <Link to="#">Login</Link>
            <Link to="#">SignUP</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
