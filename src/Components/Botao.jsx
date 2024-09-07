import React from 'react';

/* CSS */
import styles from '../Styles/Button.module.css';

const Button = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
