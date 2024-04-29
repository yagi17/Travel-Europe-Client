import { useState } from "react";
import { GiDarkSquad } from "react-icons/gi";
import { IoMdTimer } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

const ShowCountryCard = ({ singleCountry }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const { name } = useParams();
  const capitalizedName = capitalizeFirstLetter(name);
//   console.log(capitalizedName);

  //   const { name } = useParams();
  //   console.log(name);
  const [isHovered, setIsHovered] = useState(false);
  const { country, spotName, totalVisitorsPerYear, photo, cost, season, days, _id } = singleCountry;

//   console.log(singleCountry);

  if (capitalizedName !== country) {
    return null;
  }

  return (
    <div
      className="card card-compact bg-base-100 shadow-xl mt-4 h-[400px] md:mt-0"
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
        <div className="flex ">
          <p className="flex items-center">
            {" "}
            <IoMdTimer className="mr-1 font-semibold" /> {days}
          </p>
          <p className="flex items-center">
            <span className="font-bold mr-1"> Cost :</span>
            {cost} USD
            <MdAttachMoney className="text-lg" />
          </p>
        </div>

        <button className="btn btn-primary mt-4"><Link to={`/viewDetails/${_id}`}>View Details</Link></button>
      </div>
    </div>
  );
};

export default ShowCountryCard;
