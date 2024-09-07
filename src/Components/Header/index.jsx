import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* ACESSIBILIDADE */
import Button from '../Button';

/* IMAGENS */
import { ReactComponent as Logo } from '../../Assets/Logo Luigi.svg';

/* CSS */
import '../../App.module.css';
import styles from './Header.module.css';
import menu from './MenuMobile.module.css';

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
        <div className={menu.hamburger} onClick={toggleMenu}>
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
          <Button>Me Contrate!</Button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
