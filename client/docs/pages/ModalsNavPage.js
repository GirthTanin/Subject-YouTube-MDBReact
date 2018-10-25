import React from "react";
import { Container, Row, Col, Jumbotron, Fa, NavLink, Iframe } from "mdbreact";

class ComponentsPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="12" className="mt-3 mx-auto">
            <Jumbotron>
              <h1>
                <Fa icon="film" className="grey-text mr-2" />
                Tutorial 
              </h1>
              <Iframe height={500} src="https://www.youtube.com/embed/7DG3kCDx53c" />
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text">Tutorial List</h6>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/tables"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Next Video
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/forms"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Previous Video
                    <Fa icon="angle-right" />
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
