import { useState } from "react";
import { GiDarkSquad } from "react-icons/gi";
import { IoMdTimer } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const HomePageSpots = ({spot}) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    _id,
    country,
    spotName,
    totalVisitorsPerYear,
    photo,
    cost,
    season,
    days,
  } = spot;
  return (
    <div>
      <div
        className="card card-compact bg-base-100 border border-blue-300 h-[400px] md:mt-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <figure>
          <img
            className={` transform transition duration-500  ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            src={photo}
            alt="Cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{spotName}</h2>
          <p className="">
            <span className="font-bold">Preferable Season : </span>
            {season}
          </p>
          <p className="flex items-center ">
            <GiDarkSquad className="mr-2" />
            <span className=" font-bold mr-1">{totalVisitorsPerYear}</span>
            visitors per year
          </p>
          <div className="flex flex-row">
            <p className="flex items-center">
              <span className="font-bold mr-1"> Cost :</span>
              {cost} USD
              <MdAttachMoney className="text-lg" />
            </p>
          </div>
          <p className="flex items-center">
            {" "}
            <IoMdTimer className="mr-1 font-semibold" />
            {days}
          </p>

          <Link to={`/viewDetails/${_id}`} className="btn btn-primary mt-4">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageSpots;
