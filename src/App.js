import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
import Showcase from './components/Showcase';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact>
        <Showcase />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/contact">
        <ContactForm />
      </Route>  
    </Router>
  );
};

export default App;
