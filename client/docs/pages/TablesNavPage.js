import React from "react";
import { DataTable, Container, Row, Col, Card, CardBody } from "mdbreact";
import DocsLink from "./DocsLink";

const ComponentsPage = () => {
  return (
    <Container className="mt-3">
      <DocsLink
        title="Datatable"
        href="https://mdbootstrap.com/react/content/datatables/"
      />
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">
                Datatable with data from API
              </h2>
              <DataTable
                striped
                bordered
                hover
                data="https://my-json-server.typicode.com/Rotarepmi/exjson/db"
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      </Container>
  );
};

export default ComponentsPage;


// import React from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardBody,
//   Table,
//   TableBody,
//   TableHead
// } from "mdbreact";
// import DocsLink from "./DocsLink";

// const TablePage = props => {
//   const data = {
//     columns: [
//       {
//         label: "#",
//         field: "id",
//         sort: "asc"
//       },
//       {
//         label: "First",
//         field: "first",
//         sort: "asc"
//       },
//       {
//         label: "Last",
//         field: "last",
//         sort: "asc"
//       },
//       {
//         label: "Handle",
//         field: "handle",
//         sort: "asc"
//       }
//     ],
//     rows: [
//       {
//         id: 1,
//         first: "Mark",
//         last: "Otto",
//         handle: "@mdo"
//       },
//       {
//         id: 2,
//         first: "Jacob",
//         last: "Thornton",
//         handle: "@fat"
//       },
//       {
//         id: 3,
//         first: "Larry",
//         last: "the Bird",
//         handle: "@twitter"
//       }
//     ]
//   };

//   const data_collspan = {
//     columns: [
//       {
//         label: "#",
//         field: "id",
//         sort: "asc"
//       },
//       {
//         label: "First",
//         field: "first",
//         sort: "asc"
//       },
//       {
//         label: "Last",
//         field: "last",
//         sort: "asc"
//       },
//       {
//         label: "Handle",
//         field: "handle",
//         sort: "asc"
//       }
//     ],
//     rows: [
//       {
//         id: 1,
//         first: "Mark",
//         last: "Otto",
//         handle: "@mdo"
//       },
//       {
//         id: 2,
//         first: "Jacob",
//         last: "Thornton",
//         handle: "@fat"
//       },
//       {
//         id: 3,
//         first: "Larry the Bird",
//         colspan: 2,
//         handle: "@twitter"
//       }
//     ]
//   };

//   const data_responsive = {
//     columns: [
//       {
//         label: "#",
//         field: "id",
//         sort: "asc"
//       },
//       {
//         label: "Heading",
//         field: "heading0",
//         sort: "asc"
//       },
//       {
//         label: "Heading",
//         field: "heading1",
//         sort: "asc"
//       },
//       {
//         label: "Heading",
//         field: "heading2",
//         sort: "asc"
//       },
//       {
//         label: "Heading",
//         field: "heading3",
//         sort: "asc"
//       },
//       {
//         label: "Heading",
//         field: "heading4",
//         sort: "asc"
//       },
//       {
//         label: "Heading",
//         field: "heading5",
//         sort: "asc"
//       },
//       {
//         label: "Heading",
//         field: "heading6",
//         sort: "asc"
//       },
//       {
//         label: "Heading",
//         field: "heading7",
//         sort: "asc"
//       },
//       {
//         label: "Heading",
//         field: "heading8",
//         sort: "asc"
//       }
//     ],
//     rows: [
//       {
//         id: 1,
//         heading0: "Cell",
//         heading1: "Cell",
//         heading2: "Cell",
//         heading3: "Cell",
//         heading4: "Cell",
//         heading5: "Cell",
//         heading6: "Cell",
//         heading7: "Cell",
//         heading8: "Cell"
//       },
//       {
//         id: 2,
//         heading0: "Cell",
//         heading1: "Cell",
//         heading2: "Cell",
//         heading3: "Cell",
//         heading4: "Cell",
//         heading5: "Cell",
//         heading6: "Cell",
//         heading7: "Cell",
//         heading8: "Cell"
//       },
//       {
//         id: 3,
//         heading0: "Cell",
//         heading1: "Cell",
//         heading2: "Cell",
//         heading3: "Cell",
//         heading4: "Cell",
//         heading5: "Cell",
//         heading6: "Cell",
//         heading7: "Cell",
//         heading8: "Cell"
//       }
//     ]
//   };

//   return (
//     <Container className="mt-3">
//       <DocsLink
//         title="Tables"
//         href="https://mdbootstrap.com/react/content/tables/"
//       />
//       <Row className="py-3">
//         <Col md="12">
//           <Card>
//             <CardBody>
//               <h2 className="h2-responsive pb-4">Basic Table</h2>
//               <Table>
//                 <TableHead>
//                   <tr>
//                     <th>#</th>
//                     <th>First</th>
//                     <th>Last</th>
//                     <th>Handle</th>
//                   </tr>
//                 </TableHead>
//                 <TableBody>
//                   <tr>
//                     <td>1</td>
//                     <td>Mark</td>
//                     <td>Otto</td>
//                     <td>@mdo</td>
//                   </tr>
//                   <tr>
//                     <td>2</td>
//                     <td>Jacob</td>
//                     <td>Thornton</td>
//                     <td>@fat</td>
//                   </tr>
//                   <tr>
//                     <td>3</td>
//                     <td>Larry</td>
//                     <td>the Bird</td>
//                     <td>@twitter</td>
//                   </tr>
//                 </TableBody>
//               </Table>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="py-3">
//         <Col md="12">
//           <Card>
//             <CardBody>
//               <h2 className="h2-responsive pb-4">Table head options</h2>
//               <Table>
//                 <TableHead
//                   columns={data.columns}
//                   color="primary-color"
//                   textWhite
//                 />
//                 <TableBody rows={data.rows} />
//               </Table>

//               <Table>
//                 <TableHead columns={data.columns} color="dark" />
//                 <TableBody rows={data.rows} />
//               </Table>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="py-3">
//         <Col md="12">
//           <Card>
//             <CardBody>
//               <h2 className="h2-responsive pb-4">Striped rows</h2>
//               <Table striped>
//                 <TableHead columns={data.columns} />
//                 <TableBody rows={data.rows} />
//               </Table>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="py-3">
//         <Col md="12">
//           <Card>
//             <CardBody>
//               <h2 className="h2-responsive pb-4">Bordered Table</h2>
//               <Table bordered>
//                 <TableHead
//                   columns={data_collspan.columns}
//                   color="primary-color"
//                   textWhite
//                 />
//                 <TableBody rows={data_collspan.rows} />
//               </Table>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="py-3">
//         <Col md="12">
//           <Card>
//             <CardBody>
//               <h2 className="h2-responsive pb-4">Borderless Table</h2>
//               <Table borderless>
//                 <TableHead columns={data_collspan.columns} />
//                 <TableBody rows={data_collspan.rows} />
//               </Table>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="py-3">
//         <Col md="12">
//           <Card>
//             <CardBody>
//               <h2 className="h2-responsive pb-4">Hoverable rows</h2>
//               <Table hover>
//                 <TableHead
//                   columns={data_collspan.columns}
//                   color="secondary-color"
//                   textWhite
//                 />
//                 <TableBody rows={data_collspan.rows} />
//               </Table>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="py-3">
//         <Col md="12">
//           <Card>
//             <CardBody>
//               <h2 className="h2-responsive pb-4">Samll Table</h2>
//               <Table small>
//                 <TableHead
//                   columns={data_collspan.columns}
//                   color="primary-color"
//                   textWhite
//                 />
//                 <TableBody rows={data_collspan.rows} />
//               </Table>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="py-3">
//         <Col md="12">
//           <Card>
//             <CardBody>
//               <h2 className="h2-responsive pb-4">Captions</h2>
//               <Table>
//                 <caption>List of users</caption>
//                 <TableHead columns={data.columns} color="indigo" textWhite />
//                 <TableBody rows={data.rows} />
//               </Table>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="py-3">
//         <Col md="12">
//           <Card>
//             <CardBody>
//               <h2 className="h2-responsive pb-4">Responsive Table</h2>
//               <Table responsive>
//                 <TableHead
//                   columns={data_responsive.columns}
//                   color="primary-color"
//                   textWhite
//                 />
//                 <TableBody rows={data_responsive.rows} />
//               </Table>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default TablePage;




// import React from "react";
// import { Container, Row, Col, Jumbotron, Fa, NavLink } from "mdbreact";

// class ComponentsPage extends React.Component {
//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col md="8" className="mt-3 mx-auto">
//             <Jumbotron>
//               <h1>
//                 <Fa icon="table" className="grey-text mr-2" />
//                 Tables
//               </h1>
//               <ul className="list-unstyled example-components-list">
//                 <h6 className="mt-3 grey-text">FREE </h6>
//                 <NavLink
//                   className="list-group-item list-group-item-action"
//                   to="/tables/datatable"
//                 >
//                   <h5
//                     style={{ margin: "0" }}
//                     className="justify-content-between d-flex align-items-center"
//                   >
//                     Datatable
//                     <Fa icon="angle-right" />
//                   </h5>
//                 </NavLink>
//                 <NavLink
//                   className="list-group-item list-group-item-action"
//                   to="/tables/datatable-api"
//                 >
//                   <h5
//                     style={{ margin: "0" }}
//                     className="justify-content-between d-flex align-items-center"
//                   >
//                     Datatable - data from API
//                     <Fa icon="angle-right" />
//                   </h5>
//                 </NavLink>
//                 <NavLink
//                   className="list-group-item list-group-item-action"
//                   to="/tables/table"
//                 >
//                   <h5
//                     style={{ margin: "0" }}
//                     className="justify-content-between d-flex align-items-center"
//                   >
//                     Table
//                     <Fa icon="angle-right" />
//                   </h5>
//                 </NavLink>
//                 <NavLink
//                   className="list-group-item list-group-item-action"
//                   to="/tables/table-responsive"
//                 >
//                   <h5
//                     style={{ margin: "0" }}
//                     className="justify-content-between d-flex align-items-center"
//                   >
//                     Table Responsive
//                     <Fa icon="angle-right" />
//                   </h5>
//                 </NavLink>
//                 <NavLink
//                   className="list-group-item list-group-item-action"
//                   to="/tables/table-scroll"
//                 >
//                   <h5
//                     style={{ margin: "0" }}
//                     className="justify-content-between d-flex align-items-center"
//                   >
//                     Table Scroll
//                     <Fa icon="angle-right" />
//                   </h5>
//                 </NavLink>
//                 <NavLink
//                   className="list-group-item list-group-item-action"
//                   to="/tables/table-styles"
//                 >
//                   <h5
//                     style={{ margin: "0" }}
//                     className="justify-content-between d-flex align-items-center"
//                   >
//                     Table Styles
//                     <Fa icon="angle-right" />
//                   </h5>
//                 </NavLink>
//               </ul>
//             </Jumbotron>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default ComponentsPage;
