import React from 'react';
import styles from './Icon.module.css'

export default function Icon({ src, alt, width, height, margin }) {
  const iconStyle = {
    width: width,
    height: height,
    margin: margin,
  };

  return (
    <img className={styles.icon} src={src} alt={alt} style={iconStyle} />
  );
}
