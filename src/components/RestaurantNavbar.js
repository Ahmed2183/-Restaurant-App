import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; //For Routing
import { Nav, Navbar } from "react-bootstrap"; //using bootstrap
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //For FontAwsomeIcon
import {
  faList,
  faHome,
  faPlus,
  faMagnifyingGlass,
  faInfo,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

class RestaurantNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <div className="textcolor">MY RESTAURANT</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                <FontAwesomeIcon icon={faHome} color="#3d85c6" />
                &nbsp;Home
              </Nav.Link>
              <Nav.Link href="/list">
                <FontAwesomeIcon icon={faList} color="#3d85c6" />
                &nbsp;List
              </Nav.Link>
              <Nav.Link href="/create">
                <FontAwesomeIcon icon={faPlus} color="#3d85c6" />
                &nbsp;Create
              </Nav.Link>
              <Nav.Link href="/search">
                <FontAwesomeIcon icon={faMagnifyingGlass} color="#3d85c6" />
                &nbsp;Search
              </Nav.Link>
              {localStorage.getItem("login") ? (
                <Nav.Link href="/logout">
                  <FontAwesomeIcon icon={faUser} color="#3d85c6" />
                  &nbsp;Logout
                </Nav.Link>
              ) : (
                <Nav.Link href="/login">
                  <FontAwesomeIcon icon={faUser} color="#3d85c6" />
                  &nbsp;Login
                </Nav.Link>
              )}
              {/* <Nav.Link href="/update">Update</Nav.Link>
              <Nav.Link href="/details"><FontAwesomeIcon icon={faInfo} color="#3d85c6"/>&nbsp;Details</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default RestaurantNavbar;
