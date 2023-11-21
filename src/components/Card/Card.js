import React from 'react';
import styles from './Card.module.css';

export default function Card({ img, imgDesc, title, text, flexDirection }) {
  const cardStyles = {
    flexDirection: flexDirection === 'row' ? 'row' : 'row-reverse',
  };

  return (
    <div className={`${styles.card} ${styles[flexDirection]}`} style={cardStyles}>
        <img className={styles.img} src={img} alt={imgDesc} />
        <div className={styles.textDiv}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.pContent}>
            <div className={styles.text}>
              {text.split('\n').map((paragraph, index) => (
                <div key={index}>{paragraph}</div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
