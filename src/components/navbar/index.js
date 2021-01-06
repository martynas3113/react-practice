import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav,NavbarContainer,NavLogo,MobileIcons,NavMenu,NavItem,NavLinks, NavBtn, NavBtnLink } from './NavBarElements'


const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">LOGO</NavLogo>
                <MobileIcons onClick={toggle}>
                    <FaBars />
                </MobileIcons>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
