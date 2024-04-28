import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">
      <div className="text-6xl font-bold text-orange-500">404</div>
      <div className="text-2xl font-bold mb-4">PAGE NOT FOUND</div>
      <p className="text-gray-600 text-center">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <button className="btn mt-4 bg-opacity-70 font-bold border-0 btn-neutral"><Link
      to='/'>
        HOME PAGE
      </Link></button>

    </div>
  );
};

export default Error;