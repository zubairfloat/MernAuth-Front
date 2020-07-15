import React, { useState } from 'react';
import {
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
    NavbarText
} from 'reactstrap';
import './style.css';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="black" className="navbarMain" dark expand="md">
                <NavbarBrand className="navbarBrand" href="/">Float Business</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="navbarLinks" href=""> Trending</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navbarLinks" href=""> Business</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navbarLinks" href="/">Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;