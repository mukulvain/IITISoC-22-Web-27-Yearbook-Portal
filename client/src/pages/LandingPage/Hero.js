import { Button, Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <Container>
          <Row xs={1} md={2} lg={2}>
            <Col>
              <p className="lead">Welcome to</p>
              <h1 className="display-1">The Banyan</h1>
              <h1 className="display-6">
                The Yearbook Portal of
                <br />
                Indian Institue of Technology, Indore
              </h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                aliquam praesentium porro excepturi laborum expedita deserunt
                sed reprehenderit temporibus eveniet.
              </p>
              <Button variant="primary" className="m-2">
                Login
              </Button>
              <Button variant="secondary" className="m-2">
                Past Yearbooks
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
