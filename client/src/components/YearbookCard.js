import { Container, Col, Row, Button } from "react-bootstrap";

const YearbookCard = () => {
  return (
    <>
      <div>
        <Container className="mt-3">
          <Container style={{ borderRadius: "5%", background: "red" }}>
            <Row
              lg={1}
              className="mt-2"
              style={{
                background: "green",
                maxWidth: "400px",
                borderRadius: "6%",
              }}
            >
              <Col style={{ padding: "0" }}>
                <img
                  src="/img/img1.webp"
                  alt="img1"
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: "6% 6% 0 0",
                  }}
                />
              </Col>
              <Col>
                <p>Description</p>
                <Button>2020</Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default YearbookCard;
