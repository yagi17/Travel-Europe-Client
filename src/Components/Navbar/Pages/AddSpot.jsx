import Swal from "sweetalert2";

const AddSpot = () => {
  const handleCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const country = form.countryName.value;
    const spotName = form.touristsSpot.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.avgCost.value;
    const photo = form.photo.value;
    const details = form.details.value;
    const season = form.season.value;
    const days = form.days.value;

    const newSpot = {
      country,
      spotName,
      location,
      description,
      photo,
      cost,
      details,
      season,
      days,
    };

    // console.log(newSpot);

    fetch("http://localhost:5000/touristSpot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24 max-h-full ">
      <h2 className="text-5xl font-bold text-center mb-10">
        Add Tourist Spots
      </h2>
      <form onSubmit={handleCoffee}>
        {/* form name and nic name row */}
        <div className="md:flex mb-6 ">
          <label className="form-control md:w-1/2 mr-4">
            <div className="label">
              <span className="label-text text-xl font-semibold">
                Country Name
              </span>
            </div>
            <input
              type="text"
              name="countryName"
              placeholder="Country Name"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text text-xl font-semibold">
                Tourists Spot
              </span>
            </div>
            <input
              type="text"
              name="touristsSpot"
              placeholder="Tourists Spot"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* form discord and instagram row */}
        <div className="md:flex mb-6">
          <label className="form-control md:w-1/2 mr-4">
            <div className="label">
              <span className="label-text text-xl font-semibold">Location</span>
            </div>
            <input
              type="text"
              name="location"
              placeholder="location"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text text-xl font-semibold">
                Description
              </span>
            </div>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-6">
          <label className="form-control md:w-1/2 mr-4">
            <div className="label">
              <span className="label-text text-xl font-semibold">
                Avarage Cost
              </span>
            </div>
            <input
              type="text"
              name="avgCost"
              placeholder="Avarage Cost"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text text-xl font-semibold">Details</span>
            </div>
            <input
              type="text"
              name="details"
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
        <div className="md:flex gap-24 mb-6">
          <div className="flex flex-col-reverse">
            <div className="form-control">
              <label className="label cursor-pointer gap-4">
                <span className="label-text text-lg font-medium">Summer</span>
                <input
                  type="radio"
                  name="season"
                  value="Summer"
                  className="radio radio-info"
                  checked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-lg font-medium">Winter</span>
                <input
                  type="radio"
                  name="season"
                  value="Winter"
                  className="radio radio-info"
                  checked
                />
              </label>
            </div>
            <span className="text-xl font-semibold">Seasonality</span>
          </div>
          <div className="flex flex-col-reverse">
            <div className="form-control">
              <label className="label cursor-pointer  gap-4">
                <span className="label-text text-lg font-semibold">7 Days</span>
                <input
                  type="radio"
                  name="days"
                  value="7 Days"
                  className="radio radio-info"
                  checked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-lg font-semibold">
                  10 Days
                </span>
                <input
                  type="radio"
                  name="days"
                  value="10 Days"
                  className="radio radio-info"
                  checked
                />
              </label>
            </div>
            <span className="text-xl font-semibold">Travel Time</span>
          </div>
        </div>

        <input
          type="submit"
          value="Add Player"
          className="btn btn-block bg-slate-700 text-white hover:bg-slate-700 hover:text-base"
        />
      </form>
    </div>
  );
};

export default AddSpot;
