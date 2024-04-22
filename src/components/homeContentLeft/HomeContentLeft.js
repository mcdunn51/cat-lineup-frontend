import { Row, Col } from "react-bootstrap";

const HomeContentLeft = ({ header, subheader }) => {
  return (
    <Col className="d-flex flex-column align-items-center justify-content-center">
      <Row>
        <Col>
          <h1 className="display-4 fw-bold">{header}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="lead fw-semibold">{subheader}</p>
        </Col>
      </Row>
    </Col>
  );
};

export default HomeContentLeft;
