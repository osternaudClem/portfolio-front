import React from 'react';
import classnames from 'classnames';
import styles from './Loading.scss';

const Loading = () => {
  return (
    <div className={styles['Loading__container']}>
      <div className={classnames(styles.Loading, styles['Loading--fixed'])}>
        <div className={styles['Loading__circle']} />
        <div className={styles['Loading__text']}>Loading...</div>
      </div>
    </div>
  );
};

export default Loading;
