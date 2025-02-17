import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/Authentication";
import { Helmet } from "react-helmet";

const AddSpot = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const handleDetails = (e) => {
    e.preventDefault();
    const form = e.target;
    const country = form.countryName.value;
    const spotName = form.touristsSpot.value;
    // const location = form.location.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const cost = form.avgCost.value;
    const photo = form.photo.value;
    // const details = form.details.value;
    const season = form.season.value;
    const days = form.days.value;
    const userName = user.displayName;
    const userEmail = user.email;

    const newSpot = {
      country,
      spotName,
      totalVisitorsPerYear,
      photo,
      cost,
      season,
      days,
      userName,
      userEmail,
    };

    // console.log(newSpot);

    fetch("https://travel-europe-server.vercel.app/touristSpot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Data added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] pt-5 max-h-full ">
      <Helmet>
        <title>Add Spot</title>
      </Helmet>
      {/* <h2 className="text-5xl font-bold text-center mb-10">
        Add Tourist Spots
      </h2> */}
      <form
        onSubmit={handleDetails}
        className=" w-10/12 md:w-10/12 lg:w-8/12 mx-auto "
      >
        {/* form name and nic name row */}
        <div className="md:flex md:mb-6 md:space-x-4">
          <label className="form-control md:w-1/2 ">
            <div className="label">
              <span className="label-text text-xl font-semibold">
                Country Name
              </span>
            </div>
            <select
              name="countryName"
              placeholder="Country Name"
              className="input input-bordered w-full"
            >
              <option value="France">France</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="England">England</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Switzerland">Switzerland</option>
            </select>
            <div className="absolute top-3/4 right-[16px] -translate-y-1/2 w-[30px] h-[30px] bg-no-repeat bg-center bg-[length:85%]">
              {" "}
            </div>
          </label>
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text text-xl font-semibold">
                Tourists Spot Name
              </span>
            </div>
            <input
              type="text"
              name="touristsSpot"
              placeholder="Tourists Spot Name"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* form discord and instagram row */}
        <div className="md:flex md:mb-6 md:space-x-4">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text text-xl font-semibold">
                Average Cost
              </span>
            </div>
            <input
              type="text"
              name="avgCost"
              placeholder="Average Cost"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text text-xl font-semibold">
                Total Visitors Per Year
              </span>
            </div>
            <input
              type="text"
              name="totalVisitorsPerYear"
              placeholder="Total Visitors Per Year"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* form Cost and details row */}
        <div className="md:flex md:mb-6 md:space-x-4">
          <label className="form-control md:w-1/2 -4">
            <div className="label">
              <span className="label-text text-xl font-semibold">
                Seasonality
              </span>
            </div>
            <input
              type="text"
              name="season"
              placeholder="Seasonality"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text text-xl font-semibold">
                Travel Time
              </span>
            </div>
            <input
              type="text"
              name="days"
              placeholder="Available Quantity"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* form category and details row */}
        <div className="mb-6">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-xl font-semibold">
                Photo Url
              </span>
            </div>
            <input
              type="text"
              name="photo"
              placeholder="Photo Url"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <input
          type="submit"
          value="Add New Location"
          className="btn btn-block mb-10 bg-slate-700 text-white hover:bg-slate-700 hover:text-base"
        />
      </form>
    </div>
  );
};

export default AddSpot;
