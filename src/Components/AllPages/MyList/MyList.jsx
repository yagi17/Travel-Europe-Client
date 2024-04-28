import { useLoaderData } from "react-router-dom";
import MyListCard from "./MyListCard";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/Authentication";

const MyList = () => {
  const { user } = useContext(AuthContext);
  console.log(user.displayName);

  const loadData = useLoaderData();

  const [myList, setMyList] = useState(loadData)

  return (
    <div>
      <Helmet>
        <title>My List</title>
      </Helmet>
      {
        myList.map(myItem =>{
          <MyListCard
          key={myList._id}
          myItem={myItem}
          myList={myList}
          setMyList={setMyList}
          ></MyListCard>
        })
      }
    </div>
  );
};

export default MyList;