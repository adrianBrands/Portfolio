import { Col, Container, Image, Row } from "react-bootstrap";
import profileImage from "../../images/profilbilde.jpg";
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function AboutContent() {
  const { theme } = useContext(ThemeContext);
  return (
    <Container className={theme === "light" ? "text-white" : "text-dark"}>
      <Row className="mt-3">
        <Col sm>
          <Image style={{ width: "100%", height: "70vh", objectFit: "cover" }} src={profileImage} />
        </Col>
        <Col sm>
          <h3>Front-end developer student at Noroff School of Technology and Digital Media. Graduating 06/2023.</h3>
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-5">
            <h4 className="fw-bolder">Contact me:</h4>
            <p className="fs-4 mt-0 fw-bolder tester">adrianbrandshaug@hotmail.com</p>
          </div>
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-5">
            <Link to="https://github.com/adrianBrands">
              <Github className="mt-4 mb-0" color={theme === "light" ? "white" : "dark"} size={45} />
            </Link>
            <Link to="https://www.linkedin.com/in/adrian-brandshaug-b15a95279">
            <Linkedin className="mt-4 mb-0" color={theme === "light" ? "white" : "dark"} size={45} />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
