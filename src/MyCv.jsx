import React, { Component } from "react";
import { Container } from "semantic-ui-react";

const Cv = () => {
  return (
    <Container>
      <h1 id="cv-header">My Cv</h1>
      <h3 id="name">Davit Danielyan</h3>
      <p id="address">Mässvägen 15, 19161 Sollentuna Stockholm, Sweden</p>
      <p id="occupation">Fullstack Developer</p>
      <p id="experience">Frontend Developer</p>
    <p id="current">Student at Craft Academy</p>
    </Container>
  );
  
};

export default Cv;
