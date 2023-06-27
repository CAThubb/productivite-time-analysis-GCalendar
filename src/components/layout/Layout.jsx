import React from 'react';
import {SLayout, SMain} from "./styles.jsx";
import SideBar from "../sidebar/SideBar.jsx";

const Layout = ({children}) => {
    return (
        <SLayout>
            <SideBar/>
            <SMain>{children}</SMain>
        </SLayout>
    );
};

export default Layout;