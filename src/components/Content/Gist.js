import React from 'react';
import PropTypes from 'prop-types';

class Gist extends React.Component {
  state = {
    loading: true,
    src: '',
    gistCallbackId: 0,
    stylesheetAdded: false,
  };

  static gistCallbackId = 0;
  static stylesheetAdded = false;

  componentDidMount() {
    // Create a JSONP callback that will set our state
    // with the data that comes back from the Gist site
    const gistCallback = Gist.nextGistCallback();
    window[gistCallback] = function(gist) {
      this.setState({
        loading: false,
        src: gist.div,
      });

      Gist.addStylesheet(gist.stylesheet);
    }.bind(this);


    let url =
      'https://gist.github.com/' +
      this.props.gist +
      '.json?callback=' +
      gistCallback;
    if (this.props.file) {
      url += '&file=' + this.props.file;
    }

    // Add the JSONP script tag to the document.
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.head.appendChild(script);
  }

  static nextGistCallback() {
    return 'embed_gist_callback_' + Gist.gistCallbackId++;
  }

  static addStylesheet(href) {
    if (!Gist.stylesheetAdded) {
      Gist.stylesheetAdded = true;
      let link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = href;

      document.head.appendChild(link);
    }
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    } else {
      return <div dangerouslySetInnerHTML={{ __html: this.state.src }} />;
    }
  }
}

Gist.propTypes = {
  gist: PropTypes.string.isRequired, // e.g. "username/id"
  file: PropTypes.string, // to embed a single specific file from the gist
};

Gist.defaultProps = {
  file: undefined,
};

export default Gist;
