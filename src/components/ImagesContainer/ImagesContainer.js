import React, { Component } from 'react'
import ImageCard from "../ImageCard/ImageCard";

export default class ImagesContainer extends Component {
    render() {
        const {urls} = this.props;
        return (
            <div>
                {urls.map((item, index)=> <ImageCard key={index} url={item}/>)}
            </div>
        )
    }
}
