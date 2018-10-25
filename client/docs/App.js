import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  Footer,
  NavLink
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Footer1 from "../src/componentsMine/footer1/Footer1";

import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ""
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );
    return (
      <Router>
        <div className="flyout">
          <Navbar color="indigo" dark expand="md" fixed="top" scrolling>
            <NavbarBrand href="/">
              <img
// I took out the React image here...
                alt=""
                height="20"
              />{" "}
              [Subject] YouTube
            </NavbarBrand>
            <NavbarToggler
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
            <Collapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <NavbarNav right>
                <NavItem>
                  <NavLink
                    exact
                    to="/"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    Index
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/css"
                  >
                    testPage/URL upload
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/components"
                  >
                    Sign In
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/advanced"
                  >
                    Sign Up
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/navigation"
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/forms"
                  >
                    Subjects
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/tables"
                  >
                    Subjects/Tutorials
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/modals"
                  >
                    Tutorials
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/addons"
                  >
                    Addons
                  </NavLink>
                </NavItem>    */}
              </NavbarNav>
            </Collapse>
          </Navbar>
          {this.state.collapseID && overlay}
          <main style={{ marginTop: "4rem" }}>
            <Routes />
          </main>

          <Footer color="indigo">
            <p className="footer-copyright mb-0 py-3 text-center">
              Already a Member?{" "}
              <a href="/components"> Sign In </a>
            </p>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
