import {Button, ListGroup} from 'react-bootstrap';
import { Routes, Route, Link} from 'react-router-dom';

import "../../SideBar.css"
import hse_logo from "../../Images/hse_logo.png";
import miem_logo from "../../Images/miem_logo.png";
import LogoutIcon from '@mui/icons-material/Logout';
import React from "react";

import { SideBarData } from "./SideBarData";



function SideBar() {
    return (
        <div className="SideBar">
            <a href="/home">
            <img
                src={hse_logo}
                className="logo"
                alt="Logo"
            />
            </a>
            <ul className="SideBarList">
                {
                    SideBarData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className="row"
                                id = {window.location.pathname == val.link ? "active" : ""}
                                onClick={() => {
                                    window.location.pathname = val.link;
                                }}
                                >
                                <div>{val.icon} {val.title} </div>
                            </li>
                        );
                    })
                }
            </ul>
            <Button className="logOut"> {<LogoutIcon />} {"Выйти"}</Button>
        </div>
    );
}

export default SideBar;