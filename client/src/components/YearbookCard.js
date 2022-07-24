import { Container, Button, Card, Badge } from "react-bootstrap";

const YearbookCard = (props) => {
  return (
    <>
      <div>
        <Container className="m-4 p-3">
          <Card
            className="text-end shadow"
            style={{ width: "20rem", background: "#f1f1f1" }}
          >
            <Card.Img variant="top" src={props.data.img}></Card.Img>
            <Card.Body>
              {props.data.badge ? (
                <Badge bg="secondary">{props.data.badge}</Badge>
              ) : (
                <br />
              )}
              <Card.Title as="h4">{props.data.yr}</Card.Title>
              <Button variant="success" className="m-2">
                View YearBook
              </Button>
              <Button variant="warning">Download PDF</Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default YearbookCard;
