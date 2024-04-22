import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";

const LoadingSpinner = ({ message }) => {
  return (
    <Row className="loadingSpinner">
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <Spinner className="mb-3" />
        {message && message.length ? <p>{message}</p> : null}
      </Col>
    </Row>
  );
};
export default LoadingSpinner;
