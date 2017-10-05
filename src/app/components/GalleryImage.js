import React from "react";

const style = {
    width: "100px",
    height: "100px"
};

const GalleryImage = (props) => (
    <div>
        <h2>{props.title}</h2>
        <img src={props.src} style={style}/>
        <p>{props.author}</p>
    </div>
);

export default GalleryImage;