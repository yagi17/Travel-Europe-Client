import { NavLink } from "react-router-dom";

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
              ? "px-3 rounded-lg py-2 pending"
              : "px-3 rounded-lg py-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allspot">All Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/addspot">Add Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/mylist">My List</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login”,</NavLink>
      </li>
      <li>
        {/* <NavLink to="/">My List</NavLink> */}
      </li>
    </>
  );
  return (
    <div className="navbar glass">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
