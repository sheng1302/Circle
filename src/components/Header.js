import React, { Component } from 'react';
import logo from '../sources/circle_logo.png';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa} from 'mdbreact';
import {Link} from 'react-router-dom';
import AuthChecker from './AuthChecker';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            loginStatus: 'Login', // either login or logout
            authRoute: '/login', // either jump to login or logout route.
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Navbar color='green' dark expand="md" scrolling>
                <NavbarBrand href="/">
                    <img src={logo} height="50" alt="logo"/>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                        <NavItem>
                            <NavLink to="/about">About Circle</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/donate">Donate</NavLink> {/*for user to donate only*/}
                        </NavItem>
                        <NavItem>
                            <NavLink to="/non-profit">Non-Profit Portal</NavLink>
                        </NavItem>

                    </NavbarNav>
                    <NavbarNav right>
                        <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>
                                    <Fa icon="user">

                                    {
                                        (AuthChecker.isAuthenticated) ? 'Hi, ' : 'Login'
                                    }
                                    </Fa>

                                </DropdownToggle>
                                <DropdownMenu className="dropdown-default" right>
                                    <DropdownItem><Link to={
                                        (AuthChecker.isAuthenticated) ? '/logout' : '/Login'
                                    }>{
                                        (AuthChecker.isAuthenticated) ? 'Logout ' : 'Login'
                                    }</Link></DropdownItem>
                                    <DropdownItem>Reserved Items</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;
