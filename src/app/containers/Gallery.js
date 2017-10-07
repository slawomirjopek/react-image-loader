import React, { Component } from "react";
import GalleryImage from "../components/GalleryImage";

class Gallery extends Component {
    constructor() {
        super();

        this.state = {
            images: [
                {
                    title: "Image one",
                    author: "John Smith",
                    src: "https://i.pinimg.com/originals/e3/f8/98/e3f8985ed4e49b2eab5eabbbf56d3783.jpg"
                },
                {
                    title: "Image two",
                    author: "Ann Woolens",
                    src: "https://i.pinimg.com/originals/16/1f/5a/161f5a1e51561a808b7deecc7fe9e416.jpg"
                },
                {
                    title: "Image three",
                    author: "Kate Parrot",
                    src: "https://www.mosamic.com/images/products/cat-323262_1280_mosamic.jpg"
                },
                {
                    title: "Image four",
                    author: "Michael Johnson",
                    src: "http://quinnthecat.com/wp-content/uploads/2016/11/Quinn5.jpg"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Gallery</h1>
                { this.state.images.map((image, i) => <GalleryImage key={i} {...image}/>) }
            </div>
        )
    }
}

export default Gallery;

