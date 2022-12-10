import { Button, Col, Container, Row } from "react-bootstrap";
import SwiperComponent from "../../components/SwiperComponent";
import "./Hero.css";
import "../../fonts.css";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <Container>
          <Row xs={1} lg={2} md={1}>
            <Col
              className="text-center text-lg-start"
              style={{
                fontFamily: "Proza Libre, sans-serif",
                color: "#ffffffe2",
              }}
            >
              <p className="lead mb-0 fs-5">Welcome to</p>
              <h1
                className="display-1"
                style={{
                  fontWeight: "600",
                  color: "white",
                  fontStyle: "italic",
                }}
              >
                The Banyan
              </h1>
              <h1 className="display-6 fs-3">
                The Yearbook Portal of
                <br />
                Indian Institue of Technology, Indore
              </h1>

              {/* <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                aliquam praesentium porro excepturi laborum expedita deserunt
                sed reprehenderit temporibus eveniet.
              </p> */}
              <Button variant="light" className="me-3 mt-3">
                Login
              </Button>
              <Button
                style={{
                  background: "#f3f3f375",
                  borderColor: "#f3f3f375",
                  color: "white",
                }}
                className="me-2 mt-3"
                href="#pastyearbooks"
              >
                Past Yearbooks
              </Button>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <SwiperComponent />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
