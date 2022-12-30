import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from "components/Searchbar/Searchbar";


import { Container } from './App.styled'

export class App extends Component {

  state = {
    searchingImageName: '',
  }
  handleFormSubmit = searchingImageName => {
    this.setState({ searchingImageName })
  }

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer position="top-center" autoClose={3000} />
      </Container >
    );
  }

};
