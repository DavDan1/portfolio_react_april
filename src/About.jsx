import React, { Component } from "react";
import { Container } from "semantic-ui-react";

const About = () => {
  return (
    <Container>
      <h1 id="about-header">About Me</h1>
      <p>
        React Router has, among others, the Switch and Route components. The
        Route component renders a page if the current URL location matches the
        path prop specified in it.
      </p>
    </Container>
  );
};

export default About;
