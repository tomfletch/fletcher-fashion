import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className="container">
      <div className={styles.header}>
        <Link to="/" className={styles.logo}>
          Fletcher<span>Fashion</span>
        </Link>
        <nav>
          <ul className={styles.navList}>
            <li><Link to="/">All Products</Link></li>
            <li><Link to="/sale">Sale</Link></li>
            <li><Link to="/mens">Men's</Link></li>
            <li><Link to="/womens">Women's</Link></li>
          </ul>
        </nav>
        <Link to="cart" aria-label="Your Shopping Cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
    </header>
  )
}

export default Header;
