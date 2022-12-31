import React, { Component } from "react";
import { toast } from 'react-toastify';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
// import { ButtonLoadMore } from "components/Button/Button"
import { Loader } from "components/Loader/Loader";
import { ImageGalleryList } from "./ImageGallery.styled"


export class ImageGallery extends Component {
    state = {
        images: [],
        loading: false,
    }

    componentDidUpdate(prevProps, _) {
        const prevName = prevProps.searchingImageName
        const newName = this.props.searchingImageName
        const API_KEY = '31359912-5b88546d239f41508b7e3830d'

        if (prevName !== newName) {
            this.setState({ loading: true, images: [] });
            fetch(`https://pixabay.com/api/?q=${newName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(responce => {
                    if (responce.ok) {
                        return responce.json()
                    }
                    return Promise.reject(
                        new Error(toast.error(`We don't have images ${newName}`))
                    )
                })
                .then(image => this.setState({ images: image.hits }))
                .catch(() => toast.error(`We don't have images ${newName}`))
                .finally(() => this.setState({ loading: false }))
        }
    }

    render() {
        const { images, loading } = this.state
        return (
            <ImageGalleryList>
                {loading && <Loader />}
                {images.map(({ id, webformatURL, largeImageURL }) => (
                    <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />
                ))}
                {/* {images.length !== 0 && <ButtonLoadMore />} */}
            </ImageGalleryList >)
    }
}




