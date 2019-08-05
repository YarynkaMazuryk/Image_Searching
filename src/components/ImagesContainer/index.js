import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageCard from "../ImageCard/ImageCard";

import './ImagesContainer.scss';

export default class ImagesContainer extends Component {
    render() {
        const {urls} = this.props;
        return ( <div className="imagesContainer">
            { (urls.length !== 0)         
                ? urls.map((item, index)=> <ImageCard key={index} url={item}/>)
                : <h2 className="warningMessage">Nothing found</h2>
            }
            </div>
        )
    }
}

ImagesContainer.propTypes = {
    urls: PropTypes.array.isRequired
}

