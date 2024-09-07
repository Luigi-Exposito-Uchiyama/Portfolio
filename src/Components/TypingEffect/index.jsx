import React, { useState, useEffect } from 'react';

/* CSS */
import styles from './TypingEffect.module.css';

function TypingEffect() {
  const [typingText, setTypingText] = useState('');
  const texto =
    'Eae! Eu sou o Luigi, um Full Stack Junior que mora em São Paulo.';
  const textoArray = texto.split('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingTimer = setInterval(() => {
      if (index < textoArray.length) {
        setTypingText((prevText) => prevText + textoArray[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingTimer);
        setTimeout(() => {
          setTypingText('');
          setIndex(0);
        }, 5000);
      }
    }, 75);

    return () => clearInterval(typingTimer);
  }, [index, textoArray]);

  return <h1 className={styles.anima}>{typingText}</h1>;
}

export default TypingEffect;
