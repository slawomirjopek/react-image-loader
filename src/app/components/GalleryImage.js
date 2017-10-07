import React from "react";
import ImageLoader from "../utils/ImageLoader";

const style = {
    width: "100px",
    height: "100px"
};

const GalleryImage = (props) => (
    <div>
        <h2>{props.title}</h2>
        <ImageLoader src={props.src} style={style}/>
        <p>{props.author}</p>
    </div>
);

export default GalleryImage;