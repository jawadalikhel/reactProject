import React from 'react';
import './Styles/Avatar.css';

const Avatar = props => {
  return (
    // The "style" prop allows inline styles to be applied to the "avatar" div
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        /* The "style" prop applies inline styles to the image, controlling its width and height */
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;