import React from 'react'
import PropTypes from 'prop-types';

import './ImageCard.scss';

export default function ImageCard({url}) {
    return (<div className="imageCard">
                <img src={url} alt=""/>
            </div>
            )
        }


ImageCard.propTypes = {
    url: PropTypes.string.isRequired
};


