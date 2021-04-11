import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hello from "./Hello";
import About from "./About";
import Projects from "./Projects";
import MyCv from "./MyCv";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/cv" component={MyCv}></Route>

        <Hello />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
