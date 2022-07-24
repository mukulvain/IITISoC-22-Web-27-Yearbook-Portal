import { Button, Col, Container, Row } from "react-bootstrap";
import SwiperComponent from "../../components/SwiperComponent";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <Container>
          <Row xs={1} lg={2} md={1}>
            <Col className="text-center text-lg-start">
              <p className="lead mb-0 fs-3">Welcome to</p>
              <h1 className="display-1">The Banyan</h1>
              <h1 className="display-6 fs-1">
                The Yearbook Portal of
                <br />
                Indian Institue of Technology, Indore
              </h1>

              {/* <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                aliquam praesentium porro excepturi laborum expedita deserunt
                sed reprehenderit temporibus eveniet.
              </p> */}
              <Button variant="success" className="me-3 mt-3">
                Login
              </Button>
              <Button
                variant="warning"
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
