import { Button } from 'react-bootstrap';
import { Routes, Route, Link} from 'react-router-dom';

import MainAuth from './MainAuth.js'

import 'bootstrap/dist/css/bootstrap.min.css';


import Header from "../Components/Header";




function NotAuth() {
    return (
        <Header/>
    );
}

export default NotAuth;