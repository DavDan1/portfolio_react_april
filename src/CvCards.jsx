import React from 'react';
import { Card } from 'semantic-ui-react';

const CvCards = ({ cv }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{cv.name}</Card.Header>
        <Card.Description>{cv.address}</Card.Description>
        <Card.Description>{cv.email}</Card.Description>
        <Card.Description>{cv.occupation}</Card.Description>
        <Card.Description>{cv.experience}</Card.Description>
        <Card.Description>{cv.current}</Card.Description>
        <Card.Description>{cv.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CvCards;
