import { Col, Container, Row } from "react-bootstrap";

export function AboutContent() {
  return (
    <Container>
      <Row>
        <Col sm>
          <p className="text-white">
            test Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maiores expedita saepe quasi dignissimos doloremque unde incidunt
            error soluta itaque, nulla quibusdam ullam. Culpa recusandae saepe optio in ipsa voluptatibus.
          </p>
        </Col>
        <Col sm>
          <p className="text-white">
            test2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores neque nam illum blanditiis veniam, doloribus
            accusantium vitae sit cumque velit animi placeat dicta alias fuga perspiciatis laudantium aspernatur. Natus.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
