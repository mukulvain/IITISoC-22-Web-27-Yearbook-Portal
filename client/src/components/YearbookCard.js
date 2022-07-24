import { Container, Button, Card, Badge } from "react-bootstrap";

const YearbookCard = (props) => {
  return (
    <>
      <div>
        <Container className="m-4 p-3">
          <Card
            className="text-end shadow"
            text="white"
            style={{ width: "15rem", background: "#f1f1f1" }}
          >
            <Card.Img variant="top" src={props.data.img}></Card.Img>
            <Card.ImgOverlay>
              <Card.Body>
                <div className="text-start">
                  <h5>
                    {props.data.badge ? (
                      <Badge bg="warning">{props.data.badge}</Badge>
                    ) : (
                      <br />
                    )}
                  </h5>
                </div>
                {/* <div className="align-items-end"> */}
                <Card.Subtitle as="h6" style={{ marginTop: "115px" }}>
                  Yearbook
                </Card.Subtitle>
                <Card.Title as="h1">{props.data.yr}</Card.Title>
                <Button
                  className="m-2"
                  style={{
                    background: "#f3f3f375",
                    border: "0",
                    color: "white",
                  }}
                >
                  View
                </Button>
                <Button
                  variant="light"
                  // style={{
                  //   background: "#f3f3f375",
                  //   border: "0",
                  //   color: "white",
                  // }}
                >
                  Download
                </Button>
                {/* </div> */}
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default YearbookCard;
