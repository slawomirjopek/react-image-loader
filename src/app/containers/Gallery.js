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
                    src: "http://lorempixel.com/1920/1920/cats/"
                },
                {
                    title: "Image two",
                    author: "Ann Woolens",
                    src: "http://lorempixel.com/1920/1920/sports/"
                },
                {
                    title: "Image three",
                    author: "Kate Parrot",
                    src: "http://lorempixel.com/1920/1920/city/"
                },
                {
                    title: "Image four",
                    author: "Michael Johnson",
                    src: "http://lorempixel.com/1920/1920/nature/"
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

