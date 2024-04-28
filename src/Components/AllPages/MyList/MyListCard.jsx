import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/Authentication";

const MyListCard = ({ myItem, myList, setMyList }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const {
    country,
    spotName,
    totalVisitorsPerYear,
    photo,
    cost,
    season,
    days,
    userName,
    userEmail,
  } = myItem;
  console.log(myItem);
  return <div>items i added {country}</div>;
};

export default MyListCard;