import React from 'react';
import {SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLogo, SSidebar, SLinkLMainLabel} from "./styles.jsx";
import logo from "../../assets/globe.png";
// import {
//     FiHelpCircle,
//     HiOutlineClipboardList,
//     IoIosLogOut,
//     IoSettingsOutline,
//     MdOutlineAnalytics
// } from "react-icons/all.js";
import { CiCircleInfo } from "react-icons/ci";
import { SlSettings, SlGraph, SlLogout, SlExclamation, SlBookOpen } from "react-icons/sl";

const SideBar = () => {
    return (
        <SSidebar>
            <SLogo>
                <img src={logo} alt="logo"/>
            </SLogo>
            <SLinkLMainLabel>Analyze</SLinkLMainLabel>
            {AnalyzeArray.map(({icon, label, to}) => (
                <SLinkContainer key={label}>
                    <SLink to={to}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        <SLinkLabel>{label}</SLinkLabel>
                    </SLink>
                </SLinkContainer>
            ))}
            <SLinkLMainLabel>Manage</SLinkLMainLabel>
            {ManageArray.map(({icon, label, to}) => (
                <SLinkContainer key={label}>
                    <SLink to={to}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        <SLinkLabel>{label}</SLinkLabel>
                    </SLink>
                </SLinkContainer>
            ))}
        </SSidebar>
    );
};

const AnalyzeArray = [
    {
        //icon: <MdOutlineAnalytics/>,
        icon: <SlGraph/>,
        label: "Reports",
        to: "/reports"
    },
    {
        //icon: <HiOutlineClipboardList/>,
        icon: <SlBookOpen/>,
        label: "Dashboard",
        to: "/dashboard"
    },
]

const ManageArray = [
    {
        //icon: <FiHelpCircle/>,
        icon: <SlExclamation/>,
        label: "Help",
        to: "/help"
    },
    {
        //icon: <IoSettingsOutline/>,
        icon: <SlSettings/>,
        label: "Settings",
        to: "/settings"
    },
    {
        //icon: <IoIosLogOut/>,
        icon: <SlLogout/>,
        label: "Logout",
        to: "/login"
    },
]

export default SideBar;