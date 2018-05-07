import React, { Component } from 'react';
import styles from './Network.scss';
// Components
import { Icon } from '../Icon';

class Network extends Component {
  state = {
    icon: this.props.network.label,
  };

  _onEnter = () => {
    const { network } = this.props;
    this.setState({
      icon: `${network.label}-color`,
    });
  };

  _onLeave = () => {
    const { network } = this.props;
    this.setState({
      icon: `${network.label}`,
    });
  };

  render() {
    const { network } = this.props;
    return (
      <a
        href={network.url}
        className={styles.Networks__item}
        target="_blank"
        key={`network-${network.label}`}
        onMouseEnter={this._onEnter}
        onMouseLeave={this._onLeave}
      >
        <Icon name={`${this.state.icon}`} />
      </a>
    );
  }
}

export default Network;
