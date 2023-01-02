import React from "react";
import { ImageGalleryListItem, Image } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ webformatURL }) => {



    return (
        <ImageGalleryListItem>
            <Image src={webformatURL} alt="" />
        </ImageGalleryListItem>
    )
}