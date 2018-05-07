import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';

const Code = props => {
  const { code, language } = props;

  return (
    <div className="code-highlight">
      {language && <span className="code-highlight-language">{language}</span>}
      <Highlight language={language}>{code}</Highlight>
    </div>
  );
};

Code.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
};

Code.defaultProps = {
  language: null,
};

export default Code;
