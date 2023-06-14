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
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8888/educations/major/", {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user_data")).accessToken,
        },
      })
      .then((response) => {
        console.log(response.data);
        setClasses(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const goToStudentList = (majorId , major) => {
    navigate("/financial/studentList" , {state : {
      id : majorId,
      major,
    }});
  }

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
                <h3 className="mb-0">Diplôme : Licence d'Université</h3>
              </CardHeader>
              <CardBody>
                <Row className="icon-examples">
                  {classes.map((classe) => (
                    <Col lg="6" md="6" key={classe.id} onClick={() => goToStudentList(classe.id , classe.name)}>
                      <button
                        className="btn-icon-clipboard"
                        id="tooltip982655500"
                        type="button"
                      >
                        <div className="d-block">
                          <p className="mb-0">
                            <b>Filiere :</b> {" "}
                            <small>{classe.name}</small>
                          </p>
                          <p className="mb-0">
                            <b>Diplôme</b> :{" "}
                            <small>{classe?.education?.diploma}</small>
                          </p>
                          <p>
                            <b>Département</b> :{" "}
                            <small>{classe?.departement?.intitule}</small>
                          </p>
                        </div>
                      </button>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </div>

          {/* <div className="col-12">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Diplôme : Master d'Université</h3>
              </CardHeader>
              <CardBody>
                <Row className="icon-examples">
                  <Col lg="6" md="6">
                    <button
                      className="btn-icon-clipboard"
                      id="tooltip982655500"
                      type="button"
                    >
                      <div className="d-block">
                        <p className="mb-0">
                          <b>CGIF</b> -{" "}
                          <small>
                            Contrôle de Gestion et Ingénierie Financière
                          </small>
                        </p>
                        <p className="mb-0">
                          <b>Diplôme</b> : <small>Master d'Université</small>
                        </p>
                        <p>
                          <b>Département</b> :{" "}
                          <small>Génie Economie et Gestion</small>
                        </p>
                      </div>
                    </button>
                  </Col>

                  <Col lg="6" md="6">
                    <button
                      className="btn-icon-clipboard"
                      id="tooltip982655500"
                      type="button"
                    >
                      <div className="d-block">
                        <p className="mb-0">
                          <b>CGIF</b> -{" "}
                          <small>
                            Contrôle de Gestion et Ingénierie Financière
                          </small>
                        </p>
                        <p className="mb-0">
                          <b>Diplôme</b> : <small>Master d'Université</small>
                        </p>
                        <p>
                          <b>Département</b> :{" "}
                          <small>Génie Economie et Gestion</small>
                        </p>
                      </div>
                    </button>
                  </Col>

                  <Col lg="6" md="6">
                    <button
                      className="btn-icon-clipboard"
                      id="tooltip982655500"
                      type="button"
                    >
                      <div className="d-block">
                        <p className="mb-0">
                          <b>CGIF</b> -{" "}
                          <small>
                            Contrôle de Gestion et Ingénierie Financière
                          </small>
                        </p>
                        <p className="mb-0">
                          <b>Diplôme</b> : <small>Master d'Université</small>
                        </p>
                        <p>
                          <b>Département</b> :{" "}
                          <small>Génie Economie et Gestion</small>
                        </p>
                      </div>
                    </button>
                  </Col>

                  <Col lg="6" md="6">
                    <button
                      className="btn-icon-clipboard"
                      id="tooltip982655500"
                      type="button"
                    >
                      <div className="d-block">
                        <p className="mb-0">
                          <b>CGIF</b> -{" "}
                          <small>
                            Contrôle de Gestion et Ingénierie Financière
                          </small>
                        </p>
                        <p className="mb-0">
                          <b>Diplôme</b> : <small>Master d'Université</small>
                        </p>
                        <p>
                          <b>Département</b> :{" "}
                          <small>Génie Economie et Gestion</small>
                        </p>
                      </div>
                    </button>
                  </Col>

                  <Col lg="6" md="6">
                    <button
                      className="btn-icon-clipboard"
                      id="tooltip982655500"
                      type="button"
                    >
                      <div className="d-block">
                        <p className="mb-0">
                          <b>CGIF</b> -{" "}
                          <small>
                            Contrôle de Gestion et Ingénierie Financière
                          </small>
                        </p>
                        <p className="mb-0">
                          <b>Diplôme</b> : <small>Master d'Université</small>
                        </p>
                        <p>
                          <b>Département</b> :{" "}
                          <small>Génie Economie et Gestion</small>
                        </p>
                      </div>
                    </button>
                  </Col>

                  <Col lg="6" md="6">
                    <button
                      className="btn-icon-clipboard"
                      id="tooltip982655500"
                      type="button"
                    >
                      <div className="d-block">
                        <p className="mb-0">
                          <b>CGIF</b> -{" "}
                          <small>
                            Contrôle de Gestion et Ingénierie Financière
                          </small>
                        </p>
                        <p className="mb-0">
                          <b>Diplôme</b> : <small>Master d'Université</small>
                        </p>
                        <p>
                          <b>Département</b> :{" "}
                          <small>Génie Economie et Gestion</small>
                        </p>
                      </div>
                    </button>
                  </Col>

                  <Col lg="6" md="6">
                    <button
                      className="btn-icon-clipboard"
                      id="tooltip982655500"
                      type="button"
                    >
                      <div className="d-block">
                        <p className="mb-0">
                          <b>CGIF</b> -{" "}
                          <small>
                            Contrôle de Gestion et Ingénierie Financière
                          </small>
                        </p>
                        <p className="mb-0">
                          <b>Diplôme</b> : <small>Master d'Université</small>
                        </p>
                        <p>
                          <b>Département</b> :{" "}
                          <small>Génie Economie et Gestion</small>
                        </p>
                      </div>
                    </button>
                  </Col>

                  <Col lg="6" md="6">
                    <button
                      className="btn-icon-clipboard"
                      id="tooltip982655500"
                      type="button"
                    >
                      <div className="d-block">
                        <p className="mb-0">
                          <b>CGIF</b> -{" "}
                          <small>
                            Contrôle de Gestion et Ingénierie Financière
                          </small>
                        </p>
                        <p className="mb-0">
                          <b>Diplôme</b> : <small>Master d'Université</small>
                        </p>
                        <p>
                          <b>Département</b> :{" "}
                          <small>Génie Economie et Gestion</small>
                        </p>
                      </div>
                    </button>
                  </Col>

                  <Col lg="6" md="6">
                    <button
                      className="btn-icon-clipboard"
                      id="tooltip982655500"
                      type="button"
                    >
                      <div className="d-block">
                        <p className="mb-0">
                          <b>CGIF</b> -{" "}
                          <small>
                            Contrôle de Gestion et Ingénierie Financière
                          </small>
                        </p>
                        <p className="mb-0">
                          <b>Diplôme</b> : <small>Master d'Université</small>
                        </p>
                        <p>
                          <b>Département</b> :{" "}
                          <small>Génie Economie et Gestion</small>
                        </p>
                      </div>
                    </button>
                  </Col>

                  <Col lg="6" md="6">
                    <button
                      className="btn-icon-clipboard"
                      id="tooltip982655500"
                      type="button"
                    >
                      <div className="d-block">
                        <p className="mb-0">
                          <b>CGIF</b> -{" "}
                          <small>
                            Contrôle de Gestion et Ingénierie Financière
                          </small>
                        </p>
                        <p className="mb-0">
                          <b>Diplôme</b> : <small>Master d'Université</small>
                        </p>
                        <p>
                          <b>Département</b> :{" "}
                          <small>Génie Economie et Gestion</small>
                        </p>
                      </div>
                    </button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div> */}
        </Row>
      </Container>
    </>
  );
};

export default Classes;
