import { Col } from "react-bootstrap";

const HomeContentRight = ({ src }) => {
  return (
    <Col className="d-flex flex-column align-items-center justify-content-center">
      <img className="rounded" src={src} />
    </Col>
  );
};

export default HomeContentRight;
