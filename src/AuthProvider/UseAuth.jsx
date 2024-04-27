import { useContext } from "react";
import { AuthContext } from "./Authentication";

const UseAuth = () => {
    const all = useContext(AuthContext)
    return all
};

export default UseAuth;