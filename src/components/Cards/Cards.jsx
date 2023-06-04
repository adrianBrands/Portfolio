import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import petrolImage from "../../images/screenshot2.jpg";
import auctioImage from "../../images/semesterProject2HomePage.jpg";
import holidaze from "../../images/Holidaze.jpg";
import ecom from "../../images/ecom.jpg";
import { Link } from "react-router-dom";
import { Github } from "react-bootstrap-icons";
import { BrowserSafari } from "react-bootstrap-icons";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function Cards() {
  const { theme } = useContext(ThemeContext);
  const DarkLight = () => {
    return theme === "light" ? "card-light" : "card-dark";
  };

  const DarkLightLogo = () => {
    return theme === "light" ? "black" : "white";
  };
  return (
    <>
      <div id={theme === "light" ? "projects-light" : "projects-dark"} className="d-flex flex-column align-items-center">
        <h3 className="fs-2 fw-lighter mt-3 mb-3 ">My Projects</h3>
      </div>
      <Container>
        <Row md={2} xs={1} lg={2} className="g-3 mt-1 mb-5">
          <Col>
            <Card id={DarkLight()} className="venueCard h-100">
              <Card.Img className="cardImg rounded" style={{ width: "100%", height: "50vh", objectFit: "cover" }} variant="top" src={petrolImage} />
              <Card.Body>
                <Card.Title className="mb-3 fs-4 border-bottom">Petrol Head Blog</Card.Title>
                <div className="d-flex mb-2 mt-4  align-items-center justify-content-between">
                  <Link className="link" to="https://github.com/adrianBrands/project-exam-1-adrianBrands">
                    <Card.Text className="mb-0 link fs-5">
                      <Github color={DarkLightLogo()} size={35} /> Github Repo
                    </Card.Text>
                  </Link>
                  <Link className="link" to="https://roaring-pothos-bbe0ee.netlify.app/">
                    <Card.Text className="mb-0 link fs-5">
                      <BrowserSafari color={DarkLightLogo()} size={35} /> Live site
                    </Card.Text>
                  </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <Card.Text className="mt-3 fs-5">Project building a responsive blog website, with the interest of cars.</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card id={DarkLight()} className="venueCard h-100">
              <Card.Img className="cardImg rounded" style={{ width: "100%", height: "50vh", objectFit: "cover" }} variant="top" src={auctioImage} />
              <Card.Body>
                <Card.Title className="mb-3 fs-4 border-bottom">Auction site</Card.Title>
                <div className="d-flex mb-2 mt-4  align-items-center justify-content-between">
                  <Link className="link" to="https://github.com/adrianBrands/Semester-Project-2">
                    <Card.Text className="mb-0 link fs-5">
                      {" "}
                      <Github color={DarkLightLogo()} size={35} /> Github Repo
                    </Card.Text>
                  </Link>
                  <Link className="link" to="https://resilient-elf-b6a418.netlify.app/index.html">
                    <Card.Text className="mb-0 link fs-5">
                      <BrowserSafari color={DarkLightLogo()} size={35} /> Live site
                    </Card.Text>
                  </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <Card.Text className="mt-3 fs-5">
                    An auction website, where logged in users can bid on items, as well as create their own items for auction. The user can also
                    update their avatar image.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card id={DarkLight()} className="venueCard h-100">
              <Card.Img className="cardImg rounded" style={{ width: "100%", height: "50vh", objectFit: "cover" }} variant="top" src={ecom} />
              <Card.Body>
                <Card.Title className="mb-3 fs-4 border-bottom">Ecom site</Card.Title>
                <div className="d-flex mb-2 mt-4  align-items-center justify-content-between">
                  <Link className="link" to="https://github.com/adrianBrands/javascript-frameworks-ca">
                    <Card.Text className="mb-0 link fs-5">
                      {" "}
                      <Github color={DarkLightLogo()} size={35} /> Github Repo
                    </Card.Text>
                  </Link>
                  <Link className="link" to="https://splendid-figolla-7a87af.netlify.app/">
                    <Card.Text className="mb-0 link fs-5">
                      <BrowserSafari color={DarkLightLogo()} size={35} /> Live site
                    </Card.Text>
                  </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <Card.Text className="mt-3 fs-5">E-commerce site created with React</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card id={DarkLight()} className="venueCard h-100">
              <Card.Img className="cardImg rounded" style={{ width: "100%", height: "50vh", objectFit: "cover" }} variant="top" src={holidaze} />
              <Card.Body>
                <Card.Title className="mb-3 fs-4 border-bottom">Booking site</Card.Title>
                <div className="d-flex mb-2 mt-4  align-items-center justify-content-between">
                  <Link className="link" to="https://github.com/adrianBrands/projcet-exam-2">
                    <Card.Text className="mb-0 link fs-5">
                      {" "}
                      <Github color={DarkLightLogo()} size={35} /> Github Repo
                    </Card.Text>
                  </Link>
                  <Link className="link" to="https://endearing-squirrel-90a49e.netlify.app/">
                    <Card.Text className="mb-0 link fs-5">
                      <BrowserSafari color={DarkLightLogo()} size={35} /> Live site
                    </Card.Text>
                  </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <Card.Text className="mt-3 fs-5">Booking site created with React</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
