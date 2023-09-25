import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const PrivetRouts = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation()
    //  console.log(location);
    if (loding) {
        return <center><Spinner animation="grow" variant="primary" /></center>

    }
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};


export default PrivetRouts;