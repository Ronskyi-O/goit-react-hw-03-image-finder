import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery"
import { ButtonLoadMore } from "components/Button/Button"


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
        <ImageGallery searchingImageName={this.state.searchingImageName} />
        {this.state.searchingImageName !== '' && <ButtonLoadMore />}
        <ToastContainer position="top-center" autoClose={2000} />
      </Container >
    );
  }

};
