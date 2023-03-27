import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import logo from "../../../assets//logo.svg";

function NavBar() {
  return (
    <Navbar data-aos="fade-down" className="NavBar " variant="dark" expand="lg">
      <Container>
        <Link to="/">
          <img
            src={logo}
            width="70"
            height="80"
            id="logo"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
