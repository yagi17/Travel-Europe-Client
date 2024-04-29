import { useEffect, useState } from "react";
import { GiDarkSquad } from "react-icons/gi";
import { IoMdTimer } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { useParams } from "react-router-dom";

const ShowCountryDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [showDetails, setShowDetails] = useState();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch(`https://travel-europe-server.vercel.app/touristSpot`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const matchedData = data.find((item) => item._id === id);
        setShowDetails(matchedData);
      });
  }, [id]);

  if (!showDetails) {
    return <div className="text-center"> Loading... </div>;
  }

  // showDetails.

  return (
    <div>
      <div>
        <div
          className="card card lg:card-side bg-base-100 w-10/12 md:w-8/12 mx-auto shadow-xl mt-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <figure>
            <img
              className={` transform transition duration-500 w-[500px] ${
                isHovered ? "scale-110" : "scale-100"
              }`}
              src={showDetails.photo}
              alt="Cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{showDetails.spotName}</h2>
            <p className="">
              <span className="font-bold">Preferable Season : </span>
              {showDetails.season}
            </p>
            <p className="flex items-center ">
              <GiDarkSquad className="mr-2" />
              <span className=" font-bold mr-1">
                {showDetails.totalVisitorsPerYear}
              </span>
              visitors per year
            </p>
            <div className="md:flex">
              <p className="flex items-center">
                {" "}
                <IoMdTimer className="mr-1 font-semibold" /> {showDetails.days}
              </p>
              <p className="flex items-center">
                <span className="font-bold mr-1"> Cost :</span>
                {showDetails.cost} USD
                <MdAttachMoney className="text-lg" />
              </p>
            </div>
            <button className="btn btn-primary mt-6">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCountryDetails;
