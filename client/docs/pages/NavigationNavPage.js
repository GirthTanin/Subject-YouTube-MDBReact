import React from "react";
import { Container, Row, Col, Jumbotron, Fa, NavLink, button } from "mdbreact";

class ComponentsPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="8" className="mt-3 mx-auto"><br />
            <Jumbotron>
              <h1>
                <Fa icon="child" className="grey-text mr-2" />
                Generic Profile
              </h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text">Tell Us Who You Are! </h6>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/navbar"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Name:
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/breadcrumb"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Joined Date: 10/25/2018
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/footer"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Rank: n00b
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink><NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/navbar"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Interests: Critical Role, React, Java Script, WoW
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
              </ul>
              <div className="text-center mt-4">
                <button className="btn btn-unique" type="submit">
                  Edit
                </button>
              </div>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col md="8" className="mt-3 mx-auto">
            <Jumbotron>
              <h1>
                <Fa icon="youtube" className="grey-text mr-2" />
                Database Interactions:
              </h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text">A record of the journey: </h6>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/navbar"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    History:
                    <Fa icon="history" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/breadcrumb"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Saved Tutorials:
                    <Fa icon="file-video-o" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/footer"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Contributions:
                    <Fa icon="thumbs-o-up" />
                  </h5>
                </NavLink><NavLink
                  className="list-group-item list-group-item-action"
                  to="/navigation/navbar"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Videos Curated:
                    <Fa icon="thumbs-o-down" />
                  </h5>
                </NavLink>
              </ul>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ComponentsPage;
