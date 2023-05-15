import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Link to="/" className={styles.logo}>
          Fletcher<span>Fashion</span>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
