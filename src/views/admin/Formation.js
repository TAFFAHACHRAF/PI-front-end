/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Timf

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Badge,
  Table,
  UncontrolledTooltip,
  Progress,
  DropdownItem,
  Media,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Formation = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col-12">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Formation :</h3>
              </CardHeader>
              <CardBody>
                <Row className="icon-examples px-2">
                  <Col className="col-12 mb-3">
                    <div
                      //   style={{ backgroundColor: "rgb(248, 249, 250)" }}
                      className="px-2 py-3 border border-2 row "
                    >
                      <div className="col-4 border-right border-1">
                        <img src={require("assets/img/payment/master.png")} />
                      </div>
                      <div className="col-8 border-r">
                        <table className="table table-hover">
                           <thead>
                              <tr>
                                <th>Departement</th>
                                <th>Diploma</th>
                              </tr>
                           </thead>
                           <tbody>
                            <tr>
                              <td>GRH - Gestion des Ressources Humaines</td>
                              <td>Compiuter science</td>
                            </tr>
                            <tr>
                              <td>Sciences et Techniques</td>
                              <td>Compiuter science</td>
                            </tr>
                            <tr>
                              <td>GRH - Gestion des Ressources Humaines</td>
                              <td>Compiuter science</td>
                            </tr>
                            <tr>
                              <td>Sciences et Techniques</td>
                              <td>Compiuter science</td>
                            </tr>
                            <tr>
                              <td>GRH - Gestion des Ressources Humaines</td>
                              <td>Compiuter science</td>
                            </tr>
                            <tr>
                              <td>Sciences et Techniques</td>
                              <td>Compiuter science</td>
                            </tr>
                           </tbody>
                        </table>
                      </div>
                    </div>
                  </Col>

                  <CardFooter className="py-4 ml-auto">
                    <nav aria-label="...">
                      <Pagination
                        className="pagination justify-content-end mb-0"
                        listClassName="justify-content-end mb-0"
                      >
                        <PaginationItem className="disabled">
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            tabIndex="-1"
                          >
                            <i className="fas fa-angle-left" />
                            <span className="sr-only">Previous</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className="active">
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            2 <span className="sr-only">(current)</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-angle-right" />
                            <span className="sr-only">Next</span>
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </nav>
                  </CardFooter>
                </Row>

                <Row className="icon-examples px-2">
                  <Col className="col-12 mb-3">
                    <div
                      //   style={{ backgroundColor: "rgb(248, 249, 250)" }}
                      className="px-2 py-3 border border-2 row "
                    >
                      <div className="col-4 border-right border-1">
                        <img src={require("assets/img/payment/bachelor.png")} />
                      </div>
                      <div className="col-8 border-r">
                        <table className="table table-hover">
                           <thead>
                              <tr>
                                <th>Departement</th>
                                <th>Diploma</th>
                              </tr>
                           </thead>
                           <tbody>
                            <tr>
                              <td>GRH - Gestion des Ressources Humaines</td>
                              <td>Compiuter science</td>
                            </tr>
                            <tr>
                              <td>Sciences et Techniques</td>
                              <td>Compiuter science</td>
                            </tr>
                            <tr>
                              <td>GRH - Gestion des Ressources Humaines</td>
                              <td>Compiuter science</td>
                            </tr>
                            <tr>
                              <td>Sciences et Techniques</td>
                              <td>Compiuter science</td>
                            </tr>
                            <tr>
                              <td>GRH - Gestion des Ressources Humaines</td>
                              <td>Compiuter science</td>
                            </tr>
                            <tr>
                              <td>Sciences et Techniques</td>
                              <td>Compiuter science</td>
                            </tr>
                           </tbody>
                        </table>
                      </div>
                    </div>
                  </Col>

                  <CardFooter className="py-4 ml-auto">
                    <nav aria-label="...">
                      <Pagination
                        className="pagination justify-content-end mb-0"
                        listClassName="justify-content-end mb-0"
                      >
                        <PaginationItem className="disabled">
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            tabIndex="-1"
                          >
                            <i className="fas fa-angle-left" />
                            <span className="sr-only">Previous</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className="active">
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            2 <span className="sr-only">(current)</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-angle-right" />
                            <span className="sr-only">Next</span>
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </nav>
                  </CardFooter>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Formation;
