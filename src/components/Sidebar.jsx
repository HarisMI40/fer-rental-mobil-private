import React, { useState } from "react";
import "../style/Sidebarstyle.css";
import { FaBars } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { FiHome } from "react-icons/fi";



import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";



const Sidebar = ({children}) => {
const[isOpen ,setIsOpen] = useState (false)
const toggle =() => setIsOpen (!isOpen)
const menuItem=[
    {
        path:"/",
        name:"Dashboard",
        icon:<FiHome />

    },
    {
        path:"/cars",
        name:"Cars",
        icon:<FiTruck />

    }
]

    return (
    <div className="container">
        

        <div style={{width: isOpen ? "150px" : "50px"}}className="sidebar">
            <div className="top_section">
                <header style={{display: isOpen ? "block" : "none"}} className="logo">Logo</header>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                    <FaBars onClick={toggle} />
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
            </div>
        <main>{children}</main>
        <Navbar />
        </div>
    )
};

export default Sidebar;
