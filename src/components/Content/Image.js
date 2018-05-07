import React from 'react';
import PropTypes from 'prop-types';
import ImageZoom from 'react-medium-image-zoom';

const Image = ({ src, alt, className, style }) => {
  return (
    <ImageZoom
      image={{
        src,
        alt,
        className,
        style,
      }}
      zoomImage={{
        src,
        alt,
      }}
    />
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  style: PropTypes.string,
};

Image.defaultProps = {
  alt: undefined,
  className: undefined,
  style: undefined,
};

export default Image;
