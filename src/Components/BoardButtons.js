import React, {useState} from "react";
import "../styles.css"

import Switch from '@mui/material/Switch';

import "../Components/BoardButtonStyle.css"
import socket from "../API/socket";
import {Button} from "@mui/material";
import {useParams} from "react-router-dom";


function BoardButton() {

    const [checked, setChecked] = useState([false, false, false, false, false, false, false, false, false, false]);

    const params = useParams();

    function changeCheckbox(n) {
        socket.emit("switch", n, !checked[n-1], params.numBoard)
        const newChecked = checked
        newChecked[n-1] = !newChecked[n-1]
        setChecked(newChecked);
    }

    function clickButton(n) {
        socket.emit("button", n, params.numBoard)
    }


    return (
        <div>
            {[...Array(10)].map((item, index) =>  <Switch className={'rotate'} sx={{'.MuiSwitch-thumb':{'border-radius':0}, '.MuiSwitch-track':{'border-radius':0}}}
                                                         checked={checked[index]}
                                                         onChange={e => changeCheckbox(index+1)}/>)}
            {[...Array(2)].map((item, index) => <Button variant="contained" onClick={e => clickButton(index+1)}>
                Кнопка {index+1}
            </Button>)}
        </div>
    );
}

export default BoardButton;