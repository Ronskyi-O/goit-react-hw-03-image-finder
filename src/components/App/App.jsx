import React, { Component } from "react";
import { Searchbar } from "components/Searchbar/Searchbar";

import { Container } from './App.styled'

export class App extends Component {
  render() {
    return (
      <Container>
        <Searchbar />
      </Container >
    );
  }

};
