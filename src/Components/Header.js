import React, { Component } from "react";
import {Navbar, Nav, Container, Button} from "react-bootstrap";
import logo from '../Images/hse_logo.png'
import "../styles.css"

import {Route, Routes} from "react-router-dom";
import MainAuth from "../Pages/MainAuth";


export default class Header extends Component {
    render() {
        return (
            <Navbar className={"mainHeader"}>
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/home" className={"darkButtonWithoutBg"}>Главная</Nav.Link>
                            <Nav.Link to="/contact" className={"darkButtonWithoutBg"}>Контакты</Nav.Link>
                        </Nav>
                        <Nav className={"me-2"}>
                            <Button href="/boards" className={"lightButton"}>Авторизация</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
