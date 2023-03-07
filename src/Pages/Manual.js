import {Button, Nav} from 'react-bootstrap';
import { Routes, Route, Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import SideBar from "../Components/SideBar/SideBar";
import "../SideBar.css"




function Manual() {
    return (
        <div className={"MainAuth"}>
            <Nav className="justify-content-left">
                <SideBar/>
            </Nav>
            <h1 className="title">Удаленная лаборатория МИЭМ</h1>
        </div>
    );
}

export default Manual;