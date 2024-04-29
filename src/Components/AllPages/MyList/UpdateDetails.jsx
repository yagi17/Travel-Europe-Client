import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  //   const location = useLocation();
  const naviGate = "/myList";

  const handleDetails = (e) => {
    e.preventDefault();
    const form = e.target;
    const country = form.countryName.value;
    const spotName = form.touristsSpot.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const cost = form.avgCost.value;
    const photo = form.photo.value;
    const season = form.season.value;
    const days = form.days.value;

    const updateDetails = {
      country,
      spotName,
      totalVisitorsPerYear,
      photo,
      cost,
      season,
      days,
    };
    // console.log(updateDetails);

    // send data to the server
    fetch(`https://travel-europe-server.vercel.app/touristSpot/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Data updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate(naviGate);
            }
          });
        }
      });
  };
  return (
    <div>
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
          value="Update spot details"
          className="btn btn-block mb-10 bg-slate-700 text-white hover:bg-slate-700 hover:text-base"
        />
      </form>
    </div>
  );
};

export default UpdateDetails;
