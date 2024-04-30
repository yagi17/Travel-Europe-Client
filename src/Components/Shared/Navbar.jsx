import { useContext, useEffect, useState } from "react";
import { IoIosLogOut, IoIosLogIn } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Authentication";
import changeTheme from "./LocalStorage";

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "dark";
  });

  const handleToggleTheme = () => {
    changeTheme();
    setIsDark(!isDark);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDark(savedTheme === "dark");
  }, []);

  const { user, logout } = useContext(AuthContext);
  // console.log(user);
  const link = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-transparent hover:bg-transparent border-b-4 border-black"
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
              ? "bg-transparent hover:bg-transparent border-b-4 border-black"
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
              ? "bg-transparent hover:bg-transparent border-b-4 border-black"
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
              ? "bg-transparent hover:bg-transparent border-b-4 border-black"
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
    <div className="navbar text-2xl font-semibold py-0 md:px-6 ">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-300 rounded-box w-52"
          >
            {link}
          </ul>
        </div>
        <Link to="/" className="text-xl flex items-center space-x-2">
          <img className="size-7" src="/logo.png" alt="" />
          <p className="text-lg">Travel Europe</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end group relative">
        <div className="mr-4">
          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handleToggleTheme}
              checked={isDark}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
        {user ? (
          <div className="flex space-x-2">
            <div
              className="dropdown dropdown-end z-20 tooltip tooltip-bottom"
              data-tip={user?.displayName || "user name"}
            >
              <div className="relative rounded-full avatar w-8 h-8">
                <img
                  className="w-full rounded-full h-full "
                  alt="user_profile"
                  src={
                    user?.photoURL ||
                    "https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
                  }
                />
              </div>
            </div>
            <div>
              <Link
                to="/login"
                onClick={() => logout()}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-transparent text-xl "
                    : isPending
                    ? "pending"
                    : "pending"
                }
              >
                <span className="flex text-lg items-center gap-1">
                  Log Out <IoIosLogOut />
                </span>
              </Link>
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-transparent text-lg "
                : isPending
                ? "pending"
                : "pending"
            }
          >
            <span className="flex text-lg items-center gap-1">
              {" "}
              Login <IoIosLogIn />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
