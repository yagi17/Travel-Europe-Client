import { Link, } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/Authentication";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;
  // console.log(user);

  // const loadData = useLoaderData();
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    fetch(`https://travel-europe-server.vercel.app/touristSpot/myList/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyList(data);
      });
  }, [email]);
  // console.log(myList);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure ?",
      text: "The data will be delete permanently",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it !",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://travel-europe-server.vercel.app/touristSpot/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingItems = myList.filter(
                (listItem) => listItem._id !== id
              );
              // console.log(remainingItems._id);
              setMyList(remainingItems);
            }
          });
      }
    });
  };

  return (
    <div className="w-10/12 mx-auto my-10">
      <Helmet>
        <title>My List</title>
      </Helmet>
      <table className="table">
        <thead>
          <tr className="bg-base-200">
            <th>Item No.</th>
            <th>Country</th>
            <th>Spot Name</th>
            <th>Point Person</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myList.map((myItem, index) => (
            <tr className="hover" key={myItem._id}>
              <td>{index + 1}</td>
              <td>{myItem.country}</td>
              <td>{myItem.spotName}</td>
              <td>{user.displayName}</td>
              <td>
                <button>
                  <Link
                    to={`/updateDetails/${myItem._id}`}
                    // onClick={() => handleDelete}
                    className="btn hover:bg-transparent bg-transparent border-0 text-xl text-blue-500"
                  >
                    {" "}
                    <CiEdit />
                  </Link>
                </button>
                <button
                  onClick={() => handleDelete(myItem._id)}
                  className="btn hover:bg-transparent bg-transparent border-0 text-xl text-red-500"
                >
                  <RiDeleteBin5Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
