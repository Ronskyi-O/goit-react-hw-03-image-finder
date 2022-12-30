import React, { Component } from "react";
import { ImSearch } from "react-icons/im"

import { Header, SearchButton, SerchForm, Input } from "./Searchbar.styled";

export class Searchbar extends Component {
    state = {
        searchingImage: '',
    }

    handleSearchingImageChange = event => {
        this.setState({
            searchingImage: event.currentTarget.value.toLowerCase()
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.reset()
    }

    reset = () => {
        this.setState({
            searchingImage: '',
        })
    }

    render() {

        const { searchingImage } = this.state

        return (
            <Header>
                <SerchForm onSubmit={this.handleSubmit} >
                    <SearchButton type="submit" >
                        <ImSearch />
                    </SearchButton>
                    <Input
                        type="text"
                        name="searchingImage"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={searchingImage}
                        onChange={this.handleSearchingImageChange}
                    />
                </SerchForm>
            </Header>
        )
    }
}