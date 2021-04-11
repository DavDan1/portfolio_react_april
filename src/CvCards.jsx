import React from "react";
import { Container, Divider, Card, Header } from "semantic-ui-react";

//const ToCebabCase = (string) => {
 // return string.replace(/\s+/g, "-").replace(":", "").toLowerCase();
//};

const CvCards = ({ cv }) => {
  return (
    <Card>
      
      <Card.Content>
       
        <Card.Header>{cv.name}</Card.Header>
        <Card.Header>{cv.address}</Card.Header>
        <Card.Header>{cv.occupation}</Card.Header>
        <Card.Header>{cv.experience}</Card.Header>
        <Card.Header>{cv.current}</Card.Header>
        <Card.Description>{cv.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CvCards;
