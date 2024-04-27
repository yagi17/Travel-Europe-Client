import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const myList = useLoaderData();
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
  } = myList;
  return (
    <div>
      <h3>my list{myList.length}</h3>
    </div>
  );
};

export default MyList;
