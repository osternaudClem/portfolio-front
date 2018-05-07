import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Icon.scss';
const files = require.context('./icons', true, /.*\.svg$/);
files.keys().forEach(files);

const Icon = ({ name }) => {
  const iconClassNames = classnames(styles.icon);

  return (
    <svg className={iconClassNames} height="1em">
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;