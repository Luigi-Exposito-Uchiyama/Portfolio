import React, { useEffect, useState } from 'react';

/* CSS */
import styles from './Footer.module.css';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      © <span id="ano">{year}</span> Luigi Uchiyama, All rights reserved.
    </footer>
  );
};

export default Footer;
