import React from "react";
import { Container, Row, Col, CardBody, Table, TableHead, TableBody, Card } from "mdbreact";

const ComponentsPage = props => {

  const data_collspan = {
   columns: [
    {
      label: "#",
      field: "id",
      sort: "asc"
    },
    {
      label: "Subject",
      field: "first",
      sort: "asc"
    },
    {
      label: "Tutor",
      field: "last",
      sort: "asc"
    },
    {
      label: "Embedded URL",
      field: "handle",
      sort: "asc"
    }
  ],
  rows: [
    {
      id: 1,
      first: "HTML",
      last: "Various",
      handle: "htmlDB"
    },
    {
      id: 2,
      first: "CSS",
      last: "Various",
      handle: "cssDB"
    },
    {
      id: 3,
      first: "JavaScript",
      last: "Various",
      handle: "javaScriptDB"
    },
    {
      id: 3,
      first: "React",
      last: "Various",
      handle: "reactDB"
      }
    ]
  }


    return (
      <Container>


        <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Existing [Subject] Databases</h2>
              <Table hover>
                <TableHead
                  columns={data_collspan.columns}
                  color="secondary-color"
                  textWhite
                />
                <TableBody rows={data_collspan.rows} />
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      </Container>
    );
    };












//         <Row>
//           <Col md="8" className="mt-3 mx-auto">
//             <Jumbotron>
//               <h1>
//                 <Fa icon="edit" className="grey-text mr-2" />
//                 Gerbils!
//               </h1>
//               <ul className="list-unstyled example-components-list">
//                 <h6 className="mt-3 grey-text">FREE </h6>
//                 <NavLink
//                   className="list-group-item list-group-item-action"
//                   to="/forms/forms"
//                 >
//                   <h5
//                     style={{ margin: "0" }}
//                     className="justify-content-between d-flex align-items-center"
//                   >
//                     Forms
//                     <Fa icon="angle-right" />
//                   </h5>
//                 </NavLink>
//                 <NavLink
//                   className="list-group-item list-group-item-action"
//                   to="/forms/input"
//                 >
//                   <h5
//                     style={{ margin: "0" }}
//                     className="justify-content-between d-flex align-items-center"
//                   >
//                     Input
//                     <Fa icon="angle-right" />
//                   </h5>
//                 </NavLink>
//                 <NavLink
//                   className="list-group-item list-group-item-action"
//                   to="/forms/validation"
//                 >
//                   <h5
//                     style={{ margin: "0" }}
//                     className="justify-content-between d-flex align-items-center"
//                   >
//                     Validation
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


export default ComponentsPage;
