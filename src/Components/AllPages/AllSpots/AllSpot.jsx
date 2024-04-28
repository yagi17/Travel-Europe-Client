import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllSpotCard from "./AllSpotCard";
import Footer from "../../Shared/Footer";
import { Helmet } from "react-helmet";

const AllSpot = () => {
  const data = useLoaderData();
  const [countries, setCountries] = useState(6);

  const displayData = data.slice(0, countries);

  //   load more

  const handleDisplaySpot = () => {
    setCountries(countries + 6);
  };

  return (
    <div>
      <Helmet>
        <title>All Tourists Spot</title>
      </Helmet>
      <div className="mt-24 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 w-10/12 mx-auto gap-y-4 gap-6">
        {displayData.map((countri) => (
          <AllSpotCard
            key={countri._id}
            countri={countri}
            setCountries={setCountries}
          ></AllSpotCard>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="mx-auto btn btn-primary text-center"
          onClick={handleDisplaySpot}
        >
          View More
        </button>
      </div>
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AllSpot;
