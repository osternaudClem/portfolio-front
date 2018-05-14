import React, { Component } from 'react';
import styles from './Network.scss';
// Components
import { Icon } from '../Icon';

class Network extends Component {
  render() {
    const { network } = this.props;
    return (
      <a
        href={network.url}
        className={styles.Networks__item}
        target="_blank"
        key={`network-${network.label}`}
      >
        <Icon name={`${network.label}-color`} />
      </a>
    );
  }
}

export default Network;
