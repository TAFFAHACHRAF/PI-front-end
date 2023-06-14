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
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useEffect , useState } from "react";
import axios from "axios";

const Staff = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8888/authentification/staph", {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user_data")).accessToken,
      },
    })
    .then((res) => {
      setStaff(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
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
              <CardHeader className="border-0">
                <h3 className="mb-0">Staff</h3>
              </CardHeader>
              <div className="container">
                <div className="row">

                 {
                    staff.map((item) => (
                      <div className="col-4 mb-2">
                      <div className="card">
                        <div className="text-center pt-2">
                          <div class="img-hover-zoom img-hover-zoom--colorize">
                            <img
                              class="shadow rounded-circle img-fluid"
                              src="https://source.unsplash.com/rDEOVtE7vOs/100x100"
                              alt="Another Image zoom-on-hover effect"
                            />
                          </div>
                          <div class="card-body p-2">
                            <div class="clearfix mb-1"></div>
  
                            <div class="text-center">
                              <h3>{item.firstName + " " + item.lastName}</h3>
                            </div>
                            <div class="mb-3">
                              <p class="text-uppercase text-center role">
                                {item.roleDTOList.name}
                              </p>
                            </div>
                            <div class="box">
                              <div>
                                <Button outline>Details</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    ))
                 }
                 
                </div>
              </div>
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

export default Staff;
