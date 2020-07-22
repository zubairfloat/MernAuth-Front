import React, { useState } from 'react';
import {
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container,
    Button
} from 'reactstrap';
import logo from '../../Images/Navbar/logo.png';
import './style.css';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="black" className="navbarMain" dark expand="md">
            <Container fluid='md' style={{ textAlign: "center" }}>
                <NavbarBrand className="navbarBrand">
                    <img className="navbarLogo" src={logo}></img>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="navbarLinks" href="/"> Trending</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navbarLinks" href="business"> Business</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navbarLinks" href=""> About us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navbarLogin" href="/signup"> Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;


