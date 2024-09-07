import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.css';

import Button from '../../Components/Button';

function Error() {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorMessage}>Oops! Página não encontrada</h2>
        <p className={styles.errorDescription}>
          A página que você está procurando não existe ou foi removida.
        </p>
        <Link to="/">
          <Button>Voltar ao início</Button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
