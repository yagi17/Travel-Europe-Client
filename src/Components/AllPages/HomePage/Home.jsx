import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import PropTypes from "prop-types";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCreative } from "swiper/modules";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import Footer from "../../Shared/Footer";
import { Helmet } from "react-helmet";
import ExtraSection from "./ExtraSection";
import HomePageSpots from "./HomePageSpots";

const Home = () => {
  const data = useLoaderData().slice(0, 6);

  const [countries, setCountries] = useState(data);
  const [spot, setSpot] = useState([]);
  const someSpot = spot?.slice(0, 6);
  console.log(someSpot);
  useEffect(() => {
    fetch("https://travel-europe-server.vercel.app/touristSpot")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSpot(data);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Travel Europe</title>
      </Helmet>
      <div className="h-[600px] bg-[url(https://i.ibb.co/zx2tcDF/image.png)] bg-cover z-10 bg-no-repeat ">
        {/* banner */}
        <div className="hero-overlay bg-opacity-80 h-full items-center">
          <div className="lg:grid grid-cols-4 md:py-24 items-center lg:px-20 gap-10">
            {/* intro text */}
            <div className="col-span-2 flex flex-col text-center justify-center text-white lg:text-3xl">
              <h1 className="text-5xl font-bold ">
                A partner when you need it
              </h1>
              <div className="App">
                <h1 className="pt-5 mx-auto font-normal">
                  Find your next Destination{" "}
                  <span className="text-green-500 font-bold">
                    <Typewriter
                      words={[
                        "France",
                        "Italy",
                        "Spain",
                        "England",
                        "Netherlands",
                        "Switzerland",
                      ]}
                      loop={10}
                      cursor
                      cursorStyle="_"
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
              </div>
            </div>
            {/* slider */}
            <div className="col-span-2 max-h-[400px] bg-transparent rounded-xl mt-8 lg:mt-0">
              <Swiper
                effect={"creative"}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                creativeEffect={{
                  prev: {
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                modules={[EffectCreative, Autoplay]}
                className="mySwiper ml-20 mx-auto "
              >
                <SwiperSlide>
                  <img
                    className="h-[400px] lg:w-fit rounded-xl"
                    src="https://www.state.gov/wp-content/uploads/2023/07/shutterstock_667548661v2.jpg"
                    alt="France"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-[400px] lg:w-fit rounded-xl"
                    src="https://www.state.gov/wp-content/uploads/2023/07/shutterstock_433413835v2.jpg"
                    alt="Italy"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-[400px] lg:w-fit rounded-xl"
                    src="https://www.civitatis.com/blog/wp-content/uploads/2023/07/shutterstock_557625622-scaled.jpg"
                    alt="Spain"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-[400px] lg:w-fit rounded-xl"
                    src="https://www.tripsavvy.com/thmb/hitaOIDM_pd-bQrp9eAuE1N4NyE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-174726708-9125b51de4e14e759e688c019a0f52ca.jpg"
                    alt="England"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-[400px] lg:w-fit rounded-xl"
                    src="https://s30876.pcdn.co/wp-content/uploads/Netherlands3-e1634207438966.jpg.optimal.jpg"
                    alt="Netherlands"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="h-[400px] lg:w-fit rounded-xl"
                    src="https://cdn.britannica.com/65/162465-050-9CDA9BC9/Alps-Switzerland.jpg"
                    alt="Switzerland"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-center text-4xl text-green-500 font-bold">
          Choose Your Next Destination
        </h2>
        <h2 className="text-center mt-2">
          Know More About Europe's Best Countries To Visit.
        </h2>
        <div className="mt-10 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 w-5/6 mx-auto gap-y-4 gap-6">
          {countries.map((countri) => (
            <CountriesCard
              key={countri._id}
              countri={countri}
              setCountries={setCountries}
            ></CountriesCard>
          ))}
        </div>
      </div>
      <div className="w-10/12 mx-auto gap-4">
        <h2 className="text-center text-3xl font-semibold divider my-10">
          Europe's Famous Tourist Spots
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 col-span-1 gap-4">
          {someSpot.map((spot) => (
            <HomePageSpots key={spot._id} spot={spot}></HomePageSpots>
          ))}
        </div>
        <p className="text-center mt-4">
          {" "}
          <Link
            to={"/allspot"}
            className="link hover:text-blue-400"
          >
            See More
          </Link>
        </p>
      </div>
      <ExtraSection></ExtraSection>
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

CountriesCard.propTypes = {
  countri: PropTypes.object.isRequired,
  setCountries: PropTypes.func.isRequired,
};

HomePageSpots.propTypes = {
  spot: PropTypes.object.isRequired,
};

export default Home;
