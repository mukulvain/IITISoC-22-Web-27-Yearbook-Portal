import { Container, Button, Card } from "react-bootstrap";

const YearbookCard = () => {
  return (
    <>
      <div>
        <Container className="m-4 p-3">
          <Card
            className="text-end shadow"
            style={{ width: "20rem", background: "#c5c5c559" }}
          >
            <Card.Img variant="top" src="/img/img1.webp"></Card.Img>
            <Card.Body>
              <Card.Title as="h4">2020</Card.Title>
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
