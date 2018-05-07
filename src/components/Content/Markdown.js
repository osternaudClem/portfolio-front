import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Remarkable from 'remarkable';
import marksy from 'marksy/components';
import { transformAttributes } from '../../lib/contentUtils';
import { getImage } from '../../lib/blogUtils';
// Components
import Code from './Code';
import Gist from './Gist';
import Image from './Image';

const compile = marksy({
  createElement,
  components: {
    Gist({ gist, file, ...props }) {
      return <Gist gist={gist} file={file} {...props} />;
    },
    Iframe({ context, children, ...props }) {
      return (
        <div className="video-container">
          <iframe title="iframe-video" {...transformAttributes(props)} />
        </div>
      );
    },
    Image({ context, children, src, alt, ...props }) {
      const caption = new Remarkable().render(children[0]);
      const figureClassNames = classnames({
        [`align-${props.align}`]: props.align,
      });

      const captionClassNames = classnames('figcaption', {
        [`align-${props.captionAlign}`]: props.captionAlign,
      });

      return (
        <figure className={figureClassNames} key={`image-${src}`}>
          <Image src={getImage(src)} alt={alt} />
          {children && (
            <figcaption
              className={captionClassNames}
              dangerouslySetInnerHTML={{ __html: caption }}
            />
          )}
        </figure>
      );
    },
  },
  elements: {
    code({ language, code, children }) {
      return children ? ( // render inline code:
        <code>{children}</code> // render block code:
      ) : (
        <Code language={language} code={code} />
      );
    },
    img({ src, alt }) {
      return <Image src={getImage(src)} alt={alt} />;
    },
  },
});

const Markdown = props => {
  const compiled = compile(props.content, {});

  return <div>{compiled.tree}</div>;
};

Markdown.propTypes = {
  content: PropTypes.string,
};

Markdown.defaultProps = {
  content: undefined,
};

export default Markdown;
