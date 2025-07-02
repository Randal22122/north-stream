// pages/index.js
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>Modern Solutions for a Changing World</h1>
        <p>
          North Stream Solutions delivers innovative strategies and robust technology to propel your business forward.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Start a Conversation
        </Link>
      </div>
    </main>
  );
}