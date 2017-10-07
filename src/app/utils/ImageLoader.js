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
            <div>
                { this.state.loaded && <img src={this.props.src} style={this.props.style}/> }
            </div>
        )
    }

    componentDidMount() {
        this.load();
    }

    componentWillUnmount() {
        this.detachEvent();
    }

    load() {
        this.image = new Image();
        this.attachEvents();
        this.setState({ loading: true });
        this.image.src = this.props.src;
    }

    attachEvents() {
        this.image.onload = this.loadHandler.bind(this);
        this.image.onerror = this.errorHandler.bind(this);
    }

    detachEvent() {
        this.image.onload = null;
        this.image.onerror = null;
    }

    loadHandler(e) {
        this.setState({ loading: false, loaded: true });
        console.log(e);
    }

    errorHandler(e) {
        this.setState({ loading: false, error: true });
        console.log(e);
    }
}

ImageLoader.propTypes = {
    src: PropTypes.string,
    children: PropTypes.func
};

export default ImageLoader;