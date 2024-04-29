import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowCountryCard from "./ShowCountryCard";

const ShowCountrySpots = () => {
    const { name } = useParams();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const capitalizedName = capitalizeFirstLetter(name);
//   console.log(capitalizedName);
  
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://travel-europe-server.vercel.app/touristSpot")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-center text-3xl">
        See all tourist spots locate in {capitalizedName}
      </h2>
      <div className="grid grid-cols-3 gap-4 w-10/12 mx-auto mt-10">
        {country.map((singleCountry, idx) => (
          <ShowCountryCard
            key={idx}
            singleCountry={singleCountry}
            name={name}
          ></ShowCountryCard>
        ))}
      </div>
    </div>
  );
};

export default ShowCountrySpots;
