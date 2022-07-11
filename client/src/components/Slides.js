import { Container, Col, Row } from "react-bootstrap";

const Slides = () => {
  return (
    <>
      <div className="slides-section">
        <Container>
          <Row xs={1} lg={1} md={1} className="justify-content-md-center">
            <Col
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "200px" }}
            >
              <p
                className="lead"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Fugiat aliquam praesentium porro excepturi laborum expedita
                deserunt sed reprehenderit temporibus eveniet."
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
