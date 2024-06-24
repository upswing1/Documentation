// src/components/ZoomableImage.js

import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ZoomableImage = ({ src, alt }) => (
    <Zoom>
        <img src={src} alt={alt} style={{ width: '100%' }} />
    </Zoom>
);

export default ZoomableImage;
