import styles from '../styles/Footer.module.scss';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <AiFillGithub className={styles.icon} />
        <AiFillLinkedin className={styles.icon} />
      </div>

      <span>&copy; {year} Omar Sadat</span>
    </footer>
  );
};

export default Footer;
