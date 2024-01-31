import React, { useState } from 'react';
import styles from './Header.module.css';
import styles2 from '../General/Button.module.css';
import menu from './MenuMobile.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../Assets/Logo Luigi.svg';
import Button from '../General/Button';
import '../App.module.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <header className={`container ${styles.bgHeader}`}>
        <Link to="/" aria-label="Logo Luigi">
          <Logo />
        </Link>
        <div
          className={menu.hamburger}
          onClick={toggleMenu}
          onTouchStart={toggleMenu}
        >
          {' '}
          <div className={menu.menuMobile}>
            <div className={menu.textMenu}>
              <p>Menu</p>
            </div>
            <div className={menu.menuHamburguer}>
              <div
                className={`${menu.menuHamburguerFechado} ${
                  showMenu ? menu.menuHamburguerAberto : ''
                }`}
              ></div>
            </div>
          </div>
        </div>
        <nav
          className={`${menu.menuFechado} ${showMenu ? menu.menuAberto : ''}`}
        >
          {' '}
          <ul className={styles.header} id="menu" role="menu">
            <li className={styles.menuItem}>
              <Link to="/" onClick={closeMenu}>
                About Me
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/work" onClick={closeMenu}>
                Work
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/portfolio" onClick={closeMenu}>
                Portfólio
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/contact" className={styles.button}>
          <Button>
            Me Contrate<span className={styles2.outraFont}>!</span>
          </Button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
