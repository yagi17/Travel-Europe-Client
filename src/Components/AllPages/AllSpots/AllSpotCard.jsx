import { useState } from "react";
import { MdLocationPin } from "react-icons/md";

const AllSpotCard = ({ countri, countries, setCountries }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    country,
    spotName,
    location,
    photo,
    description,
    cost,
    details,
    season,
    days,
  } = countri;
  return (
    <div>
      <div
        className="card card-compact bg-base-100 shadow-xl mt-4 md:mt-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <figure>
          <img
            className={` transform transition duration-500  ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            src="https://www.state.gov/wp-content/uploads/2023/07/shutterstock_667548661v2.jpg"
            alt="Cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Country: {country}</h2>
          <p>{description}</p>
          <p>Spot Name: {spotName}</p>
          <div className="flex">
            <p>Duration: {days}</p>
            <p>Average Cost: {cost}</p>
          </div>
          <p>Preferable Season: {season}</p>
          <p className="flex items-center"><MdLocationPin /> Location: {location}</p>
          {/* <p>Location: {location}</p> */}
        </div>
      </div>
    </div>
  );
};

export default AllSpotCard;
