import React from "react";
import { Container, Row, Col, Jumbotron, Fa, NavLink, FreeBird, EdgeHeader } from "mdbreact";

class ComponentsPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="8" className="mt-3 mx-auto">
          <br />
            <Jumbotron>
                
                  <h4 className="mt-4 text-center mb-4">
                          <strong>Sign In</strong>
                        </h4>
                        <form>
                          <div className="form-group row">
                            <label
                              htmlFor="inputEmail3"
                              className="col-sm-2 col-form-label"
                            >
                              Email
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              htmlFor="inputPassword3"
                              className="col-sm-2 col-form-label"
                            >
                              Password
                            </label>
                            <div className="col-sm-10">
                              <input
                                type="password"
                                className="form-control"
                                id="inputPassword3"
                                placeholder="Password"
                              />
                            </div>
                          </div>
                          
                            <div className="text-center mt-4">
                              <button type="submit" className="btn btn-primary btn-md">
                                Sign in
                              </button>
                            </div>
                          
                        </form>
                        </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}
//                         </Col>

//                     </Row>
                
//                 </FreeBird>

//           </Container>
//     );
//   }
// }
          
          




          // <Col md="8" className="mt-3 mx-auto">
          //   <Jumbotron>
          //     <h1>
          //       <Fa icon="cubes" className="grey-text" /> Components
          //     </h1>
          //     <ul className="list-unstyled example-components-list">
          //       <h6 className="mt-3 grey-text">FREE </h6>
          //       <NavLink
          //         className="list-group-item list-group-item-action"
          //         to="/components/alert"
          //       >
          //         <h5
          //           style={{ margin: "0" }}
          //           className="justify-content-between d-flex align-items-center"
          //         >
          //           Alert
          //           <Fa icon="angle-right" />
          //         </h5>
          //       </NavLink>
          //       <NavLink
          //         className="list-group-item list-group-item-action"
          //         to="/components/badge"
          //       >
          //         <h5
          //           style={{ margin: "0" }}
          //           className="justify-content-between d-flex align-items-center"
          //         >
          //           Badge
          //           <Fa icon="angle-right" />
          //         </h5>
          //       </NavLink>
          //       <NavLink
          //         className="list-group-item list-group-item-action"
          //         to="/components/buttons"
          //       >
          //         <h5
          //           style={{ margin: "0" }}
          //           className="justify-content-between d-flex align-items-center"
          //         >
          //           Buttons
          //           <Fa icon="angle-right" />
          //         </h5>
          //       </NavLink>
          //       <NavLink
          //         className="list-group-item list-group-item-action"
          //         to="/components/cards"
          //       >
          //         <h5
          //           style={{ margin: "0" }}
          //           className="justify-content-between d-flex align-items-center"
          //         >
          //           Cards
          //           <Fa icon="angle-right" />
          //         </h5>
          //       </NavLink>
          //       <NavLink
          //         className="list-group-item list-group-item-action"
          //         to="/components/dropdown"
          //       >
          //         <h5
          //           style={{ margin: "0" }}
          //           className="justify-content-between d-flex align-items-center"
          //         >
          //           Dropdown
          //           <Fa icon="angle-right" />
          //         </h5>
          //       </NavLink>
          //       <NavLink
          //         className="list-group-item list-group-item-action"
          //         to="/components/list-group"
          //       >
          //         <h5
          //           style={{ margin: "0" }}
          //           className="justify-content-between d-flex align-items-center"
          //         >
          //           List group
          //           <Fa icon="angle-right" />
          //         </h5>
          //       </NavLink>
          //       <NavLink
          //         className="list-group-item list-group-item-action"
          //         to="/components/media"
          //       >
          //         <h5
          //           style={{ margin: "0" }}
          //           className="justify-content-between d-flex align-items-center"
          //         >
          //           Media
          //           <Fa icon="angle-right" />
          //         </h5>
          //       </NavLink>
          //       <NavLink
          //         className="list-group-item list-group-item-action"
          //         to="/components/panels"
          //       >
          //         <h5
          //           style={{ margin: "0" }}
          //           className="justify-content-between d-flex align-items-center"
          //         >
          //           Panels
          //           <Fa icon="angle-right" />
          //         </h5>
          //       </NavLink>
          //       <NavLink
          //         className="list-group-item list-group-item-action"
          //         to="/components/pagination"
          //       >
          //         <h5
          //           style={{ margin: "0" }}
          //           className="justify-content-between d-flex align-items-center"
          //         >
          //           Pagination
          //           <Fa icon="angle-right" />
          //         </h5>
          //       </NavLink>
          //       <NavLink
          //         className="list-group-item list-group-item-action"
          //         to="/components/progress"
          //       >
          //         <h5
          //           style={{ margin: "0" }}
          //           className="justify-content-between d-flex align-items-center"
          //         >
          //           Progress
          //           <Fa icon="angle-right" />
          //         </h5>
          //       </NavLink>
          //       <NavLink
          //         className="list-group-item list-group-item-action"
          //         to="/components/search"
          //       >
          //         <h5
          //           style={{ margin: "0" }}
          //           className="justify-content-between d-flex align-items-center"
          //         >
          //           Search
          //           <Fa icon="angle-right" />
          //         </h5>
          //       </NavLink>
          //     </ul>
          //   </Jumbotron>
          // </Col>
        
      

export default ComponentsPage;
