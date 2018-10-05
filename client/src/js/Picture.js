import React from 'react';
import '../css/Picture.css';

/**
 * Renders a stylized picture on screen.
 * @param props 'length' prop should define whether picture takes up full
 * width or half width. 'src' should be the imported picture.
 * @constructor
 */
const Picture = props => (
    <div className={'picture-container ' + props.length}>
        <img src={props.src} className='picture'/>
    </div>
);

export default Picture;