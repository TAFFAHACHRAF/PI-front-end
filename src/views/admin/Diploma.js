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
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Diploma = () => {
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
                <h3 className="mb-0">Eligible Students for diploma:</h3>
              </CardHeader>
              <CardBody>
                <Row className="icon-examples px-2">
                  <Col className="col-12 mb-3">
                    <div
                      //   style={{ backgroundColor: "rgb(248, 249, 250)" }}
                      className="px-2 py-3 border border-2 row "
                    >
                      <div className="col-2">
                        <img src={require("assets/img/payment/profile.png")} />
                      </div>
                      <div className="col-4 pl-5 border-r">
                        <div className="d-flex justify-content-between">
                          <p className="mb-0" style={{ fontSize: "14px" }}>
                            Name :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            Laaroussi Abir
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            ID :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            123455
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            class :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            GLSID
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            Status :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            <Badge color="" className="badge-dot">
                              <i className="bg-success" />
                              payed
                            </Badge>
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            Eligible for diploma: :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            <b>Yes</b>
                          </p>
                        </div>
                      </div>
                      <div className="col-6 border-1 border-left">
                        <h5>Comment : </h5>
                        <p style={{
                            fontSize: "13px",
                        }}>
                          L'extrait standard de Lorem Ipsum utilisé depuis le
                          XVIè siècle est reproduit ci-dessous pour les curieux.
                          Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum
                          et Malorum" de Cicéron sont aussi reproduites dans
                          leur version originale, accompagnée de la traduction
                          anglaise de H. Rackham (1914).
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col className="col-12 mb-3">
                    <div
                      //   style={{ backgroundColor: "rgb(248, 249, 250)" }}
                      className="px-2 py-3 border border-2 row"
                    >
                      <div className="col-2">
                        <img src={require("assets/img/payment/profile.png")} />
                      </div>
                      <div className="col-4 pl-5 border-r">
                        <div className="d-flex justify-content-between">
                          <p className="mb-0" style={{ fontSize: "14px" }}>
                            Name :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            Laaroussi Abir
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            ID :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            123455
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            class :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            GLSID
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            Status :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            <Badge color="" className="badge-dot">
                              <i className="bg-success" />
                              payed
                            </Badge>
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            Eligible for diploma: :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            <b>Yes</b>
                          </p>
                        </div>
                      </div>
                      <div className="col-6 border-1 border-left">
                        <h5>Comment : </h5>
                        <p style={{
                            fontSize: "13px",
                        }}>
                          L'extrait standard de Lorem Ipsum utilisé depuis le
                          XVIè siècle est reproduit ci-dessous pour les curieux.
                          Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum
                          et Malorum" de Cicéron sont aussi reproduites dans
                          leur version originale, accompagnée de la traduction
                          anglaise de H. Rackham (1914).
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col className="col-12 mb-3">
                    <div
                      //   style={{ backgroundColor: "rgb(248, 249, 250)" }}
                      className="px-2 py-3 border border-2 row"
                    >
                      <div className="col-2">
                        <img src={require("assets/img/payment/profile.png")} />
                      </div>
                      <div className="col-4 pl-5 border-r">
                        <div className="d-flex justify-content-between">
                          <p className="mb-0" style={{ fontSize: "14px" }}>
                            Name :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            Laaroussi Abir
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            ID :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            123455
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            class :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            GLSID
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            Status :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            <Badge color="" className="badge-dot">
                              <i className="bg-success" />
                              payed
                            </Badge>
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            Eligible for diploma: :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            <b>Yes</b>
                          </p>
                        </div>
                      </div>
                      <div className="col-6 border-1 border-left">
                        <h5>Comment : </h5>
                        <p style={{
                            fontSize: "13px",
                        }}>
                          L'extrait standard de Lorem Ipsum utilisé depuis le
                          XVIè siècle est reproduit ci-dessous pour les curieux.
                          Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum
                          et Malorum" de Cicéron sont aussi reproduites dans
                          leur version originale, accompagnée de la traduction
                          anglaise de H. Rackham (1914).
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col className="col-12 mb-3">
                    <div
                      //   style={{ backgroundColor: "rgb(248, 249, 250)" }}
                      className="px-2 py-3 border border-2 row"
                    >
                      <div className="col-2">
                        <img src={require("assets/img/payment/profile.png")} />
                      </div>
                      <div className="col-4 pl-5 border-r">
                        <div className="d-flex justify-content-between">
                          <p className="mb-0" style={{ fontSize: "14px" }}>
                            Name :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            Laaroussi Abir
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            ID :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            123455
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            class :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            GLSID
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            Status :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            <Badge color="" className="badge-dot">
                              <i className="bg-success" />
                              payed
                            </Badge>
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            Eligible for diploma: :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            <b>Yes</b>
                          </p>
                        </div>
                      </div>
                      <div className="col-6 border-1 border-left">
                        <h5>Comment : </h5>
                        <p style={{
                            fontSize: "13px",
                        }}>
                          L'extrait standard de Lorem Ipsum utilisé depuis le
                          XVIè siècle est reproduit ci-dessous pour les curieux.
                          Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum
                          et Malorum" de Cicéron sont aussi reproduites dans
                          leur version originale, accompagnée de la traduction
                          anglaise de H. Rackham (1914).
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col className="col-12 mb-3">
                    <div
                      //   style={{ backgroundColor: "rgb(248, 249, 250)" }}
                      className="px-2 py-3 border border-2 row"
                    >
                      <div className="col-2">
                        <img src={require("assets/img/payment/profile.png")} />
                      </div>
                      <div className="col-4 pl-5 border-r">
                        <div className="d-flex justify-content-between">
                          <p className="mb-0" style={{ fontSize: "14px" }}>
                            Name :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            Laaroussi Abir
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            ID :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            123455
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            class :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            GLSID
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            Status :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            <Badge color="" className="badge-dot">
                              <i className="bg-success" />
                              payed
                            </Badge>
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            Eligible for diploma: :{" "}
                          </p>
                          <p className="mb-1" style={{ fontSize: "14px" }}>
                            <b>Yes</b>
                          </p>
                        </div>
                      </div>
                      <div className="col-6 border-1 border-left">
                        <h5>Comment : </h5>
                        <p style={{
                            fontSize: "13px",
                        }}>
                          L'extrait standard de Lorem Ipsum utilisé depuis le
                          XVIè siècle est reproduit ci-dessous pour les curieux.
                          Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum
                          et Malorum" de Cicéron sont aussi reproduites dans
                          leur version originale, accompagnée de la traduction
                          anglaise de H. Rackham (1914).
                        </p>
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

export default Diploma;
