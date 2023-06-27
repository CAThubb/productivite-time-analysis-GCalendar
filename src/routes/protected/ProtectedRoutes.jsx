import {React, useContext} from 'react';
import { Outlet, Navigate } from "react-router-dom";
import { MyContext } from '../../App';

const ProtectedRoutes = () => {
    const { session } = useContext(MyContext);
    //let auth = {session: true};
    return (
        session != 0 ? <Outlet /> : <Navigate to="/login" />
    );
};

export default ProtectedRoutes;