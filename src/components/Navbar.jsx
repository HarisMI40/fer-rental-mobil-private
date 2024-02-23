import React from "react";
import { TbLetterU } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import "../style/Navbarstyle.css";
const Navbar = () => {
  return (
    <nav className="nav">
            <ul>
                <li className="uicon"><TbLetterU /></li>
                <li>
                    Unis Badri
                </li>
                <IoIosArrowDown />
                 
            </ul>
        </nav>
  )
};

export default Navbar;
