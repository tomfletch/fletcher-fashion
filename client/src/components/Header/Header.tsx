import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useShoppingCartContext } from '../../context/ShoppingCardContext';

function Header() {
  const { totalQuantity } = useShoppingCartContext();

  return (
    <header className="container">
      <div className={styles.header}>
        <Link to="/" className={styles.logo}>
          Fletcher<span>Fashion</span>
        </Link>
        <nav>
          <ul className={styles.navList}>
            <li><NavLink to="/">All Products</NavLink></li>
            <li><NavLink to="/sale">Sale</NavLink></li>
            <li><NavLink to="/men">Men</NavLink></li>
            <li><NavLink to="/women">Women</NavLink></li>
          </ul>
        </nav>
        <NavLink to="cart" aria-label="Your Shopping Cart">
          {totalQuantity !== 0 && (
            <span className={styles.cartQuantity}>{totalQuantity}</span>
          )}
          <i className="fa-solid fa-cart-shopping"></i>
        </NavLink>
      </div>
    </header>
  )
}

export default Header;
