import {Button, Nav} from 'react-bootstrap';
import { Routes, Route, Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import Header from "../Components/Header";
import SideBar from "../Components/SideBar/SideBar";
import "../SideBar.css"
import CardBoard from "../Components/CardBoard";




function MainAuth() {
    return (
        <div className={"MainAuth"}>
            <Nav className="justify-content-left">
                <SideBar/>
            </Nav>
            <div className="title">Удаленная лаборатория САПР</div>
            <div className="Boards">
                <CardBoard name={"Плата №1 DE10-Lite"} state="busy" path="boards/board/1"/>
                <CardBoard name={"Плата №2 DE10-Lite"} state="repair" path="boards/board/2"/>
                <CardBoard name={"Плата №3 DE10-Lite"} state="ready" path="boards/board/3"/>
                <CardBoard name={"Плата №4 DE10-Lite"} />
            </div>
        </div>
    );
}

export default MainAuth;