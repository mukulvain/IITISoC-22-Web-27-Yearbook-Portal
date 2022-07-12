import { Container, Col, Row } from "react-bootstrap";

const Slides = (props) => {
  return (
    <>
      <div className="slides-section">
        <Container>
          <Row xs={1} lg={1} md={1} className="justify-content-md-center">
            <Col
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "200px", flexDirection: "column" }}
            >
              <p
                className="lead text-center"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                "{props.data.quote}"
              </p>
              <p
                className="lead text-center"
                style={{
                  color: "yellow",
                  fontFamily: "Aerial",
                  textShadow: "0.5px 1px 2px black",
                }}
              >
                ~ {props.data.author}
              </p>
            </Col>
            <Col>
              <Row xs={2} lg={2} md={2}>
                <Col></Col>
                <Col></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Slides;
