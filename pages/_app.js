import '../styles/Home.module.css';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>North Stream Solutions</div>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
