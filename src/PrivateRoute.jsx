import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "./AuthProvider/UseAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth()
    const location = useLocation();
    // console.log(location);

    if(loading){
        return (
            <div className="flex flex-col h-screen justify-center items-center">
                <span className="loading loading-dots loading-lg"></span>
                <p>You're almost there! </p>
            </div>
        );
    }

    if(user){
        return children;
    }

    return (
        <Navigate state={location?.pathname || '/'} to='/login'  ></Navigate>
    );
};

export default PrivateRoute;