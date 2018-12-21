import React from 'react';
import { Card, CardImg, CardText, CardBody, Container, Row, Col,
  CardTitle, CardSubtitle, Button, h1 } from 'reactstrap';
import Nathaniel from "../image/four.jpeg";

const AppCard = (props) => {
  return (
    <Container >
      <Row className="text">
      <Col>
      <h3><b>OUR AMIABLE TEAM</b></h3>
      </Col>
      </Row>
     
      <Row className="teams">
     
        <Col>
      <Card>
        <CardImg top width="100%" src={Nathaniel} />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <div className="bg">
    </div>
    </Col>

    <Col>
      <Card>
        <CardImg top width="100%" src={Nathaniel} />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <div className="bg">
    </div>
    </Col>

    <Col>
      <Card>
        <CardImg top width="100%" src={Nathaniel} />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <div className="bg">
    </div>
    </Col>

    <Col>
      <Card>
        <CardImg top width="100%" src={Nathaniel} />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <div className="bg">
    </div>
    </Col>

    </Row>
    </Container>
    
  );
};

export default AppCard;