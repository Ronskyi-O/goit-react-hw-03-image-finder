import React from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryList } from "./ImageGallery.styled"

export const ImageGallery = ({ searchingImageName }) => {
    return (
        <ImageGalleryList>
            <ImageGalleryItem />
        </ImageGalleryList>
    )
}