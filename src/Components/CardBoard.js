import React from "react";
import "../styles.css"

import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import {Alert} from "react-bootstrap";

let boardState = {
    "repair":" Не работает",
    "busy":"Занята",
    "ready": "Свободна",
    "": "Ошибка"
};


function CardBoard({name, state="", path}) {
    return (
        <div className="rectangle" id={state}>
            <card onClick={() => {if (state === "ready") {window.location.pathname = path;}}}>
                    <boardName> {name} </boardName>
                    <DeveloperBoardIcon className={"Image"}/>
                    <div className="state"> {boardState[state]} </div>
                </card>
        </div>
    );
}

export default CardBoard;