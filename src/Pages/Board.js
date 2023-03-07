import { Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "../Components/SideBar/SideBar";
import "../Board.css"
import socket  from "../API/socket";
import {createRef, useEffect, useState} from "react";
import BoardButton from "../Components/BoardButtons";
import {useParams} from "react-router-dom";



function Board() {
    const [image, setImage] = useState(null);

    const params = useParams();


    useEffect(() => {
        socket.on('image', (image) => {
            setImage(image)
        })
    })



    return (
        <div>
            <div className={"titleBoardName"}>Активная сессия 17 марта 13:00-14:00 Плата №{params.numBoard}</div>
            <img className={"video"} src={"data:image/jpeg;base64,"+image} alt="Board"/>
            <div className={"buttons"}>
                <BoardButton/>
            </div>
        </div>
    );
}

export default Board;