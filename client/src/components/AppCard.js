import React from 'react';
import { Card, CardImg, CardText, CardBody, Row, Col,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Nathaniel from "../image/four.jpeg";

const AppCard = (props) => {
  return (
    <div>
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
    </div>
    
  );
};

export default AppCard;