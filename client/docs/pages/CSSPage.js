import React from "react";
// import { Container, Row, Col, Jumbotron, Fa, NavLink } from "mdbreact";
import { Container, Iframe, Button } from "mdbreact";
import DocsLink from "./DocsLink";

class CSSPage extends React.Component {
  render() {
    return (
      // <Container>
      //   <Row>
      <Container className="text-center">

        <DocsLink
          title="Insert Embedded URL "
          href="/css"
        />
        <Iframe height={500} src="https://www.youtube.com/embed/q81suQISQok" />


        <form>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput"></label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="formGroupExampleInput"
                  placeholder="Title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2"></label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="formGroupExampleInput2"
                  placeholder="Tutor"
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput"></label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="formGroupExampleInput"
                  placeholder="This Tutorial part of a series: true/false"
                />
              </div><div className="form-group">
                <label htmlFor="formGroupExampleInput"></label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="formGroupExampleInput"
                  placeholder="Embeded URL address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput"></label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="formGroupExampleInput"
                  placeholder="Series Id: 1/4 or 64/81 for example"
                />
              </div>
              <Button outline color="success">
            Submit
          </Button>
        </form>
      </Container>
    );
  }
}





          {/* <Col md="8" className="mx-auto">
            <Jumbotron className="mt-3">
              <h1>
                <Fa icon="css3" className="grey-text" /> CSS
              </h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text">FREE </h6>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/css/animations"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Animation
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/css/hover"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Hover effects
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/css/icons"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Icons
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/css/jumbotron"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Jumbotron
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action"
                  to="/css/masks"
                >
                  <h5
                    style={{ margin: "0" }}
                    className="justify-content-between d-flex align-items-center"
                  >
                    Masks
                    <Fa icon="angle-right" />
                  </h5>
                </NavLink>
              </ul>
            </Jumbotron>
          </Col> */}
//         </Row>
//       </Container>
//     );
//   }
// }

export default CSSPage;
