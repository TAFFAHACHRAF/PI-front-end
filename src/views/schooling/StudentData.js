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
  PaginationLink
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const StudentData = () => {
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
                <h3 className="mb-0">Students data</h3>
              </CardHeader>
              <CardBody>
                <Row className="icon-examples">
                  <Col lg="6" md="6">
                    <div
                      style={{ backgroundColor: "rgb(248, 249, 250)" }}
                      className="p-2 border border-2"
                    >
                      <img
                        src={require("assets/img/payment/abir.png")}
                        className="d-block mx-auto"
                        style={{ width: "50px" }}
                      />
                      <p className="text-center mb-0">
                        <small>
                          <b>Abir Laaroussi</b>
                        </small>
                      </p>
                      <p className="text-center mb-0">
                        <small>2 ème année master en XXXXX</small>
                      </p>
                      <hr className="mt-0 mb-0" />
                      <p className="text-center mt-2 mb-0">ID</p>
                      <p
                        style={{
                          backgroundColor: "#dd9a63",
                          width: "fit-content",
                          padding: "2px 10px",
                          borderRadius: "5px",
                          color: "black",
                          fontWeight: "500",
                          margin: "0 auto",
                        }}
                      >
                        123435
                      </p>

                      <div className="d-flex justify-content-between px-5 pt-4">
                        <div>
                          <p className="mb-0">Tuition fees</p>
                          <p
                            style={{
                              backgroundColor: "#505470",
                              color: "white",
                              padding: "2px 10px",
                              borderRadius: "5px",
                              fontWeight: "500",
                            }}
                          >
                            15,000.00 DHs
                          </p>
                        </div>
                        <div>
                          <p className="mb-0">Paid fees</p>
                          <p
                            style={{
                              backgroundColor: "#24c18f",
                              color: "white",
                              padding: "2px 10px",
                              borderRadius: "5px",
                            }}
                          >
                            15,000.00 DHs
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" md="6" className="mb-3">
                    <div
                      style={{ backgroundColor: "rgb(248, 249, 250)" }}
                      className="p-2 border border-2"
                    >
                      <img
                        src={require("assets/img/payment/abir.png")}
                        className="d-block mx-auto"
                        style={{ width: "50px" }}
                      />
                      <p className="text-center mb-0">
                        <small>
                          <b>Abir Laaroussi</b>
                        </small>
                      </p>
                      <p className="text-center mb-0">
                        <small>2 ème année master en XXXXX</small>
                      </p>
                      <hr className="mt-0 mb-0" />
                      <p className="text-center mt-2 mb-0">ID</p>
                      <p
                        style={{
                          backgroundColor: "#dd9a63",
                          width: "fit-content",
                          padding: "2px 10px",
                          borderRadius: "5px",
                          color: "black",
                          fontWeight: "500",
                          margin: "0 auto",
                        }}
                      >
                        123435
                      </p>

                      <div className="d-flex justify-content-between px-5 pt-4">
                        <div>
                          <p className="mb-0">Tuition fees</p>
                          <p
                            style={{
                              backgroundColor: "#505470",
                              color: "white",
                              padding: "2px 10px",
                              borderRadius: "5px",
                              fontWeight: "500",
                              fontWeight: "500",
                            }}
                          >
                            15,000.00 DHs
                          </p>
                        </div>
                        <div>
                          <p className="mb-0">Paid fees</p>
                          <p
                            style={{
                              backgroundColor: "#24c18f",
                              color: "white",
                              padding: "2px 10px",
                              borderRadius: "5px",
                              fontWeight: "500",
                            }}
                          >
                            15,000.00 DHs
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" md="6" className="mb-3">
                    <div
                      style={{ backgroundColor: "rgb(248, 249, 250)" }}
                      className="p-2 border border-2"
                    >
                      <img
                        src={require("assets/img/payment/abir.png")}
                        className="d-block mx-auto"
                        style={{ width: "50px" }}
                      />
                      <p className="text-center mb-0">
                        <small>
                          <b>Abir Laaroussi</b>
                        </small>
                      </p>
                      <p className="text-center mb-0">
                        <small>2 ème année master en XXXXX</small>
                      </p>
                      <hr className="mt-0 mb-0" />
                      <p className="text-center mt-2 mb-0">ID</p>
                      <p
                        style={{
                          backgroundColor: "#dd9a63",
                          width: "fit-content",
                          padding: "2px 10px",
                          borderRadius: "5px",
                          color: "black",
                          fontWeight: "500",
                          margin: "0 auto",
                        }}
                      >
                        123435
                      </p>

                      <div className="d-flex justify-content-between px-5 pt-4">
                        <div>
                          <p className="mb-0">Tuition fees</p>
                          <p
                            style={{
                              backgroundColor: "#505470",
                              color: "white",
                              padding: "2px 10px",
                              borderRadius: "5px",
                              fontWeight: "500",
                            }}
                          >
                            15,000.00 DHs
                          </p>
                        </div>
                        <div>
                          <p className="mb-0">Paid fees</p>
                          <p
                            style={{
                              backgroundColor: "#24c18f",
                              color: "white",
                              padding: "2px 10px",
                              borderRadius: "5px",
                              fontWeight: "500",
                            }}
                          >
                            15,000.00 DHs
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" md="6" className="mb-3">
                    <div
                      style={{ backgroundColor: "rgb(248, 249, 250)" }}
                      className="p-2 border border-2"
                    >
                      <img
                        src={require("assets/img/payment/abir.png")}
                        className="d-block mx-auto"
                        style={{ width: "50px" }}
                      />
                      <p className="text-center mb-0">
                        <small>
                          <b>Abir Laaroussi</b>
                        </small>
                      </p>
                      <p className="text-center mb-0">
                        <small>2 ème année master en XXXXX</small>
                      </p>
                      <hr className="mt-0 mb-0" />
                      <p className="text-center mt-2 mb-0">ID</p>
                      <p
                        style={{
                          backgroundColor: "#dd9a63",
                          width: "fit-content",
                          padding: "2px 10px",
                          borderRadius: "5px",
                          color: "black",
                          fontWeight: "500",
                          margin: "0 auto",
                        }}
                      >
                        123435
                      </p>

                      <div className="d-flex justify-content-between px-5 pt-4">
                        <div>
                          <p className="mb-0">Tuition fees</p>
                          <p
                            style={{
                              backgroundColor: "#505470",
                              color: "white",
                              padding: "2px 10px",
                              borderRadius: "5px",
                              fontWeight: "500",
                            }}
                          >
                            15,000.00 DHs
                          </p>
                        </div>
                        <div>
                          <p className="mb-0">Paid fees</p>
                          <p
                            style={{
                              backgroundColor: "#24c18f",
                              color: "white",
                              padding: "2px 10px",
                              borderRadius: "5px",
                              fontWeight: "500",
                            }}
                          >
                            15,000.00 DHs
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" md="6" className="mb-3">
                    <div
                      style={{ backgroundColor: "rgb(248, 249, 250)" }}
                      className="p-2 border border-2"
                    >
                      <img
                        src={require("assets/img/payment/abir.png")}
                        className="d-block mx-auto"
                        style={{ width: "50px" }}
                      />
                      <p className="text-center mb-0">
                        <small>
                          <b>Abir Laaroussi</b>
                        </small>
                      </p>
                      <p className="text-center mb-0">
                        <small>2 ème année master en XXXXX</small>
                      </p>
                      <hr className="mt-0 mb-0" />
                      <p className="text-center mt-2 mb-0">ID</p>
                      <p
                        style={{
                          backgroundColor: "#dd9a63",
                          width: "fit-content",
                          padding: "2px 10px",
                          borderRadius: "5px",
                          color: "black",
                          fontWeight: "500",
                          margin: "0 auto",
                        }}
                      >
                        123435
                      </p>

                      <div className="d-flex justify-content-between px-5 pt-4">
                        <div>
                          <p className="mb-0">Tuition fees</p>
                          <p
                            style={{
                              backgroundColor: "#505470",
                              color: "white",
                              padding: "2px 10px",
                              borderRadius: "5px",
                              fontWeight: "500",
                            }}
                          >
                            15,000.00 DHs
                          </p>
                        </div>
                        <div>
                          <p className="mb-0">Paid fees</p>
                          <p
                            style={{
                              backgroundColor: "#24c18f",
                              color: "white",
                              padding: "2px 10px",
                              borderRadius: "5px",
                              fontWeight: "500",
                            }}
                          >
                            15,000.00 DHs
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" md="6" className="mb-3">
                    <div
                      style={{ backgroundColor: "rgb(248, 249, 250)" }}
                      className="p-2 border border-2"
                    >
                      <img
                        src={require("assets/img/payment/abir.png")}
                        className="d-block mx-auto"
                        style={{ width: "50px" }}
                      />
                      <p className="text-center mb-0">
                        <small>
                          <b>Abir Laaroussi</b>
                        </small>
                      </p>
                      <p className="text-center mb-0">
                        <small>2 ème année master en XXXXX</small>
                      </p>
                      <hr className="mt-0 mb-0" />
                      <p className="text-center mt-2 mb-0">ID</p>
                      <p
                        style={{
                          backgroundColor: "#dd9a63",
                          width: "fit-content",
                          padding: "2px 10px",
                          borderRadius: "5px",
                          color: "black",
                          fontWeight: "500",
                          margin: "0 auto",
                        }}
                      >
                        123435
                      </p>

                      <div className="d-flex justify-content-between px-5 pt-4">
                        <div>
                          <p className="mb-0">Tuition fees</p>
                          <p
                            style={{
                              backgroundColor: "#505470",
                              color: "white",
                              padding: "2px 10px",
                              borderRadius: "5px",
                              fontWeight: "500",
                            }}
                          >
                            15,000.00 DHs
                          </p>
                        </div>
                        <div>
                          <p className="mb-0">Paid fees</p>
                          <p
                            style={{
                              backgroundColor: "#24c18f",
                              color: "white",
                              padding: "2px 10px",
                              borderRadius: "5px",
                              fontWeight: "500",
                            }}
                          >
                            15,000.00 DHs
                          </p>
                        </div>
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

export default StudentData;
