import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) {
    const location = useLocation();

    return (
        <span className={styles.span}>
            <Link className={`${styles.link} ${location.pathname === to ? styles.linkHighlighted : ""} ${styles.wrap}`} to={to}>
                {children}
            </Link>
        </span>
    )
}
