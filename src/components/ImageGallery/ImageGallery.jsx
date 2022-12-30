import React from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryList } from "./ImageGallery.styled"

export const ImageGallery = () => {
    return (
        <ImageGalleryList>
            <ImageGalleryItem />
        </ImageGalleryList>
    )
}