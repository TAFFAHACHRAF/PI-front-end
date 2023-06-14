/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useEffect, useState } from "react";
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
  UncontrolledTooltip,
  Table,
  Media,
  Badge,
  Progress,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import axios from "axios";

const History = () => {
  const [copiedText, setCopiedText] = useState();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8888/authentification/student/" +
          JSON.parse(localStorage.getItem("user_data")).userDTO.id +
          "/payments",
        {
          headers: {
            Authorization:
              "Bearer " +
              JSON.parse(localStorage.getItem("user_data")).accessToken,
          },
        }
      )
      .then((res) => {
        setHistory(res.data);
      });
  }, []);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Payment History</h3>
              </CardHeader>
              <CardBody>
                <Row className="icon-examples">
                  <Col
                    lg="12"
                    md="12"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img
                      alt="..."
                      src={require("assets/img/payment/person.png")}
                    />
                    <img
                      alt="..."
                      src={require("assets/img/payment/Line.png")}
                    />
                    <img
                      alt="..."
                      src={require("assets/img/payment/Circled.png")}
                      style={{
                        marginLeft: "-16px",
                      }}
                    />
                    <img
                      alt="..."
                      src={require("assets/img/payment/Line.png")}
                      style={{
                        marginLeft: "-16px",
                      }}
                    />
                    <img
                      alt="..."
                      src={require("assets/img/payment/University.png")}
                      style={{
                        marginLeft: "-20px",
                      }}
                    />
                  </Col>
                  <Col
                    lg="12"
                    md="12"
                    className="mt-4 d-flex justify-content-center align-items-center"
                  >
                    <p
                      style={{
                        width: "fit-content",
                        backgroundColor: "#D9D9D9",
                        borderRadius: "15px",
                      }}
                      className="pr-2"
                    >
                      <img
                        alt="..."
                        src={require("assets/img/payment/clock.png")}
                        style={{
                          height: "30px",
                          width: "30px",
                        }}
                      />
                      <span
                        style={{ marginLeft: "10px" }}
                        className="text-black"
                      >
                        10.000,00 DH
                      </span>
                    </p>
                  </Col>
                </Row>
                <Table
                  className="align-items-center table-flush w-75 mx-auto"
                  responsive
                >
                  <tbody>
                    {history.map((h) => (
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <Media>
                              <span className="mb-0 text-sm">
                                Registration Fees
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            <i className="bg-success" />
                            {h.isValid ? "valid" : "pending"}
                          </Badge>
                        </td>
                        <td> {new Date(h.date).toLocaleString("en-GB")}</td>
                        <td>{h.montant} DHs</td>

                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              href="#pablo"
                              role="button"
                              size="sm"
                              color=""
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default History;
