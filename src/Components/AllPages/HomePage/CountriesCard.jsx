import { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CountriesCard = ({ countri}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, image, description, flag } = countri;
  return (
    <div>
      <div
        className="card card-compact rounded-lg bg-gray-300 text-black h-[400px] mt-4 md:mt-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <figure>
          <img
            className={` transform transition duration-500 w-full h-[200px]  ${
              isHovered ? "scale-105" : "scale-100"
            }`}
            src={image}
            alt="Cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Country: {name}
            <div className="badge p-0 "><img className="w-6 rounded-full h-4" src={flag} alt="" /></div>
          </h2>
          <p className="text-xs font-medium">{description}</p>
          <button className={`btn w-full mt-4 btn-primary transform transition duration-500 ${
              isHovered ? "text-lg" : "text-base"
            }`}><Link to={`/showLocation/${name}`}>View Spots</Link></button>
        </div>
      </div>
    </div>
  );
};

CountriesCard.propTypes = {
  countri: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
  }).isRequired,
  countries: PropTypes.array.isRequired,
  setCountries: PropTypes.func.isRequired,
};

export default CountriesCard;