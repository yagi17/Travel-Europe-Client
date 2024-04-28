import { useState } from "react";

const HomePageCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="grid grid-cols-3 lg:w-9/12 mx-auto gap-6 mt-14">
      <div
        className="card w-full shadow-xl"
        //    className="card w-full bg-base-100 shadow-xl image-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <figure>
          <img
            className={` transform transition duration-500  ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            src="https://www.ciee.org/sites/default/files/images/2023-04/paris-tower-river-skyline_0.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Spain
            <div className="badge ">
              <img
                className="w-6 h-4"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
                alt=""
              />
            </div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div
        className="card w-full shadow-xl"
        //    className="card w-full bg-base-100 shadow-xl image-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <figure>
          <img
            className={` transform transition duration-500  ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            src="https://images.ctfassets.net/qr8kennq1pom/79lCnuHLZh8xfxvrTRaWKT/a304ef1d35a64a75bd539f3bcab77562/_Barcelona__the_best_city_in_Spain_to_live_in.png?fm=jpg&fl=progressive&q=70"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Spain
            <div className="badge ">
              <img
                className="w-6 h-4"
                src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
                alt=""
              />
            </div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div
        className="card w-full shadow-xl"
        //    className="card w-full bg-base-100 shadow-xl image-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <figure>
          <img
            className={` transform transition duration-500  ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            src="https://images.ctfassets.net/qr8kennq1pom/79lCnuHLZh8xfxvrTRaWKT/a304ef1d35a64a75bd539f3bcab77562/_Barcelona__the_best_city_in_Spain_to_live_in.png?fm=jpg&fl=progressive&q=70"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Spain
            <div className="badge ">
              <img
                className="w-6 h-4"
                src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
                alt=""
              />
            </div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div
        className="card w-full shadow-xl"
        //    className="card w-full bg-base-100 shadow-xl image-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <figure>
          <img
            className={` transform transition duration-500  ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            src="https://images.ctfassets.net/qr8kennq1pom/79lCnuHLZh8xfxvrTRaWKT/a304ef1d35a64a75bd539f3bcab77562/_Barcelona__the_best_city_in_Spain_to_live_in.png?fm=jpg&fl=progressive&q=70"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Spain
            <div className="badge ">
              <img
                className="w-6 h-4"
                src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
                alt=""
              />
            </div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div
        className="card w-full shadow-xl"
        //    className="card w-full bg-base-100 shadow-xl image-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <figure>
          <img
            className={` transform transition duration-500  ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            src="https://images.ctfassets.net/qr8kennq1pom/79lCnuHLZh8xfxvrTRaWKT/a304ef1d35a64a75bd539f3bcab77562/_Barcelona__the_best_city_in_Spain_to_live_in.png?fm=jpg&fl=progressive&q=70"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Spain
            <div className="badge ">
              <img
                className="w-6 h-4"
                src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
                alt=""
              />
            </div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div
        className="card w-full shadow-xl"
        //    className="card w-full bg-base-100 shadow-xl image-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <figure>
          <img
            className={` transform transition duration-500  ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            src="https://images.ctfassets.net/qr8kennq1pom/79lCnuHLZh8xfxvrTRaWKT/a304ef1d35a64a75bd539f3bcab77562/_Barcelona__the_best_city_in_Spain_to_live_in.png?fm=jpg&fl=progressive&q=70"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Spain
            <div className="badge ">
              <img
                className="w-6 h-4"
                src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
                alt=""
              />
            </div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageCard;
