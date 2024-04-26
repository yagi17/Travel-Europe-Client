import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const link = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-none text-gray-800"
              : isPending
              ? "pending"
              : "pending"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allspot"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-none text-gray-800"
              : isPending
              ? "pending"
              : "pending"
          }
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addspot"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-none text-gray-800"
              : isPending
              ? "pending"
              : "pending"
          }
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mylist"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-none text-gray-800"
              : isPending
              ? "pending"
              : "pending"
          }
        >
          My List
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-transparent text-3xl font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52"
          >
            {link}
          </ul>
        </div>
        <Link to='/' className="text-xl flex items-center space-x-2">
            <img className="size-8" src="/logo.png" alt="" />
            <p>Travel Europe</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end mr-6">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-none text-gray-800"
              : isPending
              ? "pending"
              : "pending"
          }
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
