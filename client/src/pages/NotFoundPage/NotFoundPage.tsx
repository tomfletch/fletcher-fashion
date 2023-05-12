import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={styles.notFoundPage}>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you were looking for can't be found.</p>
      <div className={styles.buttons}>
        <Link to="/" className="btn btn-ghost">View all products</Link>
        <Link to="/sale" className="btn btn-primary">Take me to the sale!</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
