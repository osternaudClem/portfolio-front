import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.scss';
import logo from '../../assets/images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.Header}>
        <Link to="/" className={styles['Header__logo']}>
          <img src={logo} alt="Clement Osternaud Logo" />
        </Link>
        <nav>
          <NavLink
            to="/"
            exact
            className={styles['Header__link']}
            activeClassName={styles['Header__link--active']}
          >
            Home
          </NavLink>
          <NavLink
            to="/articles"
            className={styles['Header__link']}
            activeClassName={styles['Header__link--active']}
          >
            Articles
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
