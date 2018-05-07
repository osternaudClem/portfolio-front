import React from 'react';
import { getImage } from '../../lib/blogUtils.js';
import styles from './Intro.scss';
// Components
import { Networks } from '../Networks';

const Intro = ({ user }) => {
  return (
    <section className={styles.Intro}>
      <div className={styles['Intro__container']}>
        <img
          src={getImage(user.profile_image)}
          alt={`profile ${user.name}`}
          className={styles['Intro__avatar']}
        />
        <div className={styles['Intro__content']}>
          <div>{user.bio}</div>
          <Networks />
        </div>
      </div>
    </section>
  );
};

export default Intro;
