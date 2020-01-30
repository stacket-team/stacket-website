import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

const Icon = ({ src, ...props }) => (
  <div {...props}>
    <SVG src={src} />
  </div>
);

Icon.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Icon;
