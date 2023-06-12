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
import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  CardHeader,
  CardBody,
  Col,
  Button,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Label,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

const AddClass = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">add class :</h3>
              </CardHeader>
              <CardBody>
                <Col lg="8" md="8" className="mx-auto">
                  <Card className="border-0">
                    <CardBody className="px-lg-5 py-lg-2">
                      <div className="text-center text-muted mb-4">
                        <small>Class's information</small>
                      </div>
                      <Form role="form">
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="nom" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Abbreviation" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <Input id="exampleSelect" name="select" type="select">
                            <option>Diplome</option>
                            <option>Scholling</option>
                            <option>Director</option>
                            <option>Professor</option>
                          </Input>
                        </FormGroup>
                        <FormGroup>
                          <Input id="exampleSelect" name="select" type="select">
                            <option>Departement</option>
                            <option>Scholling</option>
                            <option>Director</option>
                            <option>Professor</option>
                          </Input>
                        </FormGroup>
                        <FormGroup>
                          <Input id="exampleSelect" name="select" type="select">
                            <option>Professeur</option>
                            <option>Scholling</option>
                            <option>Director</option>
                            <option>Professor</option>
                          </Input>
                        </FormGroup>
                        <FormGroup>
                          <Input
                            className="form-control-alternative"
                            placeholder="A few words about you ..."
                            rows="4"
                            defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source."
                            type="textarea"
                          />
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="primary"
                            type="button"
                          >
                            Add Class
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AddClass;
