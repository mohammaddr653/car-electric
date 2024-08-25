import { Navigate, Outlet } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { useContext } from "react";
import globalContext from "./context/global-context";

const PrivateRoutes= ()=>{
    let globalCon=useContext(globalContext)
    return(
        globalCon.loginCheck?<Outlet/>:<Navigate to={"/"} /> 
    );
}
export default PrivateRoutes;