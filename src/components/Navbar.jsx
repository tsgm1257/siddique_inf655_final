import { Link, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="navbar bg-base-100 shadow px-4 mb-8">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
          🎟️ Event Booker
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex flex-1 ">
        <ul className="menu menu-horizontal px-1 gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          {user && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
        </ul>
      </div>

      {/* Right: Login / Avatar */}
      <div className="flex-none">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-circle avatar btn-ghost">
              <div className="w-8 rounded-full">
                <FaUserAlt className="text-xl" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-sm btn-outline">
              Login
            </Link>
            <Link to="/signup" className="btn btn-sm btn-primary">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
