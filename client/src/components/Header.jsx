import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
        <Link to="/">
          <h1 className="font-bold hover:text-red-600">Auth App</h1>
        </Link>
        <ul className="flex gap-6">
          <Link to="/home" className="hover:text-red-600 font-semibold">
            <li>Home</li>
          </Link>
          <Link to="/about" className="hover:text-red-600 font-semibold">
            <li>About</li>
          </Link>
          <Link to="/profile" className="hover:text-red-600 font-semibold">
            <li>Profile</li>
          </Link>
          <Link to="/sign-in" className="hover:text-red-600 font-semibold">
            <li>SignIn</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
