import React from "react";
import { NavLink } from "react-router-dom"
import "./navBar.css";
import { RxHamburgerMenu } from "react-icons/rx"

function NavBar() {

  const NavLinkStyle = {
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: "500",
    textDecoration: "none"
  }

  return (
    <nav class="navbar navbar-expand-md bg-none">
      <div class="container-fluid">
        <NavLink  style={NavLinkStyle} class="navbar-brand " to="/">
          <img src="images/logo.svg" className="logo" alt="" />
          <h5 className="text-center text-white">SAVE BIRD</h5>
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <RxHamburgerMenu className="text-white" size="1.5em" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto gap-4">
            <NavLink  style={NavLinkStyle} style={NavLinkStyle} class="nav-link p-0" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink  style={NavLinkStyle} class="nav-link  p-0" to="/gallery">
              GALLERY
            </NavLink>
            <NavLink  style={NavLinkStyle} class="nav-link  p-0" to="/services">
              OUR CAUSES
            </NavLink>
            <NavLink  style={NavLinkStyle} class="nav-link  p-0" to="/team">
              TEAM
            </NavLink>
            <NavLink  style={NavLinkStyle} class="nav-link  p-0" to="/donation">
              DONATE
            </NavLink>
            <NavLink  style={NavLinkStyle} class="nav-link  p-0" to="/volunteer">
              VOLUNTEER
            </NavLink>
            <NavLink  style={NavLinkStyle} class="nav-link  p-0" to="/contact-us">
              CONTACT US
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

