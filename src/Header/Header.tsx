import React, { Component } from 'react';
import { Navbar as BSNavBar, Nav, NavItem } from 'react-bootstrap';
import * as bootstrapUtils from "react-bootstrap/lib/utils/bootstrapUtils";
import { NavLink } from 'react-router-dom';
// This helps link 'react-router-dom' and 'react-bootstrap' together to make links work
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from './Header.module.css';
import logo from '../images/logo.png';

export type HeaderProps = {
  isCollapsed: boolean;
}

// This remove the default styling from 'react-bootstrap' for the Navbar
bootstrapUtils.addStyle(BSNavBar, 'none');

class Header extends Component<HeaderProps> {

  render() {
    const collapsedStyling = this.props.isCollapsed ? styles.topNavCollapse : null;

    return (
      <BSNavBar collapseOnSelect fixedTop bsStyle="none" className={`${styles.customNav} ${collapsedStyling}`}>
        <BSNavBar.Header>
          <BSNavBar.Brand>
            <NavLink to="/">
              <img src={logo} alt="logo" className={styles.logo} />
            </NavLink>
          </BSNavBar.Brand>
          <BSNavBar.Toggle>
            <FontAwesomeIcon icon={faBars}/>
          </BSNavBar.Toggle>
        </BSNavBar.Header>
        <BSNavBar.Collapse>
          <Nav pullRight className={styles.nav}>
            <LinkContainer to="/about">
              <NavItem>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/supporters">
              <NavItem>Supporters</NavItem>
            </LinkContainer>
            <LinkContainer to="/gallery">
              <NavItem>Gallery</NavItem>
            </LinkContainer>
            <LinkContainer to="/calendar">
              <NavItem>Calendar</NavItem>
            </LinkContainer>
            <LinkContainer to="/join-us">
              <NavItem>Join Us</NavItem>
            </LinkContainer>
          </Nav>
        </BSNavBar.Collapse>
      </BSNavBar>
    );
  }
}

export default Header;
