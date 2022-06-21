import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        <h1>Omar</h1>
      </div>
    </nav>
  );
};

export default Navbar;
