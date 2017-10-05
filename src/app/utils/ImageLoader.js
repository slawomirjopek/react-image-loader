import React, { Component } from "react";
import PropTypes from 'prop-types';

class ImageLoader extends Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            loaded: false,
            error: false
        };
    }

    render() {
        return (
            <div>TBA</div>
        )
    }

    componentDidMount() {
        this.attachEvents();
    }

    componentWillUnmount() {
        this.detachEvent();
    }

    load() {}

    attachEvents() {}

    detachEvent() {}

    loadHandler() {}

    errorHandler() {}
}

ImageLoader.propTypes = {
    src: PropTypes.string,
    children: PropTypes.func
};

export default ImageLoader;