import React, { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryList } from "./ImageGallery.styled"


export class ImageGallery extends Component {
    state = {
        images: [],
    }

    componentDidUpdate(prevProps, _) {
        const prevName = prevProps.searchingImageName
        const newName = this.props.searchingImageName

        if (prevName !== newName) {
            fetch(`https://pixabay.com/api/?q=${newName}&page=1&key=31359912-5b88546d239f41508b7e3830d&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(image => this.setState({ images: image.hits }))
        }
    }


    render() {
        return (
            <ImageGalleryList>
                {this.state.images.map(({ id, webformatURL, largeImageURL }) => (
                    <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />
                ))}
            </ImageGalleryList >)
    }
}




