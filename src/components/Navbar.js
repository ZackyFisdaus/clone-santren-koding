import React, {Component} from 'react';
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
    Dropdown
} from 'reactstrap';

class NavBar extends Component{
    render(){
        return(
            <div>
                <Navbar>
                    <NavbarBrand>Santren koding</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink>Kajian Koding</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Mondok Koding</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Kitab Koding</NavLink>
                       </NavItem>
                    </Nav>
                </Navbar>

            </div>
        );
    }
}

export default NavBar;