import {
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Input,
  Col,
  Button,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Tables = () => {
  const [students, setStudents] = useState([]);
  const location = useLocation();
  const { id, major , classes } = location.state;
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8888/authentification/student/major/"+id, {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user_data")).accessToken,
        },
      })
      .then((res) => {
        setStudents([...res.data]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      console.log("classes" , classes)
      console.log("students" , students)
      console.log("id", id)
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8888/authentification/student/keyword/" + search, {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user_data")).accessToken,
        },
      })
      .then((res) => {
        setStudents([...res.data]);
      })
      .then((err) => {
        console.log(err);
      });
  };

  const goToAddStudent = () => {
    navigate("/admin/addStudent" , {state : {
      classes,
      students: students,
      id: id,
    }});
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Container>
                  <Row>
                    <Col>
                      <h3 className="mb-0">Students list</h3>
                    </Col>
                    <Col>
                      <Form
                        onSubmit={onSubmit}
                        className="navbar-search navbar-search-light form-inline mr-3 d-none d-md-flex ml-lg-auto"
                      >
                        <FormGroup className="mb-0">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="fas fa-search" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Search"
                              onChange={(e) => setSearch(e.target.value)}
                              type="text"
                            />
                          </InputGroup>
                        </FormGroup>
                      </Form>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <Button
                        color="info"
                        href="#pablo"
                        onClick={goToAddStudent}
                      >
                        <i className="fas fa-plus" />
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Student</th>
                    <th scope="col">Tuition fess</th>
                    <th scope="col">Status</th>
                    <th scope="col">class</th>
                    <th scope="col">email</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          {/* <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("../../assets/img/payment/abir.png")}
                            />
                          </a> */}
                          <Media>
                            <span className="mb-0 text-sm">
                              {student.firstName} {student.lastName}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>{student.gender}</td>
                      <td>{student.adresse}</td>
                      <td>{major}</td>
                      <td>{student.email}</td>
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
              <CardFooter className="py-4">
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
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tables;
