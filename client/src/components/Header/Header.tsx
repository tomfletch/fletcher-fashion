import styles from './Header.module.css';

function Header() {
  return (
    <header className="container">
      <div className={styles.header}>
        <a href="/" className={styles.logo}>
          Fletcher<span>Fashion</span>
        </a>
        <nav>
          <ul className={styles.navList}>
            <li><a href="/">All Products</a></li>
            <li><a href="#mens">Men's</a></li>
            <li><a href="#womens">Women's</a></li>
          </ul>
        </nav>
        <a href="#cart" aria-label="Shopping Cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </a>
      </div>
    </header>
  )
}

export default Header;
